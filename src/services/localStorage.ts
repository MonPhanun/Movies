import type { HomePageRestoreModel } from "../Models/homePageRestoreModel";

export const setLocalStorage = (key: string, val: HomePageRestoreModel) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }

  return null;
};
