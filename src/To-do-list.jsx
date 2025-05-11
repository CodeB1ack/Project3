import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Go to the gym", "Read a book"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);

    }

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index) {

    }

    return (
    <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button className="add-button" 
            onClick ={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((tasks, index) => 
            
                <li key={index}>
                    <span className="text">{tasks}</span>
                    <button 
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                        Up
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                </li>

            )}
        </ol>
    </div>);

}

export default ToDoList