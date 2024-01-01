import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPagenationCommentList } from "../../apis/api";
import { LIMIT_PAGE, LIMIT_TAKE } from "../../consts/const";

// const LIMIT_PAGE = 10;
// const LIMIT_TAKE = 20;
const CommentPageNation = () => {
  const [params, setParams] = useSearchParams();
  const [pageNation, setPageNation] = useState();

  // const { data: pagenationCommentList } = useQuery(
  //   [QUERY_KEY.PageNationComment],
  //   () => getPagenationCommentList(params, LIMIT_TAKE.TWENTY, LIMIT_PAGE.TEN)
  // );

  // console.log(pagenationCommentList);
  // export const commentsInfo = pagenationCommentList?.Comments;

  // pageNation && console.log(pageNation);

  const fetchCommentPageNation = useCallback(async () => {
    const response = await axios.get("/api/comments", {
      params: {
        page: params.get("page") ?? 1,
        take: params.get("take") ?? LIMIT_TAKE.TWENTY,
        limit: params.get("limit") ?? LIMIT_PAGE.TEN,
      },
    });

    const pageNation = response.data.PageNation;
    setPageNation({
      ...pageNation,
    });
  }, [params]);

  useEffect(() => {
    fetchCommentPageNation();
  }, [fetchCommentPageNation, params]);

  const onClickPage = (page) => {
    setParams({
      page,
    });
  };

  const isPrevPageVisible = pageNation?.startPage !== 1;
  const isNextPageVisible =
    Math.ceil(pageNation?.currentPage / LIMIT_PAGE.TEN) !==
    Math.ceil(pageNation?.totalPage / LIMIT_PAGE.TEN);

  return (
    <div>
      {isPrevPageVisible && (
        <button onClick={() => setParams({ page: pageNation.startPage - 1 })}>
          이전
        </button>
      )}
      {pageNation &&
        Array(pageNation.endPage - pageNation.startPage + 1)
          .fill()
          .map((_, i) => pageNation.startPage + i)
          .map((page) => (
            <button key={page} onClick={() => onClickPage(page)}>
              {page}
            </button>
          ))}
      {isNextPageVisible && (
        <button onClick={() => setParams({ page: pageNation.endPage + 1 })}>
          다음
        </button>
      )}
    </div>
  );
};
export default CommentPageNation;
