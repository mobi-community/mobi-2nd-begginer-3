import CounterButton from "./components/CounterButton";
import CounterStatus from "./components/CounterStatus";
import useCounter from "./hook/useCounter";
import { ReactComponent as Like } from "./asset/Like.svg";

const LikeDislikeCounter = ({ min, max, buttonList }) => {
  const { increment, decrement, counter } = useCounter({ min: 0, max: 1000 });
  return (
    <div>
      <CounterButton>
        <CounterStatus count={counter} />
        <div>{increment}</div>
        <img src={"./asset/Like.svg"} />
        <Like />
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
