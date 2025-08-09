import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

const LocalStorage = {
    setItem: (key: string, val: any) => {
        const value = typeof val === 'string' ? val : JSON.stringify(val);
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: <T = string>(key: string): Promise<T | null> => {
        const value = storage.getString(key);
        if (!value) return Promise.resolve(null);

        try {
            return Promise.resolve(JSON.parse(value) as T);
        } catch {
            return Promise.resolve(value as T);
        }
    },
    removeItem: (key: string) => {
        storage.delete(key);
        return Promise.resolve();
    },
    clearAll: () => {
        storage.clearAll();
        return Promise.resolve();
    },
};

export default LocalStorage;
