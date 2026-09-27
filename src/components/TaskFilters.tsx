import type { FilterValue } from '../types';
interface TaskFiltersProps {
  filter: FilterValue;
  onChange: (filter: FilterValue) => void;
}

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'high', label: 'Высокий' },
  { value: 'medium', label: 'Средний' },
  { value: 'low', label: 'Низкий' },
];

export function TaskFilters({ filter, onChange }: TaskFiltersProps) {
  return (
    <div className="filters">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          className={filter === value ? 'active' : ''}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}