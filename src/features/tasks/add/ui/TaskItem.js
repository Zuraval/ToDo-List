import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, TextField, Box, Checkbox } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

export const TaskItem = ({ task, index, tasks, setTasks, onDelete, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text || '');

  const handleSave = () => {
        if (editedTask.trim()) {
            onEdit(index, editedTask);
            setIsEditing(false);
        } else {
            alert('Текст задачи не может быть пустым!');
        }
  };

  return (
    <ListItem divider>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>

        <Checkbox
          checked={task.completed}
          onChange={() => onToggle(index)}
          color="primary"
          sx={{ marginRight: 2 }}
        />

        {isEditing ? (
          <TextField
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            fullWidth
            size="small"
          />
        ) : (
          <ListItemText
            primary={task.text || 'Нет текста'}
            sx={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          />
        )}

        <Box>
          {isEditing ? (
            <IconButton onClick={handleSave} color="primary">
              <Save />
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsEditing(true)} color="primary">
              <Edit />
            </IconButton>
          )}
          <IconButton onClick={() => onDelete(index)} color="error">
            <Delete />
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  );
};