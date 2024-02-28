import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <Wrapper>
      <Title>Working.. 🔥</Title>
      <Container>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo key={todo.id}>
                <StyledLink to={`/${todo.id}`}>
                  <DetailLink>🔍</DetailLink>
                </StyledLink>
                <Content>
                  <TodoTitle>{todo.title}</TodoTitle>
                  <TodoBody>{todo.body}</TodoBody>
                </Content>
                <Buttons>
                  <DeleteButton onClick={() => onDeleteTodo(todo.id)}>
                  Delete
                  </DeleteButton>
                  <ToggleButton onClick={() => onToggleStatusTodo(todo.id)}>
                    {todo.isDone ? "Cancel" : "OK!"}
                  </ToggleButton>
                </Buttons>
              </Todo>
            );
          } else {
            return null;
          }
        })}
      </Container>
      <TitleDone>Done..! 🎉</TitleDone>
      <Container>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo key={todo.id}>
                <StyledLink to={`/${todo.id}`}>
                  <DetailLink>🔍</DetailLink>
                </StyledLink>
                <Content>
                  <TodoTitle>{todo.title}</TodoTitle>
                  <TodoBody>{todo.body}</TodoBody>
                </Content>
                <Buttons>
                  <DeleteButton onClick={() => onDeleteTodo(todo.id)}>
                  Delete
                  </DeleteButton>
                  <ToggleButton onClick={() => onToggleStatusTodo(todo.id)}>
                    {todo.isDone ? "Cancel" : "OK"}
                  </ToggleButton>
                </Buttons>
              </Todo>
            );
          } else {
            return null;
          }
        })}
      </Container>
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
padding: 10px;
margin: 0;
border: 1px solid #69535c;
  background-color: #ff9696;
  border-bottom: none;
`;


const TitleDone = styled.h2`
margin: 0;
border: 1px solid #69535c;
  background-color: #88d899;
  border-bottom: none;
  border-top: none;
  padding: 10px;
`;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: 10%;
  background-color: #ffefef;
  border: 1px solid #69535c;
`;

const Todo = styled.div`
  width: 200px;
  border: 2px solid #69535c;
  border-radius: 10px;
  padding-bottom: 10px;
  margin: 10px;
  margin-bottom: 16px;
  background-color: #fff3e8;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DetailLink = styled.div`
  background-color: #f8dc5e;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  margin-bottom: 8px;
`;

const TodoTitle = styled.h3`
  margin-bottom: 4px;
`;

const TodoBody = styled.div``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DeleteButton = styled.button`
  border: 1px solid;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #ff9696;

  &:hover {
    background-color: #ff4d4d;
  }
`;

const ToggleButton = styled.button`
  border: 1px solid;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #8fcc8f;

  &:hover {
    background-color: #6bff6b;
  }
`;