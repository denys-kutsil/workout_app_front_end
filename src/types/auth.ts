import type { IUserResponse } from '@/types/responses';

export interface IAuthContext {
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  user: IUserResponse | null;
  logout: () => void;
  isAuthTokenExpired: () => boolean;
  setActiveUser: (user: IUserResponse) => void;
  setAccessTokens: (token: string) => void;
  setRefreshTokens: (token: string) => void;
}
