import React from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";

type UserType = {
  userName: string;
  password: string;
  email: string;
};

const UserForm = () => {
  const form = useForm<UserType>({
    initialValues: {
      userName: "",
      password: "",
      email:""
    },
    validate: {
      userName: (value) => (value ? null : "userName is required."),
      password: (value) => (value ? null : "password is required."),
      email: (value) => {
        if(!value) return "email is required.";
        const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.test(value)) return 'invalid email'
      },
    },
  });
  return (
    <form
      className="grid gap-4"
      onSubmit={form.onSubmit((data) => console.log(data))}
    >
      <TextInput
        label="Usename:"
        placeholder="Username here."
        {...form.getInputProps("userName")}
      />

      <TextInput
        label="Email:"
        placeholder="Email here."
        {...form.getInputProps("email")}
      />
       <TextInput
        label="Password:"
        placeholder="Password here."
        {...form.getInputProps("password")}
      />

      <Button type="submit">Register</Button>
    </form>
  );
};

export default UserForm;
