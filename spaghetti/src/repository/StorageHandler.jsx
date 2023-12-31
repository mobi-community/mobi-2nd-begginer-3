const StorageHandler = {
  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  },

  getLocalStorage(key) {
    localStorage.getItem(key);
  },
};

export default StorageHandler;
