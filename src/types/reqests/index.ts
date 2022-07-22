export interface IAuthParams {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    password: string;
    email: string;
  };
}
