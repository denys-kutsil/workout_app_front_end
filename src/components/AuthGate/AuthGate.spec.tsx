import React from 'react';

import { render } from '@testing-library/react';

import AuthGate from './AuthGate';

import { useAuthContext } from '@/context';

jest.mock('@/context', () => ({
  useAuthContext: jest.fn(),
}));

describe('AuthGate', () => {
  it('should render children if user is authenticated and isPrivate is false', () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      user: { id: 1, name: 'John' },
      isLoading: false,
    });

    const { queryByText } = render(
      <AuthGate isPrivate={false}>
        <div>Hello World</div>
      </AuthGate>,
    );

    expect(queryByText('Hello World')).toBeTruthy();
  });

  it('should render loading indicator if user is not authenticated and isPrivate is true and isLoading is true', () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      user: null,
      isLoading: true,
    });

    const { queryByRole } = render(<AuthGate isPrivate={true} />);

    expect(queryByRole('progressbar')).toBeTruthy();
  });

  it('should redirect to sign-in page if user is not authenticated and isPrivate is true and isLoading is false', () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      user: null,
      isLoading: false,
    });

    const { container } = render(<AuthGate isPrivate={true} />);

    expect(container.querySelector('nav')).toBeTruthy();
    expect(container.querySelector('nav')?.getAttribute('href')).toBe('/signin');
  });
});
