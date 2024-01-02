const StorageHandler = {
  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  },

  getLocalStorage(key) {
    return localStorage.getItem(key);
  },
};

export default StorageHandler;
