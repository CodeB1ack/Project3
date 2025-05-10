import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Go to the gym", "Read a book"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);

    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

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
                </li>

            )}
        </ol>
    </div>);

}

export default ToDoList