import { renderHook } from '@testing-library/react-hooks';
import { toast } from 'react-toastify';

import { useToastMessageRequest } from '@/hooks';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('useToastMessageRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not call toast if there is no data', () => {
    renderHook(() => useToastMessageRequest({ isSuccess: true, isError: false }));
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast.error).not.toHaveBeenCalled();
  });

  it('should call toast.success if isSuccess is true', () => {
    const message = 'Test success message';
    renderHook(() =>
      useToastMessageRequest({ isSuccess: true, isError: false, data: { message } }),
    );
    expect(toast.success).toHaveBeenCalledWith(message);
    expect(toast.error).not.toHaveBeenCalled();
  });

  it('should call toast.error if isError is true', () => {
    const message = 'Test error message';
    renderHook(() =>
      useToastMessageRequest({ isSuccess: false, isError: true, data: { message } }),
    );
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith(message);
  });

  it('should not call toast.success if isSuccess is false', () => {
    const message = 'Test success message';
    renderHook(() =>
      useToastMessageRequest({ isSuccess: false, isError: false, data: { message } }),
    );
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast.error).not.toHaveBeenCalled();
  });

  it('should not call toast.error if isError is false', () => {
    const message = 'Test error message';
    renderHook(() =>
      useToastMessageRequest({ isSuccess: false, isError: false, data: { message } }),
    );
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast.error).not.toHaveBeenCalled();
  });
});
