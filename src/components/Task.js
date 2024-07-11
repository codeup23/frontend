import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/actions/taskActions';
import { FaCheck , FaRegEdit , FaRegTrashAlt , FaRedo , FaRegThumbsUp } from 'react-icons/fa';
 
function Task({ task, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTask(index, editedTask));
    setIsEditing(false);
  };

  return (
    <div className= {`flex items-center w-11/12 justify-between mb-2 mx-auto p-3 ${isDone ? 'bg-green-300' :'bg-blue-300'} rounded-lg min-h-12 flex-wrap`}>
      
      <div className='textarea w-2/3'>
      {
        isEditing ? (
            <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="shadow appearance-none w-full border rounded py-2 px-3 text-grey-darker mr-2 my-1"
            />
        ) : (
            <div>
                <span className="text-lg font-medium mb-1">▪ {task}</span>
            </div>
        )}
      </div>
      

      <div className='buttons flex items-center justify-between flex-wrap px-2 gap-2'>
        {
        isEditing ? 
        (
          <button 
          title='Update Task'
          onClick={handleUpdate} 
          className="bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-violet-300">
            <div>
            <FaRegThumbsUp />
            </div>
          </button>
        ) 
        : 
        (
          <button 
          title='Edit Task'
          onClick={() => setIsEditing(true)} 
          className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold ml-2 py-2 px-4 rounded shadow-md hover:shadow-yellow-300">
            <div>
            <FaRegEdit />   
            </div>
          </button>
        )
        }
        <button
        title='Delete Task'
          onClick={() => dispatch(deleteTask(index))}
          className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded ml-2 shadow-md hover:shadow-red-300"
        >
            <div>
           <FaRegTrashAlt /> 
           </div>
        </button>

        <button
            title={`Mark as ${isDone ? 'Undone' : 'Done'}`}
            onClick={() => setIsDone(!isDone)}
            className = {`bg-${isDone ? 'blue' : 'green'}-600 hover:bg-${isDone ? 'blue' : 'green'}-400 text-white font-bold py-2 px-4 rounded ml-2 shadow-md hover:shadow-${isDone ? 'blue' : 'green'}-300`}
        >
            <div>
            {isDone ? <FaRedo /> : <FaCheck />}
            </div>
        </button>
      </div>
    </div>
  );
}

export default Task;