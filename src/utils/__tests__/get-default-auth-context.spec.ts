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
    const user = { picture: '...', email: 'test@gmail.com' };

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
});
