import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}


const initialState: TodoState = {
    todos: [{ id: '1', text: 'sleeping', completed: false }]
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
        }
    }

})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;