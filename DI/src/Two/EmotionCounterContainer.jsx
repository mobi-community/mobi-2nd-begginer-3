import CounterButton from "./components/CounterButton";
import CounterTitle from "./components/CounterTitle";
import CounterStatus from "./components/CounterStatus";

const EmotionCounterContainer = ({ min, max, title, buttonList }) => {
  return (
    <>
      <CounterTitle title={title} />
      {buttonList.map((button, i) => {
        return (
          <CounterButton key={i}>
            <img src={button.img} />
            <div>{button.title}</div>
            <CounterStatus />
          </CounterButton>
        );
      })}
    </>
  );
};

export default EmotionCounterContainer;
