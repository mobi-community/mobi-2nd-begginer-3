import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { REGEX } from "../constants/Validation";

const ControllerVersion = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", //값이 변할때마다 감지
    defaultValues: {
      id: "",
      pw: "",
      phoneNumber: "",
      birth: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div class="h-screen flex justify-center items-center w-full">
      <div class="w-[500px] h-[550px]">
        <div class="text-dark_mint font-extrabold text-lg border border-b-0 w-1/4 h-[50px] text-center rounded-t-lg flex justify-center items-center">
          회원가입
        </div>
        <form
          class="shadow-lg border grid grid-cols-3 rounded-tr-lg rounded-br-lg rounded-bl-lg h-[550px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/*아이디*/}
          <label class="flex justify-center items-center ">아이디</label>
          <div class="col-span-2 pr-12 relative flex items-center">
            <Controller
              name="id"
              control={control}
              rules={{
                required: "아이디를 입력해 주세요.",
                pattern: {
                  value: REGEX.id,
                  message: "유효하지 않은 아이디입니다.",
                },
              }}
              render={({ field }) => <TextField {...field} />}
            />

            {errors.id && (
              <div class="text-error h-6 w-full absolute bottom-0">
                {errors.id.message}
              </div>
            )}
          </div>
          {/*비밀번호*/}
          <label class="flex justify-center items-center">비밀번호</label>
          <div class="col-span-2 pr-12 relative flex items-center">
            <Controller
              name="pw"
              control={control}
              rules={{
                required: "비밀번호를 입력해 주세요.",
                pattern: {
                  value: REGEX.pw,
                  message: "유효하지 않은 비밀번호입니다.",
                },
              }}
              render={({ field }) => <TextField {...field} />}
            />

            {errors.pw && (
              <div class="text-error h-6 w-full absolute bottom-0">
                {errors.pw.message}
              </div>
            )}
          </div>
          {/*핸드폰 번호*/}
          <label class="flex justify-center items-center">핸드폰 번호</label>
          <div class="col-span-2 pr-12 relative flex items-center">
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "핸드폰 번호를 입력해 주세요.",
                pattern: {
                  value: REGEX.phoneNumber,
                  message: "유효하지 않은 핸드폰 번호입니다.",
                },
              }}
              render={({ field }) => <TextField {...field} />}
            />

            {errors.phoneNumber && (
              <div class="text-error h-6 w-full absolute bottom-0">
                {errors.phoneNumber.message}
              </div>
            )}
          </div>
          {/*생년 월일*/}
          <label class="flex justify-center items-center">생년 월일</label>
          <div class="col-span-2 pr-12 relative flex items-center">
            <Controller
              name="birth"
              control={control}
              rules={{
                required: "생년월일를 입력해 주세요.",
                pattern: {
                  value: REGEX.birth,
                  message: "유효하지 않은 생년월일입니다.",
                },
              }}
              render={({ field }) => <TextField {...field} />}
            />

            {errors.birth && (
              <div class="text-error h-6 w-full absolute bottom-0">
                {errors.birth.message}
              </div>
            )}
          </div>
          <div class="col-span-3 flex justify-center h-[20px] mt-[20px]">
            <button class="pr-0 border-2 flex justify-center rounded-lg items-center text-lg text-white font-extrabold bg-dark_mint w-[150px] h-[50px]">
              제출
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ControllerVersion;
