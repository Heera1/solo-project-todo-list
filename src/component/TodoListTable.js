import React, { useState } from "react";
import styled from "styled-components";
import TodoListItem from './TodoListItem';
import TodoEdit from './TodoEdit';
import TodoList from './TodoList';
import useFetch from '../util/useFetch';

export const TodoListTableStyled = styled.div`
  float: left;
  width: 33%;
`;

const TodoListTable = () => {
    const [insertToggle, setInsertToggle] = useState(false);
    const [todos, isPending, error] = useFetch(`http://localhost:3001/todos`)

    return (
        <TodoListTableStyled>
            <h3>📑 사전준비</h3>
            <TodoList todos={todos}>
                <TodoListItem />
            </TodoList>
            {insertToggle && (<TodoEdit />)} {/*insertToggle의 값이 true면 todoEdit 팝업창을 부름*/}
        </TodoListTableStyled>
    )
};

export default TodoListTable;