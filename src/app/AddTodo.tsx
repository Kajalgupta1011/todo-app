"use client"

import { useState } from "react"
import { addTodo } from "@/lib/features/todos/todosSlice"
import { useDispatch } from 'react-redux';

function AddTodo() {

    const [inputText, setInputText] =  useState('')
    const dispatch = useDispatch();
    const addTodoHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if(inputText){
            dispatch(addTodo(inputText));
        setInputText('')
        }else{
            alert('field can not be empty');
        }        
    }

  return (
    <>
    <div>AddTodo</div>
    <form onSubmit={addTodoHandler}>
        <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
        <button type="submit">Add Todo</button>
    </form>
    </>
  )
}

export default AddTodo