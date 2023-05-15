import type { IResponseWithTokens } from '@/types';

import { useAuthContext } from '@/context';

const useSetAuthTokens = () => {
  const authContext = useAuthContext();

  return (tokens: IResponseWithTokens) => {
    const { refreshToken, accessToken } = tokens;
    authContext.setAccessTokens(accessToken);
    authContext.setRefreshTokens(refreshToken);
  };
};

export default useSetAuthTokens;
