import type { IUserResponse } from '@/types/responses';

export interface IAuthContext {
  accessToken: string | null;
  isLoading: boolean;
  user: IUserResponse | null;
  logout: () => void;
  isAuthTokenExpired: () => boolean;
  setActiveUser: (user: IUserResponse) => void;
  setAccessToken: (token: string) => void;
}
