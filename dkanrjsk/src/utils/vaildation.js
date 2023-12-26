export const Validation = ({
    email,
    password,
    passwordConfirm,
    phoneNumber,
  }) => {
    let disabled =
      !/^[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*|.[a-zA-Z]{2,3}$/.test(
        email
      ) || !/^\d+$/.test(password);
  
    if (passwordConfirm) {
      disabled =
        disabled ||
        (password !== passwordConfirm &&
          !/^[0-9]+${,11}/.test(phoneNumber));
    } else if (!password && !passwordConfirm) {
      disabled =
        disabled ||
        (!/^[0-9]+${,11}/.test(phoneNumber));

    }
  
    let errors = {
      email:
        !/^[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*|.[a-zA-Z]{2,3}$/.test(
          email
        ) && "이메일 양식을 확인해주세요",
      password:
        !/^[a-z0-9]+$/.test(password) && "비밀번호는 영문과 숫자만 입력해주세요",
      passwordConfirm:
        password !== passwordConfirm && "비밀번호가 일치하지 않습니다",
      phoneNumber:
        !/^[0-9]+${,11}/.test(phoneNumber) && "11자리의 숫자만 입력 가능합니다",

  
    };
  
    let access = {
      email:
        /^[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*|.[a-zA-Z]{2,3}$/.test(
          email
        ) && "사용 가능한 이메일입니다",
      password: /^\d+$/.test(password) && "사용 가능한 비밀번호입니다",
      passwordConfirm:
        password === passwordConfirm && "비밀번호가 확인되었습니다",
      phoneNumber: /^[0-9]+${,11}/.test(phoneNumber) && "", 

  
    };
  
    return { disabled, errors, access };
  };
  