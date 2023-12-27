const NRInput = ({ label, name, register, errors }) => {
  console.log("register", register);
  return (
    <>
      <label class="flex justify-center items-center ">{label}</label>
      <div class="col-span-2 pr-12 relative flex items-center">
        <input
          class="border-2 rounded-md w-full h-[40px] pl-3"
          name={name}
          placeholder={`${label}을 입력해주세요.`}
          {...register(name)}
        />

        {errors.name && (
          <div class="text-error h-6 w-full absolute bottom-0">
            {errors[name].message}
          </div>
        )}
      </div>
    </>
  );
};

export default NRInput;
