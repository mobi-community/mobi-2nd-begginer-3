import useCounter from "../hook/useCounter";

const CounterButton = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default CounterButton;
