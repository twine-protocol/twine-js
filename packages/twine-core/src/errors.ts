/**
 * General Twine Error class
 *
 * @group Errors
 */
export class TwineError extends Error { }

/**
 * Signifies that the twine data does not follow specs
 *
 * @group Errors
 */
export class InvalidTwineData extends TwineError { }

/**
 * Signifies that the signature is invalid
 *
 * @group Errors
 */
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

/**
 * Thrown when crawling cannot resolve a pulse
 *
 * @group Errors
 */
export class IncompleteResolution extends TwineError { }
