import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='bg-sky-100 w-full h-full min-h-screen mx-auto justify-center'>
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
      </PersistGate>
    </Provider>
  );
}
