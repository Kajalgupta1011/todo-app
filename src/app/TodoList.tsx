"use client";

import { RootState } from '@/lib/store';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from '../lib/features/todos/todosSlice'; // Make sure `deleteTodo` is imported as a named export
import { useState } from 'react';
import ListItem from './ListItem';

export function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    console.log(todos)
    const [editText,  setEditText] = useState()

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <ListItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
