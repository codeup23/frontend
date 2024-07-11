import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-6 w-full flex flex-col justify-center mx-auto">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="shadow-md appearance-none w-4/5 border rounded-lg py-2 px-3 text-grey-darker mx-auto my-5"
      />
      <button 
      type="submit" 
      className="bg-blue-700 hover:bg-blue-500 text-white font-bold w-1/3 py-2 px-4 rounded-lg mx-auto shadow-lg hover:shadow-sky-300">
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;