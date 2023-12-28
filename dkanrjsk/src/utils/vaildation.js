export const RegExp = {
	email:
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
	password:
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&^#~])[A-Za-z\d@$!%*?&^#~]{8,}$/,
	phone: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
}

export const validate = {
  email: {
    required: "이메일은 필수입니다.",
    pattern: {
      value:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      message: "이메일 형식에 맞지 않습니다.",
    },
  },
  password: {
    required: "비밀번호는 필수입니다.",
    pattern: {
      value: /(?=.*?[a-z])(?=.*?[A-Z])/,
      message: "비밀번호는 대소문자 특수문자가 포함되어야 합니다.",
    },
    minLength: {
      value: 8,
      message: "비밀번호는 8자리 이상입니다.",
    },
  },
  number:{
    required: "휴대폰번호는 필수입니다",
    pattern: {
      value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      message: "휴대폰번호는 11자리입니다.",
    },
  },
  birth:{
    required: "생년월일은 필수입니다.",
  }
}