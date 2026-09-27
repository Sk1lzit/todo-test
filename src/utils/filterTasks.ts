import type { Task, FilterValue } from '../types';
// Чистая функция — легко тестировать
// TODO: добавить сортировку по дате, если понадобится
export function filterTasks(tasks: Task[], filter: FilterValue): Task[] {
  if (filter === 'all') return tasks;
  return tasks.filter(task => task.priority === filter);
}