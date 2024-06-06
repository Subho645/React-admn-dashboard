// Kanban.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, Typography } from '@mui/material';
import './kantabstyle.css'; // Import CSS file
const initialTasks = [
  { id: '1', content: 'Order new brake pads' },
  { id: '2', content: 'Stock check for oil filters' },
  { id: '3', content: 'Prepare shipment for air filters' },
  { id: '4', content: 'Schedule meeting with supplier D' },
  { id: '5', content: 'Review pricing for windshield wipers' },
];

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    setTasks(reorderedTasks);
  };

  return (
    <Paper elevation={3} className="paper-container">
      <Typography variant="h5" gutterBottom>
        To Do List
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul
              className="kanban-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      className={`kanban-item ${
                        snapshot.isDragging ? 'dragging' : ''
                      }`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Paper>
  );
};

export default Kanban;