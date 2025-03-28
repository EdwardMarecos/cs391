"use server";
import { PostProps } from "@/types";

export default async function createNewPost(
    title: string,
    content: string,
): Promise<PostProps> {
    console.log("Creating new Post...");
    const p = {
        title: title,
        content: content,
        upvotes: 0,
        downvotes: 0,
    };
    // insert in db - next week

    // get id from db - also next week
    return {...p, id: "newId" };
}