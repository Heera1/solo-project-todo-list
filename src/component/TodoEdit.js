import React, { useCallback, useState, useEffect } from "react";

function TodoEdit({ selectedTodo, onUpdate }){
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        onUpdate(selectedTodo.id, value);
        setValue(''); //value 초기화
        e.preventDefault(); //기본 이벤트(새로고침) 방지
    }, [onUpdate, value]);

    useEffect(() => {
        if(selectedTodo){
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>수정하기</h2>
                <input 
                onChange={onChange}
                value={value}
                placeholder="할 일을 수정하세요"
                />
                <button type="submit">수정하기</button>
            </form>
        </div>
    )
}

export default TodoEdit;
