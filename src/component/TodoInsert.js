import React, { useCallback, useState } from "react";
import styled from "styled-components";

export const FormStyeld = styled.form`
    display: flex;
    justify-content: center;

    background: #937DC2;
    border-radius: 15px;
    margin: auto;
    width: 50%;

    input {
        width: 100%;
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 1.125rem;
        line-height: 1.5;
        color: white;
        &::placeholder{
            color: #dee2e6;
        }
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.1s background ease-in;
        &:hover {
            background: #c9b6f0;
        }

        background: none;
        outline: none;
        border: none;
        border-radius: 15px;
        background: #bba8e6;
        color: white;
        padding: 0.1rem;
        font-size: 1.5rem;

    }
`;

export const MdAdd = styled.div`
    padding: 0 15px 0 15px;
`;

function TodoInsert({onInsert}){
    const [ value, setValue ] = useState('');
    const onChange = useCallback(e => { //입력창에 입력한 값들을 setValue로 value에 저장
        setValue(e.target.value);
    }, [])
    const onSubmit = useCallback(e => { //todos 배열에 새로운 객체 추가하는 함수
        onInsert(value);
        setValue(''); //value 초기화
        e.preventDefault();//기본 이벤트(새로고침)방지
        }, [onInsert, value])

    return (
        <FormStyeld onSubmit={onSubmit}>
            <input
              onChange={onChange}
              value={value} placeholder="할 일을 입력하세요"
            />
            <button type="submit">
                <MdAdd>+</MdAdd>
            </button>
        </FormStyeld >
    )
}

export default TodoInsert;