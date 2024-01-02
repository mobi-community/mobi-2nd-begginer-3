import { useState } from "react";

const useShowModal = () => {
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const onClickCommentsBtn = async () => {
    setIsOpenCommentList((prev) => !prev);
  };

  return { isOpenCommentList, onClickCommentsBtn };
};

export default useShowModal;
