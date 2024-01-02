import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { QUERY_KEY } from '../consts/queryKey';
import { getPaginationComment, getPostDetailPost } from '../apis/api';
import useShowModal from '../hooks/useShowModal';
import privateRouter from '../utils/privateRouter';
import PagiNation from '../components/Pagenation';

const PostDetailPage = () => {
    const [params] = useSearchParams();
    const { isOpenCommentList, onClickCommentsBtn } = useShowModal();
    const { data: postDetailData } = useQuery([QUERY_KEY.post], () => getPostDetailPost());
    const { data: commentData } = useQuery([QUERY_KEY.comments, params.get('page')], () =>
        getPaginationComment(params)
    );
    const paginationCommentData = commentData?.Comments;

    useEffect(() => {
        privateRouter();
    }, []);

    useEffect(() => {
        if (!isOpenCommentList) return;
    }, [params]);

    return (
        <div>
            <h1>Post Detail Page</h1>
            <div>
                <p>제목: {postDetailData?.title}</p>
                <p>내용: {postDetailData?.content}</p>
                <button onClick={onClickCommentsBtn}>{isOpenCommentList ? '댓글 숨기기' : '댓글 보기'}</button>
                {isOpenCommentList && (
                    <>
                        {paginationCommentData?.map((comment) => (
                            <div key={comment.id}>
                                <p>{comment.content}</p>
                                <p>{comment.User.nickName}</p>
                            </div>
                        ))}
                        <PagiNation />
                    </>
                )}
            </div>
        </div>
    );
};
export default PostDetailPage;
