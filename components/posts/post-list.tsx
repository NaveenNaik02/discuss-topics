import { PostWithData } from "@/db/queries/posts";
import paths from "@/utils/paths";
import Link from "next/link";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

const PostList = async ({ fetchData }: PostListProps) => {
  const posts = await fetchData();
  if (posts.length === 0) {
    return <div>No Posts...!</div>;
  }
  const renderPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;
    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }
    return (
      <div key={post.id} className="border rounded p-2">
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-xl font-bold">{post.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">{post._count.comments}</p>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="space-y-2">{renderPosts}</div>;
};

export default PostList;
