export const REGEX = {
  id: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
  pw: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-]).*$/,
  phoneNumber: /^(010)-\d{4}-\d{4}$/,
  birth: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
};

export const INVALID_MESSAGE = (name) => {
  return `유효하지 않은 ${name}입니다.`;
};
