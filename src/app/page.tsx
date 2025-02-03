
import { TodoList } from './Components/TodoList';
export default function Home() {
  return (
    <main className="font-lato min-h-screen md:p-8 p-4 flex flex-col items-center justify-center">
      <div className='w-full max-w-5xl rounded-[8px] bg-[var(--background)] min-h-[702px]'>              
        <TodoList />
      </div>

    </main>
  );
}
