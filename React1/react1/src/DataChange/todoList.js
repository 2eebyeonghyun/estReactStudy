import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, setFilter, toggleTodo, removeTodo } from "./todoSlice";

function TodoList() {

    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();
    const { items, filter } = useSelector((state) => state.todos); // todos는 name이랑 똑같이 맞춘다고 생각

    const filteredTodos = items.filter(todo => {

        if(filter === 'completed') {
            return todo.completed;
        }

        if(filter === 'active') {
            return !todo.completed;
        }

        return true;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // trim() : 양끝 공백 제거
        if(newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} 
                    placeholder="새 할 일 추가" 
                />

                <button type="submit" onClick={addTodo}>추가하기</button>
            </form>

            <div>
                <button onClick={() => dispatch(setFilter('all'))}>전체</button>
                <button onClick={() => dispatch(setFilter('active'))}>미완료</button>
                <button onClick={() => dispatch(setFilter('completed'))}>완료</button>
            </div>

            {/* 화면 랜더링 영역 */}
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;