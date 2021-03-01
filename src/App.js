import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data';
import './index.css';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <>
      
      <main>

        <section className='container'>
          <h1>To Do List</h1>
          <h3>{tasks.length} Tasks Remaining</h3>
          <TaskList tasks={tasks} />
          <button className='list-btn' onClick={() => setTasks([])}>Clear Tasks</button>
        </section>
        
      </main>
      
    </>
  );
}

export default App;
