import * as yup from "yup";
import { RegExp } from "./vaildation";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("이메일은 필수 입력입니다.")
    .matches(RegExp.email, "이메일 형식에 맞지 않습니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(RegExp.password, "비밀번호는 대소문자 특수문자가 포함되어야 합니다.")
    .min(8, "비밀번호는 8자리 이상입니다"),
  number: yup.string().required("휴대폰번호는 필수입니다").matches(RegExp.phone, "휴대폰번호는 11자리입니다."),
  birth: yup.string().required("생년월일은 필수입니다"),
  text: yup.string().required("하고싶은말은 필수 입력입니다.").min(100, "100자 이상으로 작성해주세요.").max(300, "300자 이하로 작성해주세요."),
});