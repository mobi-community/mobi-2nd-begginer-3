import { useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { postAPI } from "../../apis/post.api";

const PagiNation = ({ endPoint, limitPage = 10, limitTake = 20 }) => {
  const [params, setParams] = useSearchParams();

  const paginationParams = {
    page: params.get("page") ?? 1,
    take: params.get("take") ?? limitPage,
    limit: params.get("limit") ?? limitTake,
  };

  const { data } = useAxios([
    postAPI.getPost({ paginationParams, endPoint }),
    paginationParams,
  ]);

  console.log("data", data);
  const pageNation = data?.PageNation;

  const onClickPage = (page) => {
    setParams({
      page,
    });
  };

  const isPrevPageVisible = pageNation?.startPage !== 1;
  const isNextPageVisible =
    Math.ceil(pageNation?.currentPage / limitPage) !==
    Math.ceil(pageNation?.totalPage / limitPage);

  const Buttons =
    pageNation &&
    Array(pageNation.endPage - pageNation.startPage + 1)
      .fill()
      .map((_, i) => pageNation.startPage + i)
      .map((page) => (
        <button key={page} onClick={() => onClickPage(page)}>
          {page}
        </button>
      ));

  return (
    <div>
      {isPrevPageVisible && (
        <button onClick={onClickPage(pageNation.startPage - 1)}>이전</button>
      )}
      {pageNation && Buttons}
      {isNextPageVisible && (
        <button onClick={onClickPage(pageNation.startPage + 1)}>다음</button>
      )}
    </div>
  );
};
export default PagiNation;
