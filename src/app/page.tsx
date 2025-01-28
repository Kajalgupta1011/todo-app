
import AddTodo from './Components/AddTodo'
import { TodoList } from './Components/TodoList';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <h1 className="font-bold text-6xl text-yellow-500 ">
        Hello ToDo!!!
       </h1>
       <AddTodo />
       <TodoList/>
    </div>
  );
}
