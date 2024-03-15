import { fetchCommentByPostId } from "@/db/queries/comments";
import CommentShow from "./comment-show";

interface CommentListProps {
  postId: string;
}

const CommentList = async ({ postId }: CommentListProps) => {
  const comments = await fetchCommentByPostId(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderComments = topLevelComments.map((comment) => (
    <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
  ));
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderComments}
    </div>
  );
};

export default CommentList;
