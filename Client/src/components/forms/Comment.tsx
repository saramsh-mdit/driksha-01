import React from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";

type CommmentType = {
  comment: string;
  videoId: string;
};

const CommentForm = ({ videoId }: { videoId: string }) => {
  const form = useForm<CommmentType>({
    initialValues: {
      comment: "",
      videoId: videoId,
    },
    validate: {
      comment: (value) => (value ? null : "comment is required."),
      videoId: (value) => (value ? null : "videoId is required."),
    },
  });
  return (
    <form
      className="grid gap-4"
      onSubmit={form.onSubmit((data) => console.log(data))}
    >
      <TextInput
        placeholder="your comment here."
        {...form.getInputProps("comment")}
      />
      <Button type="submit">Comment</Button>
    </form>
  );
};

export default CommentForm;
