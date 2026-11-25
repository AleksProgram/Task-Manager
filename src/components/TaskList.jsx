import TaskItem from "./TaskItem";

function TaskList({tasks, deleteTask, toggleTask, filteredTasks}) {

    if (!tasks || tasks.length === 0) {
        return <p>No tasks yet</p>
    }

    if (tasks.length > 0 && filteredTasks.length === 0) {
        return <p>No tasks according to filter</p>;
    }

    return (
        <>
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
            ))}
        </>
    )
}

export default TaskList;