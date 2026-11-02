import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    try {
      const savedValue = localStorage.getItem(key);

      return savedValue !== null ? (JSON.parse(savedValue) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Не удалось сохранить данные в localStorage", error);
    }
  }, [key, value]);

  return [value, setValue];
};
