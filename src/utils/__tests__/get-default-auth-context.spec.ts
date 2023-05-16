import { TokenTypes } from '@/constants';
import { IUserResponse } from '@/types';
import { getDefaultAuthContext } from '@/utils';

describe('getDefaultAuthContext', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('should return default auth context with null access and refresh tokens if they do not exist in localStorage', () => {
    const authContext = getDefaultAuthContext();
    expect(authContext.accessToken).toBeNull();
    expect(authContext.refreshToken).toBeNull();
    expect(authContext.isLoading).toBeTruthy();
    expect(authContext.user).toBeNull();
  });

  test('should return default auth context with access and refresh tokens from localStorage if they exist', () => {
    const accessToken = 'abc123';
    const refreshToken = 'def456';
    localStorage.setItem(TokenTypes.AccessToken, accessToken);
    localStorage.setItem(TokenTypes.RefreshToken, refreshToken);
    const authContext = getDefaultAuthContext();
    expect(authContext.accessToken).toEqual(accessToken);
    expect(authContext.refreshToken).toEqual(refreshToken);
    expect(authContext.isLoading).toBeTruthy();
    expect(authContext.user).toBeNull();
  });

  test('should set access token in localStorage when setAccessTokens is called', () => {
    const accessToken = 'abc123';
    const authContext = getDefaultAuthContext();
    authContext.setAccessTokens(accessToken);
    expect(localStorage.getItem(TokenTypes.AccessToken)).toEqual(accessToken);
  });

  test('should set refresh token in localStorage when setRefreshTokens is called', () => {
    const refreshToken = 'def456';
    const authContext = getDefaultAuthContext();
    authContext.setRefreshTokens(refreshToken);
    expect(localStorage.getItem(TokenTypes.RefreshToken)).toEqual(refreshToken);
  });

  test('isAuthTokenExpired should return true if accessToken is not a valid JWT', () => {
    const authContext = getDefaultAuthContext();
    authContext.accessToken = 'not_a_valid_jwt';
    expect(authContext.isAuthTokenExpired()).toBeTruthy();
  });

  test('setActiveUser should set user property of authContext', () => {
    const authContext = getDefaultAuthContext();
    const user: IUserResponse = { picture: '...', email: 'test@gmail.com', _id: '...' };
    authContext.setActiveUser(user);
    expect(authContext.user).toEqual(user);
  });

  test('logout should remove access and refresh tokens from localStorage and reset authContext properties', () => {
    const accessToken = 'abc123';
    const refreshToken = 'def456';
    const authContext = getDefaultAuthContext();
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    authContext.accessToken = accessToken;
    authContext.refreshToken = refreshToken;
    authContext.user = { picture: '...', email: 'test@gmail.com', _id: '...' };
    authContext.logout();
    expect(localStorage.getItem(TokenTypes.AccessToken)).toBeNull();
    expect(localStorage.getItem(TokenTypes.RefreshToken)).toBeNull();
    expect(authContext.accessToken).toBeNull();
    expect(authContext.refreshToken).toBeNull();
    expect(authContext.user).toBeNull();
  });
});
