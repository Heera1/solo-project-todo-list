import './App.css';
import { useCallback, useRef, useState } from 'react';
import TodoInsert from './component/TodoInsert';
import Image from './component/Image';
import Title from './component/Title';
import styled from 'styled-components';
import TodoListTable from './component/TodoListTable';
import useFetch from './util/useFetch';

export const TodoTemplate = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
`;

export const Content = styled.div`
  float: left;
  width: 60%;
  /* border: solid 3px pink; */
  overflow-y: auto;

  header{
    height: 20%;
    margin-top: 20px;
  }

  main{
    height: 70%;
  }
`;

function App() {
  const [todos, setTodos] = useFetch("http://localhost:3001/todos/");

  const nextId = useRef(4);
  const onInsert = useCallback((text) => { //입력창의 text를 받아와 todo라는 객체 생성
    const todo = { //todos 객체와 같은 구조로 되어 있음
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo)); //concat 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열로 반환
    nextId.current++; //nextId 1씩 더하기
  }, [todos]
  );

  const onRemove = useCallback((id) => { //id를 인자로 받아서 todos 배열에서 id가 일치하지 않은 것만 새로운 배열로 반환
    setTodos(todos.filter((todo) => todo.id !== id))
  }, [todos]
  );

  const onToggle = useCallback((id) => { //todo의 id가 인자로 받아온 id와 같으면 => 기존 todo 객체를 복사해와 id와 text 정보는 유지하고 checked 상태만 반대로 변경
    setTodos(todos.map((todo) => //id가 일치하지 않는 경우에는 냅둠
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,),);
  }, [todos]
  );

  const [selectedTodo, setSelectedTodo] = useState(null); //클릭한 일정 항목의 todo 객체를 가져옴

  const onInsertToggle = () => { //TodoListItem의 '수정 아이콘'과 수정하기 팝업창의 '수정하기 버튼'에 onClick 이벤트로 넣어줄 함수 
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setSelectedTodo((prev) => !prev);
  };

  const onChangeSelectedTodo = (todo) => { //TodoListItem의 수정 아이콘에 onClick 이벤트로 넣어줄 함수
    setSelectedTodo(todo);
  }

  const onUpdate = (id, text) => { //TodoEdit 수정하기 폼의 onSubmit 이벤트로 들어갈 함수
    onInsertToggle(); //팝업창을 꺼주는 역할
    //각 todo의 id가 인자로 받아온 id와 같을 경우, 기존 id와 checked 정보는 유지하고 text만 업데이트
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
      <div className="App">
        <TodoTemplate>
          <Image />

          <Content>
            <header>
              <Title />
              <TodoInsert onInsert={onInsert} />
            </header>

            <main>
              <TodoListTable />
              <TodoListTable />
              <TodoListTable />
            </main>
          </Content>
        </TodoTemplate>
      </div>  
  );
}

export default App;
