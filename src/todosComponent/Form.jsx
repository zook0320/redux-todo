import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const generateUniqueId = () => {
  const date = new Date();
  const uniqueId = date.getTime(); // 현재 시간을 이용한 고유한 ID 생성
  return uniqueId;
};

const Form = () => {
  const id = generateUniqueId(); // 고유한 ID 생성
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;

    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>

      <Input
        type="text"
        name="title"
        value={todo.title}
        onChange={onChangeHandler}
        placeholder="제목"
      />

      <Input
        type="text"
        name="body"
        value={todo.body}
        onChange={onChangeHandler}
        placeholder="내용"
      />
      <SubmitButton type="submit">add</SubmitButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;


const Input = styled.input`
  padding: 8px;
  margin-right: 16px;
`;

const SubmitButton = styled.button`
  padding: 8px;
  background-color: #ff9696;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #88d899;
  }
`;
