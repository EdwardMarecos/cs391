"use client"

import {Textarea} from "@mui/joy"
import {Button, FormHelperText, TextField} from "@mui/material"
import {useState} from "react";
import createNewPost from "@/app/lib/createNewPost";
import { PostProps } from "@/types";




export default function NewPostForm({
    append,
}: {
    append: (post: PostProps) => void;
}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <form className="w-96 rounded-x1 p-4 bg-sky-400">
            onSubmit={async (event) => {
                event.preventDefault();
                createNewPost(title, content)
                    .then((newPost) => append(newPost))
                    .catch((err) => console.error(err));
            }}
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <FormHelperText>What&apos;s on your mind?</FormHelperText>
            <div className="w-full flex justify-center">
                <Button
                    sx={{ width: "80px" }}
                    variant="contained"
                    type="submit"
                    disabled={title === "" || content === ""}
                >
                    Create Post
                </Button>
            </div>
        </form>
    );
}