import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../constants/Constant";

const PagiNation = ({ pagination }) => {
  const [params, setParams] = useSearchParams();
  const { startPage, endPage, currentPage, totalPage } = pagination;

  const onClickPage = (page) => {
    setParams({
      page,
    });
  };

  const isPrevPageVisible = startPage !== 1;

  const isNextPageVisible =
    Math.ceil(currentPage / LIMIT.PAGE) !== Math.ceil(totalPage / LIMIT.PAGE);

  const Buttons =
    pagination &&
    Array(endPage - startPage + 1)
      .fill()
      .map((_, i) => startPage + i)
      .map((page) => (
        <button key={page} onClick={() => onClickPage(page)}>
          {page}
        </button>
      ));

  return (
    <div>
      {isPrevPageVisible && (
        <button onClick={() => setParams({ page: startPage - 1 })}>이전</button>
      )}
      {pagination && Buttons}
      {isNextPageVisible && (
        <button onClick={() => setParams({ page: endPage + 1 })}>다음</button>
      )}
    </div>
  );
};
export default PagiNation;
