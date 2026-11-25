function TaskItem({task, deleteTask, toggleTask}) {
    return (
        <div>
            <p>Name: {task.title}</p>
            <p>
                Status: <span className={`task-status ${task.completed ? "status-completed" : "status-pending"}`}>
                    {task.completed ? "Completed" : "Not Completed"}
                </span>
            </p>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
            <button className="status-toggle" onClick={() => toggleTask(task.id)}>Change Status</button>
        </div>
    )
}

export default TaskItem;
