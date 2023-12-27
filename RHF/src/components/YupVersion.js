import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/schema";

const YupVersion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
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
            <input
              class="border-2 rounded-md w-full h-[40px] pl-3"
              name="id"
              placeholder="아이디"
              {...register("id")}
            ></input>

            {errors.id && (
              <div class="text-error h-6 w-full absolute bottom-0">
                {errors.id.message}
              </div>
            )}
          </div>
          {/*비밀번호*/}
          <label class="flex justify-center items-center">비밀번호</label>
          <div class="col-span-2 pr-12 relative flex items-center">
            <input
              class="border-2 rounded-md w-full h-[40px] pl-3"
              name="pw"
              placeholder="비밀번호"
              {...register("pw")}
            ></input>
            {errors.pw && (
              <div class="text-error h-6 w-full absolute bottom-0">
                {errors.pw.message}
              </div>
            )}
          </div>
          {/*핸드폰 번호*/}
          <label class="flex justify-center items-center">핸드폰 번호</label>
          <div class="col-span-2 pr-12 relative flex items-center">
            <input
              class="border-2 rounded-md w-full h-[40px] pl-3"
              name="phoneNumber"
              placeholder="핸드폰 번호"
              {...register("phoneNumber")}
            ></input>
            {errors.phoneNumber && (
              <div class="text-error h-6 w-full pt-2 absolute bottom-0">
                {errors.phoneNumber.message}
              </div>
            )}
          </div>
          {/*생년 월일*/}
          <label class="flex justify-center items-center">생년 월일</label>
          <div class="col-span-2 pr-12 relative flex items-center">
            <input
              class="border-2 rounded-md w-full h-[40px] pl-3"
              name="birth"
              placeholder="생년월일"
              {...register("birth")}
            ></input>
            {errors.birth && (
              <div class="text-error h-6 w-full pt-2 absolute bottom-0">
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

export default YupVersion;
