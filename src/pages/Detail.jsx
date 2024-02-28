import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const { id } = useParams();
  const navigate = useNavigate();

  // 문자열로 받은 id 값을 숫자로 변환
  const todoId = parseInt(id);

  useEffect(() => {
    dispatch(getTodoByID(todoId)); // 변환된 숫자 id를 사용하여 Todo를 조회
  }, [dispatch, todoId]); 

  return (
    <div>
      <div>ID: {todo.id}</div>
      <div>Title: {todo.title}</div>
      <div>Body: {todo.body}</div>
      <button onClick={() => navigate("/")}>이전으로</button>
    </div>
  );
};

export default Detail;
