
const objectCtorString = Function.prototype.toString.call(Object)

export const isObjectLike = (v: any) => v !== null && typeof v === 'object'

export const isPlainObject = (value: any) => {
  if (!isObjectLike(value)) { return false }
  const proto = Object.getPrototypeOf(value)
  if (proto === null) {
    return true
  }
  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && Ctor instanceof Ctor &&
    Function.prototype.toString.call(Ctor) === objectCtorString
}