import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Header from './components/Header';


export default function App() {
  return (
    <div className='bg-sky-100 w-full h-full flex flex-col mx-auto justify-center items-center'>
      <Header />
      <style>
        {`
          @media (max-width: 410px) {
            .container {
              width: 83.333333%; /* Equivalent to w-5/6 */
            }
          }
        `}
      </style>
      <div className="container mx-auto my-10 flex flex-col items-center w-3/5 min-h-[600px] rounded-lg bg-blue-200">
        <TaskInput />
        <TaskList />
      </div>
    </div>
    
  );
}