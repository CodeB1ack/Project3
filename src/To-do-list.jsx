import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
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
            <button onClick={addTask}>Add Task</button>
        </div>

    </div>);

}

export default ToDoList