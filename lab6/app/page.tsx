import PostsDisplay from "@/app/components/PostsDisplay";
import getAllPosts from "@/app/lib/getAllPosts";

export default async function Home() {
    const posts = await getAllPosts();

    return(
        <div className="lex flex-col items-center bg-blue-200 p-4">
            <PostsDisplay inputPosts={posts} />
        </div>
    );
}