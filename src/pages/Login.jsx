import React from "react";
import SubmitButton from "../components/buttons/SubmitButton";
import Container from "../components/container/Container";
import Form from "../components/forms/Form";
import Input from "../components/forms/Input";
import Title from "../components/headers/Title";

export default function Login() {
  return (
    <>
      <Container>
      <Title>Login</Title>
        <Form>
          <Input placeholder="Email" type="email"></Input>
          <Input placeholder="Password" type="password"></Input>
          <SubmitButton>Login</SubmitButton>
        </Form>
      </Container>
    </>
  );
}
