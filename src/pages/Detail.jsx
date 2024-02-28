import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos";
import styled from "styled-components";

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
    <Wrapper>
          <Wrapper2>
      <Title>ID: {todo.id}</Title>
      <Content>
        <Item>
          <Label>Title:</Label>
          <Value>{todo.title}</Value>
        </Item>
        <Item>
          <Label>Body:</Label>
          <Value>{todo.body}</Value>
        </Item>
      </Content>
      <Button onClick={() => navigate("/")}>이전으로</Button>
      </Wrapper2>
    </Wrapper>
  );
};

export default Detail;

const Wrapper2 = styled.div`
    border: 2px solid rgb(207, 207, 207);
    background-color: #ffffff;
    padding: 10%;
    border-radius: 10px;
`;

const Wrapper = styled.div`
  background-color: #ffe7e7;
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  border: 10px;

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 8px;
`;

const Button = styled.button`
  margin-top: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
