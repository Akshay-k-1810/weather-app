import { Response } from 'express';

export class ErrorModel {
  public serverDateTime?: string;
  public correlationId?: string;

  constructor(
    public errorI18NMessage: string, // The message code of the entry in the i18n file
    public httpCode: number = 500, // The HTTP code to send back to the frontend. Defaults to 500
  ) {}
}

export function sendError(res: Response<any, Record<string, any>>, e: any) {
  // this function catches the ErrorModel errors sent from Axios.
  // It is not supposed to get other kinds of error unless it's a network failure or a programming error (TypeError) for example.
  // Cannot be tested from the frontend
  let error, responseCode;
  /* istanbul ignore else */
  if (e instanceof ErrorModel) {
    error = e as ErrorModel;
    responseCode = error.httpCode;
  } else {
    console.error('received unknown error', e);
    error = new ErrorModel('general.unknownError');
    responseCode = 500;
  }
  error.serverDateTime = new Date().toISOString();
  console.error('returned error', error);
  return res.status(responseCode).json(error);
}

export function sendResponse(res: Response<any, Record<string, any>>, response: any) {
  return res.status(200).json(response);
}
