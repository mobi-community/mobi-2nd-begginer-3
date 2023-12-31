import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { LIMIT } from "../../consts/Const";

const PagiNation = ({ axiosInfo }) => {
  const [params, setParams] = useSearchParams();
  const { data } = useAxios([axiosInfo, params]);
  const pageNation = data?.PageNation;

  const onClickPage = (page) => {
    setParams({
      page,
    });
  };

  const isPrevPageVisible = pageNation?.startPage !== 1;
  const isNextPageVisible =
    Math.ceil(pageNation?.currentPage / LIMIT.PAGE) !==
    Math.ceil(pageNation?.totalPage / LIMIT.PAGE);

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
export default PagiNation;
