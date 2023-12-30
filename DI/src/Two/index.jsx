import EmotionCounterContainer from "./EmotionCounterContainer";
import LikeDislikeCounter from "./LikeDisLikeCounter";

const emotionButtonList = [
  {
    title: "좋아요",
    img: "",
    isChecked: false,
  },
  {
    title: "응원해요",
    img: "",
    isChecked: false,
  },
  {
    title: "축하해요",
    img: "",
    isChecked: false,
  },
  {
    title: "슬퍼요",
    img: "",
    isChecked: false,
  },
];

const CounterPage = () => {
  return (
    <>
      <EmotionCounterContainer
        min={0}
        max={100}
        title={"게시글 카운터"}
        buttonList={emotionButtonList}
      />
      <LikeDislikeCounter min={0} max={200} />
    </>
  );
};

export default CounterPage;
