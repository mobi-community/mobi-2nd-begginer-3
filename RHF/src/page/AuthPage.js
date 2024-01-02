import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { totalSchema } from "../utils/schema";
import REQUIREMENTS from "../constants/Requirements";
import NRInput from "../components/AuthPage/Input";
import { makeObjKeysToArr } from "../utils/formatter";
import NRButton from "../components/AuthPage/Button";

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStep = Number(searchParams.get("step")) || 1;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: JSON.parse(localStorage.getItem("formInfo")),
    resolver: yupResolver(totalSchema[currentStep - 1]),
  });

  const LAST_STEP = totalSchema.length;

  //제출 함수
  const onSubmit = (data) => {
    const submitInfo = makeObjKeysToArr(data);
    saveData();
    alert(submitInfo);
  };

  //이전 버튼 함수
  const onClickPrevStep = () => {
    const prevStep = currentStep - 1;
    searchParams.set("step", prevStep);
    setSearchParams(searchParams);
    saveData();
  };

  //다음 버튼 함수
  const onClickNextStep = () => {
    const nextStep = currentStep + 1;
    searchParams.set("step", nextStep);
    setSearchParams(searchParams);
    saveData();
  };

  //로컬 스토리지에 저장하는 함수
  const saveData = () => {
    localStorage.setItem(`formInfo`, JSON.stringify(getValues()));
  };

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="w-[500px] h-[550px]">
        <div className="text-dark_mint font-extrabold text-lg border border-b-0 w-1/4 h-[50px] text-center rounded-t-lg flex justify-center items-center">
          회원가입
        </div>
        <div className="relative shadow-lg border rounded-tr-lg rounded-br-lg rounded-bl-lg h-[400px] gap-10 flex flex-col pt-[70px]">
          {/*폼의 인풋*/}
          {REQUIREMENTS.map((item) => {
            const isShow = item.step === currentStep;
            const { label, name, isInput } = item;
            return (
              <NRInput
                label={label}
                name={name}
                isShow={isShow}
                register={register}
                errors={errors}
                isInput={isInput}
              />
            );
          })}

          {/*폼의 버튼*/}
          <div className="flex items-center justify-center">
            {currentStep !== 1 && (
              <NRButton onClick={onClickPrevStep} children={"이전"} />
            )}
            {currentStep < LAST_STEP ? (
              <NRButton
                onClick={onClickNextStep}
                disabled={!isValid}
                children={"다음"}
              />
            ) : (
              <NRButton
                onClick={handleSubmit(onSubmit)}
                disabled={!isValid}
                children={"제출"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
