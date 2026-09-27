import { memo } from 'react';
import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
}

// memo, чтобы карточка не кендер, если пропсы не изменились
// (важно, когда задач станет много)
export const TaskCard = memo(function TaskCard({ task }: TaskCardProps) {
  // Формат даты, вручную, чтобы не тащить date-fns
  const date = new Date(task.createdAt).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className={`task-card task-card--${task.priority}`}>
      <div className="task-card__header">
        <h3>{task.title}</h3>
        <span className={`priority priority--${task.priority}`}>
          {task.priority}
        </span>
      </div>
      <p>{task.description}</p>
      <time>{date}</time>
    </div>
  );
});