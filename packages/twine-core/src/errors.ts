export class TwineError extends Error { }

export class InvalidTwineData extends TwineError { }

export class InvalidSignature extends TwineError {
  constructor(msg: string, ...params: any[]) {
    msg = msg ? `Invalid Signature: ${msg}` : 'Invalid Signature'
    super(...[msg, ...params])
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidSignature)
    }
    this.name = 'InvalidSignature'
  }
}

export class InvalidPulse extends TwineError { }

export class LatePulse extends TwineError { }

export class BrokenChain extends TwineError { }

export class InvalidPrecom extends TwineError {
  constructor(...params: any[]) {
    super(...params)
    this.message = 'Invalid precommitment value'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPrecom)
    }
    this.name = 'InvalidPrecom'
  }
}

export class IncompleteResolution extends TwineError { }
