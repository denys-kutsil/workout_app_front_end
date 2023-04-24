import { IUserResponse } from '@/types';

export interface IAuthResponse {
  token: string;
}

export interface ISignInResponse extends IAuthResponse {
  user: IUserResponse;
}
