"use client"

import { useState } from "react"
import { addTodo } from "@/Stores/todos/todosSlice"
import { useDispatch } from 'react-redux';

function AddTodo() {

    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch();
    const addTodoHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText) {
            dispatch(addTodo(inputText));
            setInputText('')
        } else {
            alert('field can not be empty');
        }
    }

    return (
        <>
            {/* <div>AddTodo</div> */}


            <form onSubmit={addTodoHandler}>

                <div className="w-full max-w-sm min-w-[400px]">
                    <div className="relative">
                        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} 
                            className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                        <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                            Type Here...
                        </label>
                        <button
                            className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                        >
                            Add Todo
                        </button>
                    </div>
                </div>
                {/* <input className="p-2 " type="text" onChange={(e)=>setInputText(e.target.value)}/>
        <button type="submit">Add Todo</button> */}
            </form>
        </>
    )
}

export default AddTodo