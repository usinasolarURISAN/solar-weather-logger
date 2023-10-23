const defaultErrorMessage =
  'An unknown API error has occurred. Please try again later.';

export default class ResponseErrorHandler extends Error {
  message: string;

  code: string;

  constructor(err: { response: { data: { message: string; cod: string } } }) {
    super();
    this.message = err.response?.data?.message || defaultErrorMessage;
    this.code = err.response?.data?.cod || '0';
  }
}
