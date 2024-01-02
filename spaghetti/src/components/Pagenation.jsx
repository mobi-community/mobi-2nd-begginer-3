import { useSearchParams } from 'react-router-dom';
import { QUERY_KEY } from '../consts/queryKey';
import { useQuery } from 'react-query';
import { getPaginationPost } from '../apis/api';
import { LIMIT_PAGE } from '../consts/pageNation';

const PagiNation = () => {
    const [params, setParams] = useSearchParams();
    const { data: postData } = useQuery([QUERY_KEY.posts, params.get('page')], () => getPaginationPost(params));
    const pagiNationData = postData?.PageNation;

    const onClickPage = (page) => {
        setParams({
            page,
        });
    };

    const isPrevPageVisible = pagiNationData?.startPage !== 1;
    const isNextPageVisible =
        Math.ceil(pagiNationData?.currentPage / LIMIT_PAGE) !== Math.ceil(pagiNationData?.totalPage / LIMIT_PAGE);

    return (
        <div>
            {isPrevPageVisible && (
                <button onClick={() => setParams({ page: pagiNationData.startPage - 1 })}>이전</button>
            )}
            {pagiNationData &&
                Array(pagiNationData.endPage - pagiNationData.startPage + 1)
                    .fill()
                    .map((_, i) => pagiNationData.startPage + i)
                    .map((page) => (
                        <button key={page} onClick={() => onClickPage(page)}>
                            {page}
                        </button>
                    ))}
            {isNextPageVisible && <button onClick={() => setParams({ page: pagiNationData.endPage + 1 })}>다음</button>}
        </div>
    );
};
export default PagiNation;
