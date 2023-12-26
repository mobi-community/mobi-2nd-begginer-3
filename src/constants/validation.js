const VALIDATION = {
  id: {
    regex: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    message: "유효하지 않은 아이디입니다.",
  },
  pw: {
    regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-]).*$/,
    message: "유효하지 않은 비밀번호입니다.",
  },
  phoneNumber: {
    regex: /^(010)-\d{4}-\d{4}$/,
    message: "유효하지 않은 핸드폰 번호입니다.",
  },
  birth: {
    regex: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    message: "유효하지 않은 생년월일입니다.",
  },
};

export default VALIDATION;
