import { useState, useMemo, useCallback } from 'react';
import type { Task, FilterValue } from '../types';
import { mockTasks } from '../data/mockTasks';
import { filterTasks } from '../utils/filterTasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [filter, setFilter] = useState<FilterValue>('all');

  // useMemo, чтобы не пересчит фильтр на каждом рендере
  // При 5 задачах разницы нет, но при больш кол уже заметно

  const filteredTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter]
  );

 // useCallback, чтобы addTask не созд заново
  // (важно, если потом передавать её в memo-компоненты)

  const addTask = useCallback(
    (data: Omit<Task, 'id' | 'createdAt'>) => {
      const newTask: Task = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };
      // Новые задачи — в начало списка
      setTasks(prev => [newTask, ...prev]);
    },
    []
  );

  return { tasks: filteredTasks, filter, setFilter, addTask };
}