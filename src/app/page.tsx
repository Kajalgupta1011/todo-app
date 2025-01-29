
import AddTodo from './Components/AddTodo'
import TabList from './Components/TabList';
import { TodoList } from './Components/TodoList';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-slate-50">
      <h1 className="font-bold text-4xl md:text-6xl text-center text-slate-800 mb-8">
        ToDo App
      </h1>
      <AddTodo />
      {/* <TabList/> */}
      <TodoList />
    </main>
  );
}
