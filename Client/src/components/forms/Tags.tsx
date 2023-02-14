import React from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";

type TagType = {
  name: string;
};

const TagForm = () => {
  const form = useForm<TagType>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => (value ? null : "tag name is required."),
     
    },
  });
  return (
    <form
      className="grid gap-4"
      onSubmit={form.onSubmit((data) => console.log(data))}
    >
      <TextInput
        label="Tag Name:"
        placeholder="Tagname here."
        {...form.getInputProps("name")}
      />

      <Button type="submit">Add Tag</Button>
    </form>
  );
};

export default TagForm;
