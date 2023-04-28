export interface IAuthResponse extends IResponseWithMessage {
  token: string;
}

export interface IResponseWithMessage {
  message: string;
}
