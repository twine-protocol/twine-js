import { writeFile, stat } from 'node:fs/promises'
import type { ArrayBufferView } from 'bun'
import { createWriteStream } from 'node:fs'
import { Readable } from 'node:stream'

function isAsyncIterable<T>(x: any): x is AsyncIterable<T> {
  return x && typeof x[Symbol.asyncIterator] === 'function'
}

export async function output(content: string | ArrayBufferLike | ArrayBufferView | AsyncIterable<Uint8Array>, path: string | undefined) {
  if (path) {
    const filestats = await stat(path).catch(() => null)
    if (filestats) {
      if (filestats.isFile()) {
        throw new Error(`File ${path} already exists`)
      }
      if (filestats.isDirectory()) {
        throw new Error(`Path ${path} is a directory`)
      }
    }
    if (isAsyncIterable(content)) {
      // @ts-ignore
      Readable.from(content)
        .pipe(createWriteStream(path))
    } else {
      await writeFile(path, content)
    }
  } else {
    console.log(content)
  }
}