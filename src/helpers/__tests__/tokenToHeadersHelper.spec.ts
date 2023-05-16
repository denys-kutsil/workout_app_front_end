import { TokenTypes } from '@/constants';
import { setAccessTokenToHeaders } from '@/helpers';

describe('setAccessTokenToHeaders', () => {
  it('should set the Authorization header with the token from local storage if it exists', () => {
    const headers = new Headers();
    localStorage.setItem(TokenTypes.AccessToken, 'test-token');

    const result = setAccessTokenToHeaders(headers);

    expect(result.get('Authorization')).toBe('Bearer test-token');
  });

  it('should return the headers object if token is not found in local storage', () => {
    const headers = new Headers();

    const result = setAccessTokenToHeaders(headers);

    expect(result).toBe(headers);
  });
});
