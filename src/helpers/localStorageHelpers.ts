export const getLocalStorageItem = (itemName: string): string | null =>
  localStorage.getItem(itemName);

export const setLocalStorageItem = (itemName: string, itemValue: string): void => {
  localStorage.setItem(itemName, itemValue);
};

export const removeLocalStorageItem = (itemName: string): void => {
  localStorage.removeItem(itemName);
};
