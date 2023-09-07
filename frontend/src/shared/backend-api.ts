import axios, { AxiosResponse } from 'axios';

export class ErrorModel {
  public serverDateTime?: string;
  public correlationId?: string;

  constructor(
    public errorI18NMessage: string, // The message code of the entry in the i18n file
    public httpCode: number = 500, // The HTTP code to send back to the frontend. Defaults to 500
  ) {}
}

export function post<T>(endpoint: string, postData?: any, getData?: any): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    axios
      .post(endpoint, postData, { params: getData })
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((error: ErrorModel) => {
        reject(error);
      });
  });
}

export function get<T>(endpoint: string, params?: any, headers?: any): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    axios
      .get(endpoint, { params, headers })
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((error: ErrorModel) => {
        reject(error);
      });
  });
}
