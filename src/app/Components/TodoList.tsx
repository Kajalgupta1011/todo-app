"use client";

import { RootState } from '@/Stores/store';
import { useSelector } from "react-redux";
import ListItem from './ListItem';
import { useState } from 'react';
import { CheckCircle2, Circle, ListTodo } from 'lucide-react';

export function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);

    const [activeTab, setActiveTab] = useState('all');
    const tabs = ['all', 'active', 'completed'];

    const filtersTodos = todos.filter((todo) => {
        if (activeTab === 'active') return !todo.completed;
        if (activeTab === 'completed') return todo.completed;
        return true;
    });


    return (
        <div className='grid grid-cols-[240px,1fr] mt-8 min-h-[400px] border-x rounded-lg border-y border-slate-300'>
            <div className='flex flex-col gap-2 h-full bg-slate-200 justify-start space-y-1 bg-muted p-4 rounded-l-lg'>
                {
                    tabs.map((tab, idx) => {
                        return (
                            <>
                                {tab === 'all' ? (
                                    <div className={`${activeTab === tab ? "flex items-center px-2 py-1 shadow-sm gap-2 bg-white rounded-md border-blue-500 font-bold" : "flex items-center px-2 py-1 gap-3 text-gray-500"}`} key={tab+idx}>
                                        <ListTodo className="h-4 w-4 mr-2" />
                                        <button className='' onClick={() => setActiveTab(tab)}>{tab} Tasks</button>
                                    </div>
                                ) : (tab === 'active' ? (
                                    <div className={`${activeTab === tab ? "flex items-center px-2 py-1 shadow-sm gap-2 bg-white rounded-md border-blue-500 font-bold" : "flex items-center px-2 py-1 gap-3 text-gray-500"}`} key={tab+idx}>
                                        <Circle className="h-4 w-4 mr-2" /> 
                                        <button className='' onClick={() => setActiveTab(tab)}>{tab} Tasks</button>
                                    </div>
                                ) : (
                                    <div className={`${activeTab === tab ? "flex items-center px-2 py-1 shadow-sm gap-2 bg-white rounded-md border-blue-500 font-bold" : "flex items-center px-2 py-1 gap-3 text-gray-500"}`} key={tab+idx}>
                                        <CheckCircle2 className="h-4 w-4 mr-2" /> 
                                        <button className='' onClick={() => setActiveTab(tab)}>{tab} Tasks</button>
                                    </div>
                                )

                                )
                                }
                            </>

                        )
                    })
                }
            </div>
            <div className="w-full max-w-sm min-w-[400px] p-4 bg-card rounded-r-lg">
                <ul className="space-y-3">
                    {filtersTodos.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                            No tasks!
                        </p>
                    ) :
                        (
                            filtersTodos.map((todo) => (
                                <ListItem key={todo.id} todo={todo} />
                            ))
                        )
                    }
                </ul>
            </div>
        </div>
    );
}