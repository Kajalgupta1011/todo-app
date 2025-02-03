"use client";

import { RootState } from '@/Stores/store';
import { useSelector } from "react-redux";
import ListItem from './ListItem';
import { useState } from 'react';
import { CheckCircle2, Circle, ListTodo } from 'lucide-react';

const TabButton = ({ tab, activeTab, setActiveTab, icon, label }: any) => {
  return (
    <div
      className={`flex items-center px-2 py-1 gap-3 ${activeTab === tab ? "shadow-sm bg-white rounded-md border-blue-500 font-bold" : "text-gray-500"}`}
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
    { tab: 'all', icon: <ListTodo className="h-4 w-4 mr-2" />, label: "All Tasks" },
    { tab: 'active', icon: <Circle className="h-4 w-4 mr-2" />, label: "Active Tasks" },
    { tab: 'completed', icon: <CheckCircle2 className="h-4 w-4 mr-2" />, label: "Completed Tasks" }
  ];

  const filteredTodos = todos.filter(todo => {
    if (activeTab === 'active') return !todo.completed;
    if (activeTab === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className='grid max-w-5xl md:grid-cols-[240px,1fr] mt-8 md:min-h-[400px] border-x rounded-lg border-y border-slate-300'>
      <div className='flex md:flex-col md:items-start items-center gap-2 h-full bg-slate-200 justify-start space-y-1 bg-muted p-4 rounded-l-lg'>
        {tabs.map(({ tab, icon, label }) => (
          <TabButton key={tab} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} icon={icon} label={label} />
        ))}
      </div>
      
      <div className="w-full sm:min-w-[400px] p-4 bg-card rounded-r-lg">
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
