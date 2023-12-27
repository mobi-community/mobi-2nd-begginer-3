import * as yup from "yup";
import { INVALID_MESSAGE, REGEX } from "../constants/validation";

//스키마 정의
export const schema = yup.object({
  id: yup
    .string()
    .email("이메일 형식으로 입력해 주세요.")
    .required("아이디를 입력해 주세요."),
  pw: yup
    .string()
    .min(8, "8자 이상으로 입력해 주세요.")
    .matches(REGEX.pw, INVALID_MESSAGE("비밀번호"))
    .required("비밀번호를 입력해 주세요."),
  phoneNumber: yup
    .string()
    .matches(REGEX.phoneNumber, INVALID_MESSAGE("핸드폰 번호"))
    .required("핸드폰 번호를 입력해 주세요."),
  birth: yup
    .string()
    .matches(REGEX.birth, INVALID_MESSAGE("생년월일"))
    .required("생년월일을 입력해 주세요."),
});
