import { renderHook, act } from '@testing-library/react-hooks';

import type { IResponseWithTokens } from '@/types';

import { useAuthContext } from '@/context';
import useSetAuthTokens from '@/hooks/useSetAuthTokens';

jest.mock('@/context');

describe('useSetAuthTokens', () => {
  const mockAuthContext = {
    setAccessTokens: jest.fn(),
    setRefreshTokens: jest.fn(),
  };

  beforeEach(() => {
    (useAuthContext as jest.Mock).mockReturnValue(mockAuthContext);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call setAccessTokens and setRefreshTokens with the provided tokens', () => {
    const tokens: IResponseWithTokens = {
      accessToken: '123',
      refreshToken: '456',
    };

    const { result } = renderHook(() => useSetAuthTokens());

    act(() => {
      result.current(tokens);
    });

    expect(mockAuthContext.setAccessTokens).toHaveBeenCalledWith(tokens.accessToken);
    expect(mockAuthContext.setRefreshTokens).toHaveBeenCalledWith(tokens.refreshToken);
  });
});
