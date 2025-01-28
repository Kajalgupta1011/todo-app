import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '@/Stores/todos/todosSlice'
interface todoProps{
  todo:{
    id: string,
    text: string,
    completed: boolean
  }
}

function ListItem({todo}: todoProps) {
const dispatch = useDispatch();
const [editText,  setEditText] = useState(todo.text)
const[isEdit, isSetEdit] = useState(false);
function handleEditing(){
  if(editText){
    dispatch(editTodo({id: todo.id, text: editText}));
    isSetEdit(false);
  }
}
function editCancel(){
  setEditText(todo.text);
  isSetEdit(false)

}
function handleaToggleTodo(){
  

}
if(isEdit){
  return (
    <li>
        <input type="text" value={editText}  onChange={(e) => setEditText(e.target.value)}/>
        <button onClick={handleEditing}>✔</button>
        <button onClick={editCancel}>❌</button>
          
    </li>
  );
}
return(
  <li>
    <input type="checkbox" checked={todo.completed} onClick={()=>dispatch(toggleTodo(todo.id))} />
    <span>{todo.text}</span>
    <button onClick={()=>isSetEdit(true)}>Edit</button>
    <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button> 
  </li>
)
  
}

export default ListItem