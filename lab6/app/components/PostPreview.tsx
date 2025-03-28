import { PostProps } from "@/types";

export default function PostPreview({post}: { post: PostProps }) {
    return (
        <div>
            <h4 className={"bg-sky-400 rounded-x1 p-4 m-2 w-96"}>{post.title}</h4>
            <p>{post.upvotes - post.downvotes}</p>
        </div>
    );
}