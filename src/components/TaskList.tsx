import type { Task } from '../types';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  // Пустое сост, лучш чем пустой экран
  if (tasks.length === 0) {
    return <p className="empty">Задач нет</p>;
  }

  return (
    <div className="task-list">
      {/* key={task.id}  обязател, иначе React будет кричать */}
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}