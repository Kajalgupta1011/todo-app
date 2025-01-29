import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

interface editTofoState{
    id: string,
    text: string
}


const initialState: TodoState = {
    todos: [{ id: nanoid(), text: 'Reading', completed: false },
        { id: nanoid(), text: 'Walking', completed: false }
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
           state.todos.push({
            id: nanoid(),
            text: action.payload,
            completed: false
           });
        },
        deleteTodo: (state, action: PayloadAction<string>) =>{
            // state.todos.filter((todo)=>(todo.id != action.payload));
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action: PayloadAction<editTofoState>) =>{
            const findedTodo = state.todos.find((todo)=> todo.id === action.payload.id);
            if(findedTodo){
                findedTodo.text = action.payload.text
            }
        },
        toggleTodo: (state, action: PayloadAction<string> ) =>{
            const findtoggled = state.todos.find((todo)=> todo.id === action.payload);
            if(findtoggled){
                findtoggled.completed = !findtoggled.completed
            }
        }
    }

})

export const {addTodo, deleteTodo, editTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;