abstract class BaseError extends Error {
  abstract code: number;
  abstract payload: unknown;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

export class HttpError extends BaseError {
  __proto__ = Error;
  code: number;
  payload: unknown;

  constructor(code: number, message: string, payload?: unknown) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = 'ApiError';
    this.code = code;
    this.payload = payload;
  }
}
