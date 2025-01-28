"use client";

import { RootState } from '@/Stores/store';
import { useSelector } from "react-redux";

import ListItem from './ListItem';

export function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    console.log(todos);
    
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
