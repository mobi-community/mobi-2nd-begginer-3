import { useState } from "react";

export const validate = {
  id: {
    regex: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    message: "유효하지 않은 아이디입니다.",
  },
  pw: {
    regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    message: "유효하지 않은 비밀번호입니다.",
  },
  phoneNumber: {
    regex: /^\d{3}-\d{3,4}-\d{4}$/,
    message: "유효하지 않은 핸드폰 번호입니다.",
  },
  birth: {
    regex: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    message: "유효하지 않은 생년월일입니다.",
  },
};

const Before = () => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    phoneNumber: "",
    birth: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    id: "",
    pw: "",
    phoneNumber: "",
    birth: "",
  });

  const onChange = (e) => {
    //공백인 경우
    if (e.target.value === "") {
      setErrorMessage(`${e.target.name}을 입력해주세요.`);
    }
    //validation
    const targetRegex = validate[e.target.name].regex;
    const isSuccess = targetRegex.test(e.target.value);

    if (!isSuccess) {
      setErrorMessage((prev) => ({
        ...prev,
        [e.target.name]: validate[e.target.name].message,
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }

    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div class="h-screen flex justify-center items-center w-full">
      <div class="w-[500px] h-[500px]">
        <div class="text-dark_mint font-extrabold text-lg border border-b-0 w-1/4 h-[50px] text-center rounded-t-lg flex justify-center items-center">
          회원가입
        </div>
        <form
          class="shadow-lg border grid grid-cols-3 gap-2 rounded-tr-lg rounded-br-lg rounded-bl-lg"
          onSubmit={onSubmit}
        >
          <label class="flex justify-center items-center">아이디</label>
          <div class="col-span-2 pr-12">
            <input
              class="border-2 rounded-md w-full h-[40px] mt-5 pl-3"
              name="id"
              onChange={onChange}
              value={inputs.id}
              placeholder="아이디"
            ></input>
            <div class="text-error h-6 w-full pt-2">{errorMessage.id}</div>
          </div>
          <label class="flex justify-center items-center">비밀번호</label>
          <div class="col-span-2 pr-12">
            <input
              class="border-2 rounded-md w-full h-[40px] mt-5 pl-3"
              name="pw"
              onChange={onChange}
              value={inputs.pw}
              placeholder="비밀번호"
            ></input>
            <div class="text-error h-6 w-full pt-2">{errorMessage.pw}</div>
          </div>

          <label class="flex justify-center items-center">핸드폰 번호</label>
          <div class="col-span-2 pr-12">
            <input
              class="border-2 rounded-md w-full h-[40px] mt-5 pl-3"
              name="phoneNumber"
              onChange={onChange}
              value={inputs.phoneNumber}
              placeholder="핸드폰 번호"
            ></input>
            <div class="text-error h-6 w-full pt-2">
              {errorMessage.phoneNumber}
            </div>
          </div>
          <label class="flex justify-center items-center">생년 월일</label>
          <div class="col-span-2 pr-12">
            <input
              class="border-2 rounded-md w-full h-[40px] mt-5 pl-3"
              name="birth"
              onChange={onChange}
              value={inputs.birth}
              placeholder="생년 월일"
            ></input>
            <div class="text-error h-6 w-full pt-2">{errorMessage.birth}</div>
          </div>
          <div class="col-span-3 flex justify-center h-[80px]">
            <button class="pr-0 border-2 flex justify-center rounded-lg items-center text-lg text-white font-extrabold bg-dark_mint w-[150px] h-[40px]">
              제출
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Before;
