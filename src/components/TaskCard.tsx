import { memo } from 'react';
import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = memo(function TaskCard({ task }: TaskCardProps) {
  return (
    <div className={`task-card task-card--${task.priority}`}>
      <div className="task-card__header">
        <h3>{task.title}</h3>
        <span className={`priority priority--${task.priority}`}>
          {task.priority}
        </span>
      </div>
      <p>{task.description}</p>
      <time>{new Date(task.createdAt).toLocaleDateString('ru-RU')}</time>
    </div>
  );
});