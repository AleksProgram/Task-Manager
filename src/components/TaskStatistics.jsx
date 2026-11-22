function TaskStatistics({tasks}) {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <>
            <p>Total tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
        </>
    )
}

export default TaskStatistics;