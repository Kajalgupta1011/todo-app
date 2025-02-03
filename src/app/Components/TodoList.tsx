"use client";

import { RootState } from '@/Stores/store';
import { useSelector } from "react-redux";
import ListItem from './ListItem';
import { useState } from 'react';
import { CheckCircle2, CheckSquare, Circle, ListTodo } from 'lucide-react';
import AddTodo from './AddTodo';

const TabButton = ({ tab, activeTab, setActiveTab, icon, label }: any) => {
  return (
    <div
      className={`flex font-bold w-full items-center p-2 gap-1 mb-4 ${activeTab === tab ? "shadow-sm shadow-gray-200 bg-white text-[var(--orange-color)] rounded-md" : "text-gray-500"}`}
      onClick={() => setActiveTab(tab)}
    >
      <span>{icon}</span>
      <button className={`hidden md:block`}>{label}</button>
    </div>
  );
};

export function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { tab: 'all', icon: <ListTodo className="h-4 w-4 mr-2" />, label: "All" },
    { tab: 'active', icon: <Circle className="h-4 w-4 mr-2" />, label: "Active" },
    { tab: 'completed', icon: <CheckCircle2 className="h-4 w-4 mr-2" />, label: "Completed" }
  ];

  const filteredTodos = todos.filter(todo => {
    if (activeTab === 'active') return !todo.completed;
    if (activeTab === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className='grid w-full grid-cols-[75px,1fr]  md:grid-cols-[240px,1fr] md:min-h-[702px] '>
      <div className='md:p-8 p-5 h-ful bg-muted border-r-[1px] border-[#D8D8D8]'>
        {tabs.map(({ tab, icon, label }) => (
          <TabButton key={tab} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} icon={icon} label={label} />
        ))}
      </div>
      <div className="w-full sm:min-w-[400px] md:p-8 p-5 bg-card">
        <h1 className="font-bold flex items-center gap-2 text-4xl md:text-4xl text-center text-slate-800">
          <span className='capitalize'>{activeTab}</span> Tasks
        </h1>
        <AddTodo />
        <ul className="space-y-3">
          {filteredTodos.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No tasks!</p>
          ) : (
            filteredTodos.map(todo => (
              <ListItem key={todo.id} todo={todo} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
