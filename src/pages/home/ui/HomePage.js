'use client';
import { useState } from 'react';
import { Grid2, Button, TextField, List, ListItem, ListItemText, Checkbox } from "@mui/material";
import { addTask, deleteTask, editTask, toggleTaskCompletion } from '@/features/tasks/add';
import { TaskItem } from '@/features/tasks/add/ui/TaskItem';


export default function HomePage() {

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length > 50) {
          setError('Текст не может содержать более 50 символов.');
        } else {
          setError('');
          setTaskInput(value);
        }
    };

    const handleAddTask = () => {
        addTask(taskInput, tasks, setTasks);
        setTaskInput('');
    };

    const handleDeleteTask = (index) => {
        deleteTask(index, tasks, setTasks);
    };
    
      const handleEditTask = (index, newTaskText) => {
        editTask(index, newTaskText, tasks, setTasks);
    };

    const handleToggleTaskCompletion = (index) => {
        toggleTaskCompletion(index, tasks, setTasks);
    };

    return(
        <Grid2 container spacing={2} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <h1>Tasks</h1>
            <Grid2 container spacing={2} display={'flex'} justifyContent={'center'} size={8}>
                <Grid2 size={6}>
                    <TextField
                        id="outlined-basic"
                        label="Todo"
                        variant="outlined"
                        fullWidth
                        value={taskInput}
                        onChange={handleInputChange}
                        error={!!error}
                        helperText={error}
                    />
                </Grid2>
                <Grid2 sx={{ alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', display: 'flex' }}>
                    <Button
                        variant="contained"
                        sx={{height: '54px'}}
                        fullWidth
                        onClick={handleAddTask}
                        disabled={!taskInput.trim()}
                    >
                        Add
                    </Button>
                </Grid2>
            </Grid2>
            <List>
                {tasks.map((task, index) => (
                    <TaskItem
                      key={index}
                      task={task}
                      index={index}
                      tasks={tasks}
                      setTasks={setTasks}
                      onDelete={handleDeleteTask}
                      onEdit={handleEditTask}
                      onToggle={handleToggleTaskCompletion}
                    />
                ))}
            </List>
        </Grid2>
    );
}