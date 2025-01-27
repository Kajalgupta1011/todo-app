"use client";

import { RootState } from '@/lib/store';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from '../lib/features/todos/todosSlice'; // Make sure `deleteTodo` is imported as a named export
import { useState } from 'react';

export function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    // const [editText,  setEditText] = useState()

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input type='text' value={todo.text} />
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
