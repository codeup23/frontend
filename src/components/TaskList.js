import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className='taskListContainer w-full my-5 flex mx-auto flex-col items-center'>
        <h1 className='text-2xl font-bold text-center mb-6'>Tasks</h1>
      {
        tasks.length === 0 
        ?
        <h1 className='text-lg font-semibold text-center text-gray-400'>Add Tasks</h1>
        :
        tasks.map((task, index) => (
            <Task key={index} task={task} index={index} />
        ))
      }
    </div>
  );
}

export default TaskList;