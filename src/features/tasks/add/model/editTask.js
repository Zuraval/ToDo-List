export const editTask = (index, newTaskText, tasks, setTasks) => {
    if (!newTaskText.trim()) return;
    const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: newTaskText } : task
    );
    setTasks(updatedTasks);
  };