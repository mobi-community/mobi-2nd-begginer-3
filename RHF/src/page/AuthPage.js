import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import NRInput from "../components/Input";
import { useSearchParams } from "react-router-dom";
import { totalSchema } from "../utils/schema";
import { REQUIREMENTS } from "../constants/Requirements";
import NRTextarea from "../components/TextArea";

//step => 3 textarea
// textarea vs input => 인풋마다 개별적인 거 -> 어디서 관리?
// 아이디 비밀번호
//비밀번호 => textarea
const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStep = Number(searchParams.get("step")) || 0;

  const LAST_STEP = 3;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(totalSchema[`schema${currentStep + 1}`]),
  });

  //제출 함수
  const onSubmit = (data) => {
    const keys = Object.keys(data);
    const info = keys
      .map((key) => {
        return `${key} : ${data[key]}`;
      })
      .join("\n");
    console.log(info);
    alert(info);
  };

  //다음 스텝
  const onClickNextStep = () => {
    const nextStep = currentStep + 1;
    searchParams.set("step", nextStep);
    setSearchParams(searchParams);
  };

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="w-[500px] h-[550px]">
        <div className="text-dark_mint font-extrabold text-lg border border-b-0 w-1/4 h-[50px] text-center rounded-t-lg flex justify-center items-center">
          회원가입
        </div>
        <div className="relative shadow-lg border rounded-tr-lg rounded-br-lg rounded-bl-lg h-[400px] gap-10 flex flex-col pt-[70px]">
          {REQUIREMENTS.map((item) => {
            return item.input ? (
              <NRInput
                register={register}
                item={item}
                errors={errors}
                isShow={currentStep === item.step}
              />
            ) : (
              <NRTextarea
                register={register}
                item={item}
                errors={errors}
                isShow={currentStep === item.step}
              />
            );
          })}
          <div className="col-span-3 flex justify-center h-[20px] mt-[20px] absolute bottom-[100px] left-[190px]">
            {currentStep < LAST_STEP - 1 ? (
              <button
                disabled={!isValid}
                onClick={onClickNextStep}
                className="pr-0 mt-[30px] border-2 flex justify-center rounded-lg items-center text-lg text-white font-extrabold bg-dark_mint w-[120px] h-[40px] disabled:opacity-50"
              >
                다음
              </button>
            ) : (
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={!isValid}
                className="pr-0 mt-[30px] border-2 flex justify-center rounded-lg items-center text-lg text-white font-extrabold bg-dark_mint w-[120px] h-[40px] disabled:opacity-50"
              >
                제출
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
