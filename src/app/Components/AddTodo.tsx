"use client"

import { useState } from "react"
import { addTodo } from "@/Stores/todos/todosSlice"
import { useDispatch } from 'react-redux';
import { PlusCircle } from "lucide-react";

function AddTodo() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e: React.FormEvent) => {
      e.preventDefault();
      if (inputText) {
        dispatch(addTodo(inputText));
        setInputText('');
      } else {
        alert('field can not be empty');
      }
    };
  
    return (
      <>
        <form onSubmit={addTodoHandler} className="w-full pt-4 pb-6">
          <div className="w-full ">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Add a new task insdie ‘All’ category"
                className="peer w-full z-10 relative bg-[#F3F3F3] placeholder:text-[#B5B5B5] text-slate-700 text-md rounded-md px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
              />
              {/* <label className="absolute cursor-text z-0 px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:z-20 peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              Add a new task insdie ‘All’ category
              </label> */}
              {/* <button
                className="absolute flex items-center right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Todo
              </button> */}
            </div>
          </div>
        </form>
      </>
    );
  }
  
  export default AddTodo;