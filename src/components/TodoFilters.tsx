import { Button } from '@/components/ui/button';
import { FilterType } from '@/types/todo';
import { cn } from '@/lib/utils';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' }
];

export const TodoFilters = ({ filter, onFilterChange, stats, onClearCompleted }: TodoFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4">
      <div className="flex items-center gap-2">
        {filters.map((f) => (
          <Button
            key={f.key}
            variant={filter === f.key ? "default" : "ghost"}
            size="sm"
            onClick={() => onFilterChange(f.key)}
            className={cn(
              "transition-all duration-200",
              filter === f.key 
                ? "bg-gradient-to-r from-todo-gradient-from to-todo-gradient-to text-white shadow-md"
                : "hover:bg-todo-surface-hover"
            )}
          >
            {f.label}
          </Button>
        ))}
      </div>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>{stats.active} active</span>
        {stats.completed > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearCompleted}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            Clear completed ({stats.completed})
          </Button>
        )}
      </div>
    </div>
  );
};