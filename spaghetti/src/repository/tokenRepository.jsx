const TokenRepository = {
  setToken(KEY, token) {
    localStorage.setItem(KEY, token);
  },

  getToken(KEY) {
    localStorage.getItem(KEY);
  },
};

export default TokenRepository;
