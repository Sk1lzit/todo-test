import { useState, useMemo, useCallback } from 'react';
import type { Task, FilterValue } from '../types';
import { mockTasks } from '../data/mockTasks';
import { filterTasks } from '../utils/filterTasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [filter, setFilter] = useState<FilterValue>('all');

  const filteredTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter]
  );

  const addTask = useCallback(
    (data: Omit<Task, 'id' | 'createdAt'>) => {
      const newTask: Task = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };
      setTasks(prev => [newTask, ...prev]);
    },
    []
  );

  return { tasks: filteredTasks, filter, setFilter, addTask };
}