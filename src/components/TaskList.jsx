import TaskItem from "./TaskItem";

function TaskList({tasks, deleteTask, toggleTask, filteredTasks}) {

    if (!tasks || tasks.length === 0) {
        return <p>Задач пока нет</p>
    }

    if (tasks.length > 0 && filteredTasks.length === 0) {
        return <p>Нет задач, соответствующих выбранному фильтру</p>;
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