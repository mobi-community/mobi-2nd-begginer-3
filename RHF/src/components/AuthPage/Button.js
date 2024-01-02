const NRButton = ({ disabled, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="pr-0 mt-[30px] border-2 flex justify-center rounded-lg items-center text-lg text-white font-extrabold bg-dark_mint w-[120px] h-[40px] disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default NRButton;
