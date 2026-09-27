import type { Task } from '../types';

// Моковые данные. 

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Сделать тестовое задание',
    description: 'Страница задач с фильтром и модалкой',
    priority: 'high',
    createdAt: new Date('2026-09-25'),
  },
  {
    id: '2',
    title: 'Изучить Next.js 16',
    description: 'App Router, Server Components',
    priority: 'medium',
    createdAt: new Date('2026-09-24'),
  },
  {
    id: '3',
    title: 'Починить баг в боте',
    description: 'Ошибка при обработке инвайтов',
    priority: 'high',
    createdAt: new Date('2026-09-23'),
  },
  {
    id: '4',
    title: 'Написать README',
    description: 'Документация для портфолио',
    priority: 'low',
    createdAt: new Date('2026-09-22'),
  },
  {
    id: '5',
    title: 'Обновить резюме',
    description: 'Добавить новые проекты',
    priority: 'medium',
    createdAt: new Date('2026-09-21'),
  },
];