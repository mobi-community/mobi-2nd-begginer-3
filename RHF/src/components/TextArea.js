const NRTextarea = ({ item, register, errors, isShow }) => {
  const { label, name } = item;
  return (
    <div className={!isShow ? "hidden" : "flex justify-center flex-col py-1.5"}>
      <label className="flex justify-center items-center w-[200px]">
        {label}
      </label>
      <div className="px-12 relative pt-[10px] flex item-center justify-center">
        <textarea
          className="border-2 rounded-md w-full h-[150px] pl-3"
          name={name}
          placeholder={`${label}을 입력해주세요.`}
          {...register(name)}
        />
        {errors[name] && (
          <div className="flex justify-center text-error h-6 w-full absolute bottom-[-30px]">
            {errors[name].message}
          </div>
        )}
      </div>
    </div>
  );
};

export default NRTextarea;
