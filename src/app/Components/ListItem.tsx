import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '@/Stores/todos/todosSlice'
import { Check, Pencil, Trash2, X } from 'lucide-react'
interface todoProps {
  todo: {
    id: string,
    text: string,
    completed: boolean
  }
}

function ListItem({ todo }: todoProps) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(todo.text)
  const [isEdit, setIsEdit] = useState(false);

  function handleEditing() {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText }));
      setIsEdit(false);
    }
  }

  function editCancel() {
    setEditText(todo.text);
    setIsEdit(false)
  }

  if (isEdit) {
    return (
      <li className='flex sm:flex-col md:items-center gap-2 p-4 bg-white rounded-lg shadow-sm'>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 px-3 text-[18px] py-1 border border-slate-200 rounded focus:outline-none focus:border-slate-400"
        />
        <button
          onClick={handleEditing}
          className="p-1 text-green-600 hover:text-green-700"
        >
          <Check className="h-4 w-4" />
        </button>
        <button
          onClick={editCancel}
          className="p-1 text-red-600 hover:text-red-700"
        >
          <X className="h-4 w-4" />
        </button>
      </li>
    );
  }

  return (
    <li className='flex flex-wrap items-center justify-between gap-6 p-4 bg-white rounded-lg shadow-gray-200 shadow-sm'>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="hidden peer"
        />
        <span className="w-7 h-7 relative rounded-[8px] border border-[#5a5a5a] peer-checked:bg-[#5a5a5a50] peer-checked:border-[#5a5a5a00]">
          {todo.completed ? <svg className='absolute top-[7px] left-[5px]' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.62741 11.3L0.818767 6.49136C0.529873 6.20247 0.529873 5.73406 0.818767 5.44514L1.86496 4.39891C2.15386 4.10999 2.6223 4.10999 2.91119 4.39891L6.15052 7.63821L13.0888 0.699955C13.3777 0.41106 13.8461 0.41106 14.135 0.699955L15.1812 1.74618C15.4701 2.03508 15.4701 2.50348 15.1812 2.79241L6.67364 11.3C6.38471 11.5889 5.9163 11.5889 5.62741 11.3Z" fill="white" />
          </svg>
            : ""}
        </span>
        <span className={`flex-1 text-[18px] ml-3 ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>{todo.text}</span>
      </label>
      <div className='flex-1 justify-end flex gap-3'>
        <button
          onClick={() => setIsEdit(true)}
          disabled={todo.completed}
          className=" text-sm text-blue-600"
        >
          <Pencil className="h-4 w-4" />
        </button>

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-sm text-[var(--orange-color)]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </li>
  )
}

export default ListItem