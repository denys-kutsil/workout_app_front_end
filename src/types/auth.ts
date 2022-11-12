import type { IUserResponse } from '@/types/responses';

export interface ISignInResponse {
  access_token: string;
  user: IUserResponse;
}

export interface IAuthContext {
  accessToken: string | null;
  isLoading: boolean;
  user: IUserResponse | null;
  logout: () => void;
  setAccessToken: (data: ISignInResponse) => void;
}
