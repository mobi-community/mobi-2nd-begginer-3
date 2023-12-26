register의 기능 : 제어되지 않은 컴포넌트를 hook과 연결하여 값을 검사하고, 폼이 제출될 때 입력된 값을
한번에 모으는 기능

- 공용컴포넌트 만들어서 적용하기(Input,Select)
- 에러 메세지 보여주기
  errors 객체에 register로 설정한 키값이 담김
  required같이 유효성 검사에 message를 주면, error안에 message속성으로 에러 메세지가 담김

- mui에 적용해보기

yup : 폼의 유효성을 검사하는 스키마를 만드는 곳
const schema = yup.object().shape({
firstname: yup.string().required("firstname is required."),
lastname: yup.string().required("lastname is required"),
email: yup.string().email().required("email is required"),
password: yup
.string()
.min(8)
.max(15)
.required("password must be 8 - 15 characters."),
confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
