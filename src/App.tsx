import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskList } from './components/TaskList';
import { TaskFilters } from './components/TaskFilters';
import { CreateTaskModal } from './components/CreateTaskModal';
import { Button } from './components/ui/Button';
import './App.css';

function App() {
  const { tasks, filter, setFilter, addTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Мои задачи</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Новая задача</Button>
      </header>

      <TaskFilters filter={filter} onChange={setFilter} />

      <TaskList tasks={tasks} />

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={addTask}
      />
    </div>
  );
}

export default App;