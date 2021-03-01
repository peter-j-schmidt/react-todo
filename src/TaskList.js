import React from 'react';

const TaskList = ({tasks}) => {

    return (
        <>
            {tasks.map((task) => {
                const {id, task_name} = task;
                return (
                    <article key={id} className="task">
                        <div className='task-info'>
                            <h4>{task_name}</h4>
                            {/* <button >Clear</button> */}
                        </div>
                    </article>
                );
            })}
            <article>

            </article>
        </>
        
    );
}

export default TaskList;
