import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../utils/schema";
import NRInput from "../components/Input";
import { useSearchParams } from "react-router-dom";

const AuthPage = () => {
  //step steps formStep
  // const [step, setStep] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStep = Number(searchParams.get("step")) || 0;
  console.log("currentStep", currentStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    //조건 1.2 일 때 는 쿼리스트링만 바뀌게
    //3단계일때는 제출

    if (currentStep === REQUIREMENTS.length - 1) {
      //얼리리턴 => if..else 대용
      return handleSubmit(onSubmit);
    }

    const nextStep = currentStep + 1;
    searchParams.set("step", nextStep);
    setSearchParams(searchParams);
  };

  const REQUIREMENTS = [
    [
      {
        label: "아이디",
        name: "id",
      },
      {
        label: "비밀번호",
        name: "pw",
      },
    ],
    [
      {
        label: "핸드폰 번호",
        name: "phoneNumber",
      },
      {
        label: "생년월일",
        name: "birth",
      },
    ],
    [
      {
        label: "하고 싶은 말",
        name: "sayWords",
      },
    ],
  ];

  return (
    <div class="h-screen flex justify-center items-center w-full">
      <div class="w-[500px] h-[550px]">
        <div class="text-dark_mint font-extrabold text-lg border border-b-0 w-1/4 h-[50px] text-center rounded-t-lg flex justify-center items-center">
          회원가입
        </div>
        <form
          class="shadow-lg border grid grid-cols-3 rounded-tr-lg rounded-br-lg rounded-bl-lg h-[550px]"
          onSubmit={onSubmit}
        >
          {REQUIREMENTS[currentStep].map((item) => {
            const { label, name } = item;
            return (
              // <>
              //   <label class="flex justify-center items-center ">{label}</label>
              //   <div class="col-span-2 pr-12 relative flex items-center">
              //     <input
              //       class="border-2 rounded-md w-full h-[40px] pl-3"
              //       name={name}
              //       placeholder={`${label}을 입력해주세요.`}
              //       {...register(name)}
              //     />

              //     {errors[name] && (
              //       <div class="text-error h-6 w-full absolute bottom-[25px]">
              //         {errors[name].message}
              //       </div>
              //     )}
              //   </div>
              // </>
              <NRInput
                register={register}
                label={item.label}
                name={item.name}
                errors={errors}
              />
            );
          })}
          {/*1,2단게 => 다음, 3단계 => 제출*/}
          <div class="col-span-3 flex justify-center h-[20px] mt-[20px]">
            <button class="pr-0 border-2 flex justify-center rounded-lg items-center text-lg text-white font-extrabold bg-dark_mint w-[150px] h-[50px]">
              {currentStep !== REQUIREMENTS.length - 1 ? "다음" : "제출"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
