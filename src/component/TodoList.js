import React from 'react'
import TodoListItem from './TodoListItem'
import styled from 'styled-components';

export const ListStyled = styled.ul`
    width: 100%;
    /* border: solid 1px orange; */
    list-style-type: none;
    text-align: left;
`;

const TodoList = ({todos}) => {

    return(
        <ListStyled>
            {todos && todos.map((todo) => ( //todos 배열의 각 항목을 TodoListItem 컴포넌트로 가공
                <TodoListItem 
                    todo={todo}
                    key={todo.id}
                />
            ))}
        </ListStyled>
    );
}

export default TodoList;