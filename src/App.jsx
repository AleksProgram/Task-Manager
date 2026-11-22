import {useState} from 'react'
import './App.css'
import {initialTasks} from "./data/initialTasks.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskStatistics from "./components/TaskStatistics.jsx";

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [filter, setFilter] = useState("all")

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    function addTask() {
        const newTask = {
            id: crypto.randomUUID(),
            title: "Practice JS",
            completed: false
        }
        setTasks([...tasks, newTask]);
    }

    function toggleTask(id) {
        setTasks(tasks.map((task) => task.id === id
            ? {...task, completed: !task.completed}
            : task
        ))
    }

    function clearTasks() {
        setTasks([])
    }

    function clearCompletedTasks() {
        setTasks(tasks.filter((task) => !task.completed))
    }

    let filteredTasks;
    if (filter === "completed") {
        filteredTasks = tasks.filter((task) => task.completed)
    } else if (filter === "notCompleted") {
        filteredTasks = tasks.filter((task) => !task.completed)
    } else {
        filteredTasks = tasks
    }

    return (
        <div className="app-shell">
            <Header/>
            <main className="task-manager">
                <section className="overview" aria-label="Task overview">
                    <p className="section-kicker">Personal productivity / 01</p>
                    <TaskStatistics tasks={tasks}/>
                </section>

                <section className="task-workspace" aria-label="Tasks">
                    <div className="section-heading">
                        <div>
                            <p className="section-kicker">Workspace / Live</p>
                            <h2>Task board</h2>
                        </div>
                        <span className="live-indicator">System online</span>
                    </div>

                    <div className="filter-bar" aria-label="Filter tasks">
                        <button className={filter === "all" ? "is-active" : ""} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All</button>
                        <button className={filter === "completed" ? "is-active" : ""} aria-pressed={filter === "completed"} onClick={() => setFilter("completed")}>Completed</button>
                        <button className={filter === "notCompleted" ? "is-active" : ""} aria-pressed={filter === "notCompleted"} onClick={() => setFilter("notCompleted")}>Not completed</button>
                    </div>

                    <div className="task-list">
                        <TaskList tasks={tasks} filteredTasks={filteredTasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
                    </div>

                    <div className="task-actions">
                        <button className="button-primary" onClick={addTask}>Добавить задачу</button>
                        <button className="button-secondary" onClick={clearTasks}>Очистить список</button>
                        <button className="button-secondary" onClick={clearCompletedTasks}>Очистить выполненные задачи</button>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
