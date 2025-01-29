
import { CheckSquare } from 'lucide-react';
import AddTodo from './Components/AddTodo'
import { TodoList } from './Components/TodoList';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-slate-50">
      <h1 className="font-bold flex items-center gap-2 text-4xl md:text-4xl text-center text-slate-800 mb-1">
      <CheckSquare className="h-8 w-8 text-primary" /> ToDo App
      </h1>
      <p className='text-slate-500 mb-8'>Manage your tasks efficiently with our modern todo application</p>
      <AddTodo />
      <TodoList />
    </main>
  );
}
