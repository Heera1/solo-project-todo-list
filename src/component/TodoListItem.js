import React from "react";
import classname from 'classname';
import styled from "styled-components";

export const MdCheckBox = styled.div`
    /* border: solid 1px black; */
    width: 12px;
    height: 12px;
`;

export const MyCheckBoxHide = styled.div`
    /* border: solid 1px pink; */
`;

export const MdRemoveCircle = styled.div`
    /* border: solid 3px red; */

`;

// export const CheckBoxContainer = styled.div`
//     display: inline-block;
//     vertical-align: middle;
// `;

// export const StyledCheckBox = styled.div`
//     display: inline-block;
//     width: 2rem;
//     height: 2rem;
//     border: ${(props) => (props.checked ? "none" : "solid 0.1rem #dddddd")};
//     background: ${props => props.checked ? "black" : "white"};
//     border-radius: 0.4rem;
//     transition: all 150ms;
// `;

// export const HiddenCheckBox = styled.input`
//     border: 0;
//     clip: rect(0 0 0 0);
//     clip-path: inset(50%);
//     height: 1px;
//     margin: -1px;
//     overflow: hidden;
//     padding: 0;
//     position: absolute;
//     white-space: nowrap;
//     width: 1px;
// `;

// export const Icon = styled.svg`
//     fill: none;
//     stroke: white;
//     stroke-width: 2px;
// `;

function TodoListItem({ todo, onRemove, onInsertToggle, onChangeSelectedTodo }) {
    // {/*TOdoList에서 받아온 todo를 프롭스로 전달. todos 배열에 들어있는 각 객체임*/ }
    const { id, text, checked } = todo;

    return (
        <li>
            <div className={classname('checkbox', { checked })}>
                {/* checked=true일 때 checked라는 class 추가 */}
                {checked ? <MdCheckBox /> : <MyCheckBoxHide />}
                {/* checked=true면 체크된 박스 아이콘, false면 빈박스 아이콘이 뜸*/}
                <div className="text">{text}</div>
            </div>
            <div className="edit" onClick={() => {
                onChangeSelectedTodo(todo)
                onInsertToggle();
            }
            }>
                {/* <MdModeEditOutline /> */}
            </div>
            <div className="remove" onClick={() => onRemove(id)}> 
            {/* 클릭시 todo list 삭제 */}
                <MdRemoveCircle />
            </div>
        </li>
    );
}

export default TodoListItem;