import type { Task, FilterValue } from '../types';

export function filterTasks(tasks: Task[], filter: FilterValue): Task[] {
  if (filter === 'all') return tasks;
  return tasks.filter(task => task.priority === filter);
}