export const deleteTask = (index, tasks, setTasks) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
};