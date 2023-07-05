import React, { useState } from 'react';
import useList from '../../hooks/useList';
import { motion } from 'framer-motion';

/**
 * 
 * @returns {React.Component} TaskList component
 */

const TaskList = ({ showSettings, setShowSettings }) => {
    const [list, setList, push, remove, clear, isEmpty, sort, invert] = useList([]);
    const [newTask, setNewTask] = useState('');


    const handleNewtask = () => {
        if (!newTask) return;
        const task = { task: newTask, completed: false }
        push(task);
        setNewTask('');
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleNewtask();
        }
    }

    const toggleCompleteItem = (index) => {
        list[index].completed = !list[index].completed;
        setList([...list]);
    };

    /**
     * The function returns the sum of two numbers
     * @param {number} a - first number to sum
     * @param {number} b  - second number to sum
     * @returns {number} - result of the sum
     */
    const suma = (a, b) => a + b

    return (
        <>
            <header className='flex justify-between'>
                <h1 className='text-3xl text-sky-700 font-semibold dark:text-sky-300'>Task List</h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowSettings(!showSettings)}
                    className='btn'>{!showSettings ? 'Show Settings' : 'Hide Settings'}
                </motion.button>
            </header>
            <div>
                {/* <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder='New task' />
                <button type="submit">Add task</button>
            </form> */}
                <div className='my-4'>
                    <input
                        className='shadow py-1 px-2 rounded-lg outline-none hover:shadow-lg focus:shadow-lg
                    transition-all duration-300 focus:ring-2 mr-2 dark:bg-slate-700'
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder='New task'
                        onKeyDown={handleKeyDown} />
                    <button
                        className='btn'
                        onClick={handleNewtask}>Add task</button>
                </div>
                {
                    isEmpty() ?
                        <p>No tasks</p>
                        :
                        <ul>
                            {
                                list.map((item, index) =>
                                    <li key={index}>
                                        <input type="checkbox" onClick={() => toggleCompleteItem(index)} checked={item.completed} />
                                        <span className={`ml-2 text-gray-800 text-sm italic dark:text-gray-100
                                    ${item.completed && "line-through"}`}>{item.task}</span>
                                    </li>)
                            }
                        </ul>
                }
                {!isEmpty() && (
                    <div className='mt-2'>
                        <button onClick={() => clear()} className='mr-2 btn'>Clear</button>
                        <button onClick={() => sort()} className='mr-2 btn'>Sort</button>
                        <button onClick={() => invert()} className='mr-2 btn'>Invert</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default TaskList;
