const NRInput = ({ item, register, errors, isShow }) => {
  const { label, name } = item;
  return (
    <div className={!isShow ? "hidden" : "flex justify-center py-1.5"}>
      <label className="flex justify-center items-center w-[150px]">
        {label}
      </label>
      <div className="pr-12 relative flex item-center">
        <input
          className="border-2 rounded-md w-[300px] h-[40px] pl-3 relative"
          name={name}
          placeholder={`${label}을 입력해주세요.`}
          {...register(name)}
        />
        {errors[name] && (
          <div className="text-error h-6 w-full absolute bottom-[-30px]">
            {errors[name].message}
          </div>
        )}
      </div>
    </div>
  );
};

export default NRInput;
