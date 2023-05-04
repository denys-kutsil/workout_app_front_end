import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '@/helpers';

describe('localStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should get an item from local storage', () => {
    localStorage.setItem('testItem', 'testValue');

    const itemValue = getLocalStorageItem('testItem');

    expect(itemValue).toBe('testValue');
  });

  it('should set an item to local storage', () => {
    setLocalStorageItem('testItem', 'testValue');

    expect(localStorage.getItem('testItem')).toBe('testValue');
  });

  it('should remove an item from local storage', () => {
    localStorage.setItem('testItem', 'testValue');

    removeLocalStorageItem('testItem');

    expect(localStorage.getItem('testItem')).toBe(null);
  });
});
