import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '@/Stores/todos/todosSlice'
interface todoProps {
  todo: {
    id: string,
    text: string,
    completed: boolean
  }
}

function ListItem({todo}: todoProps) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(todo.text)
  const [isEdit, setIsEdit] = useState(false);

  function handleEditing() {
    if(editText.trim()) {
      dispatch(editTodo({id: todo.id, text: editText}));
      setIsEdit(false);
    }
  }

  function editCancel() {
    setEditText(todo.text);
    setIsEdit(false)
  }

  if(isEdit) {
    return (
      <li className='flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm'>
        <input 
          type="text" 
          value={editText}  
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 px-3 py-1 border border-slate-200 rounded focus:outline-none focus:border-slate-400"
        />
        <button 
          onClick={handleEditing}
          className="p-1 text-green-600 hover:text-green-700"
        >
          ✔
        </button>
        <button 
          onClick={editCancel}
          className="p-1 text-red-600 hover:text-red-700"
        >
          ❌
        </button>
      </li>
    );
  }

  return (
    <li className='flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm'>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="w-4 h-4 rounded border-slate-300 text-slate-800 focus:ring-slate-400"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
        {todo.text}
      </span>
      <button 
        onClick={() => setIsEdit(true)}
        className="px-2 py-1 text-sm text-slate-600 hover:text-slate-800"
      >
        Edit
      </button>
      <button 
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="px-2 py-1 text-sm text-red-600 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  )
}

export default ListItem