import * as yup from "yup";
import { INVALID_MESSAGE, MESSAGE, REGEX } from "../consts/validation.js";
//스키마 정의
export const schema1 = yup.object().shape({
  id: yup
    .string()
    .email("이메일 형식으로 입력해 주세요.")
    .required("아이디를 입력해 주세요."),
  pw: yup
    .string()
    .min(8, "8자 이상으로 입력해 주세요.")
    .matches(REGEX.pw, INVALID_MESSAGE("비밀번호"))
    .required("비밀번호를 입력해 주세요."),
});

export const schema2 = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(REGEX.phoneNumber, INVALID_MESSAGE("핸드폰 번호"))
    .required("핸드폰 번호를 입력해 주세요."),
  birth: yup
    .string()
    .matches(REGEX.birth, INVALID_MESSAGE("생년월일"))
    .required("생년월일을 입력해 주세요."),
});

export const schema3 = yup.object().shape({
  sayWords: yup
    .string()
    .min(100, MESSAGE.SAY_WORDS.min)
    .max(300, MESSAGE.SAY_WORDS.max),
});

export const totalSchema = [schema1, schema2, schema3];
