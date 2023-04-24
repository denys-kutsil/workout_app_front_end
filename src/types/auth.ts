import type { ISignInResponse, IUserResponse } from '@/types/responses';

export interface IAuthContext {
  accessToken: string | null;
  isLoading: boolean;
  user: IUserResponse | null;
  logout: () => void;
  isAuthTokenExpired: () => boolean;
  setActiveUser: (data: ISignInResponse) => void;
  setAccessToken: (token: string) => void;
}
