import { useDiaLogStore } from "../contexts/DialogProvider";
import { DIALOG_STATE } from "../constants/Constant";
import { ROUTES } from "../constants/Constant";
const useDialog = () => {
  const [, setDiaLogAttribute] = useDiaLogStore();

  const onPressNavigateBlog = () => {
    setDiaLogAttribute({
      type: DIALOG_STATE.ALERT,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({ isOpen: false });
        window.location.href = ROUTES.POST;
      },
    });
  };

  const onClickPost = async (postId) => {
    await setDiaLogAttribute({
      type: DIALOG_STATE.CONFIRM,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({
          text: "정말로 이동해버린다요!",
          onConfirm: async () => {
            window.location.href = ROUTES.MOVE_POST_DETAIL(postId);
          },
        });
      },
      onCancel: () => {
        setDiaLogAttribute({ isOpen: false });
      },
    });
  };

  return { onPressNavigateBlog, onClickPost };
};

export default useDialog;
