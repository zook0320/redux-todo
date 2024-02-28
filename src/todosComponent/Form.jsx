import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";


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
    <form onSubmit={onSubmitHandler} className="form-container">
      <label className="form-label"></label>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={onChangeHandler}
        className="form-input"
        placeholder="제목"
      />
      <label className="form-label"></label>
      <input
        type="text"
        name="body"
        value={todo.body}
        onChange={onChangeHandler}
        className="form-input"
        placeholder="내용"
      />
      <button type="submit" className="submit-button">
        추가하기
      </button>
    </form>
  );
};

export default Form;
