export const addTask = (taskInput, tasks, setTasks) => {
    if (!taskInput.trim()) return;
    const newTask = { text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
  };