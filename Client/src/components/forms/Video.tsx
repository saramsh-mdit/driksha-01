import React from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";

const VideoForm = () => {
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },
    validate: {
        title: (value)=> (value ? null : "title is required."),
        description: (value)=> (value ? null : "description is required."), 

    }
  });
  return <form className="grid gap-4" onSubmit={form.onSubmit(data=>console.log(data))}>
    <TextInput 
    label="Video Title:"
    placeholder="Video title here."
    {...form.getInputProps("title")}/>

     <TextInput 
    label="Video Description:"
    placeholder="Video description here."
    {...form.getInputProps("description")}/>

    <Button type="submit">Create Video</Button>
  </form>;
};

export default VideoForm;
