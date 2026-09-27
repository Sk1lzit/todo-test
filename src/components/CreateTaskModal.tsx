import { useState, FormEvent } from 'react';
import { Modal } from './ui/Modal';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import type { Priority } from '../types';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: { title: string; description: string; priority: Priority }) => void;
}

export function CreateTaskModal({ isOpen, onClose, onCreate }: CreateTaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
     // Валид на клиенте. На бэке нужна, но его нет
    if (title.trim().length < 3) {
      setError('Заголовок должен быть минимум 3 символа');
      return;
    }
    onCreate({ title: title.trim(), description: description.trim(), priority });
      // Сброс формы, чтобы при повт откр было пусто
    setTitle('');
    setDescription('');
    setPriority('medium');
    setError('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Новая задача">
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          label="Заголовок"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Введите заголовок"
          autoFocus
        />
        {error && <p className="error">{error}</p>}
        <Input
          id="description"
          label="Описание"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Введите описание"
        />
        <Select
          id="priority"
          label="Приоритет"
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
        >
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </Select>
        <div className="modal-actions">
          <Button type="button" variant="secondary" onClick={onClose}>
            Отмена
          </Button>
          <Button type="submit">Создать</Button>
        </div>
      </form>
    </Modal>
  );
}