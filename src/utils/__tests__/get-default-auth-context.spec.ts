import { getDefaultAuthContext } from '../auth';

import { removeLocalStorageItem, setLocalStorageItem } from '@/helpers';

jest.mock('@/helpers/localStorageHelpers');

describe('authContext', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should set the access token in local storage', () => {
    const authContext = getDefaultAuthContext();

    authContext.setAccessToken('access_token');

    expect(setLocalStorageItem).toHaveBeenCalledWith('token', 'access_token');
  });

  it('should set the active user', () => {
    const authContext = getDefaultAuthContext();
    const user = { picture: '...', email: 'test@gmail.com', _id: '12345' };

    authContext.setActiveUser(user);

    expect(authContext.user).toBe(user);
  });
  it('should logout the user', () => {
    const authContext = getDefaultAuthContext();

    authContext.logout();

    expect(removeLocalStorageItem).toHaveBeenCalledWith('token');
    expect(authContext.accessToken).toBe(null);
    expect(authContext.user).toBe(null);
  });

  it('should return true when token is expired', () => {
    const authContext = getDefaultAuthContext();
    authContext.accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjJ9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'; // expired token
    const result = authContext.isAuthTokenExpired();
    expect(result).toEqual(true);
  });

  it('should return true when token is not valid', () => {
    const authContext = getDefaultAuthContext();
    authContext.accessToken = 'invalidToken';
    const result = authContext.isAuthTokenExpired();
    expect(result).toEqual(true);
  });
});
