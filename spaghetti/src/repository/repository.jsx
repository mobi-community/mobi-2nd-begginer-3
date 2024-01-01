const USER_NAME = "user_name";

const UserNameRepository = {
  getUserName() {
    return localStorage.getItem(USER_NAME);
  },

  setUserName(userName) {
    localStorage.setItem(USER_NAME, userName);
  },
};

export default UserNameRepository;
