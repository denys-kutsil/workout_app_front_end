export interface IAccessTokenResponse {
  accessToken: string;
}

export interface IRefreshTokenResponse {
  refreshToken: string;
}

export interface IResponseWithMessage {
  message: string;
}

export type IResponseWithTokens = IAccessTokenResponse & IRefreshTokenResponse;

export type IAuthResponse = IResponseWithTokens & IResponseWithMessage;
