import CounterButton from "./components/CounterButton";
import CounterStatus from "./components/CounterStatus";
import useCounter from "./hook/useCounter";

const LikeDislikeCounter = () => {
  const { increment, decrement, counter } = useCounter({ min: 0, max: 1000 });
  return (
    <div>
      <CounterButton>
        <CounterStatus count={counter} />
        <div>{increment}</div>
      </CounterButton>
      <CounterButton>
        <CounterStatus />
        <div>{decrement}</div>
        <img src={"./asset/Like.svg"} />
      </CounterButton>
    </div>
  );
};

export default LikeDislikeCounter;
