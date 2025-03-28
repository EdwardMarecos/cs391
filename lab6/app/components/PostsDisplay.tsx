"use client"
import { PostProps } from "@/types";
import { useState } from "react";
import PostPreview from "@/app/components/PostPreview";

export default function PostsDisplay({
    inputPosts,
}:{
    inputPosts: PostProps[];
}) {
    const [posts, setPosts] = useState(inputPosts);

    return (
        <div className="flex flex-col items-center">
            {posts.map((p) => (
                <PostPreview key={p.id} post={p} />
            ))}
        </div>
    );
}