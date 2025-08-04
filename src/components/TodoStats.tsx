import { Card } from '@/components/ui/card';
import { CheckCircle, Circle, BarChart3 } from 'lucide-react';

interface TodoStatsProps {
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export const TodoStats = ({ stats }: TodoStatsProps) => {
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <Card className="p-4 bg-todo-surface/80 backdrop-blur-sm border-border/50 hover:bg-todo-surface-hover transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Tasks</p>
            <p className="text-2xl font-bold text-foreground">{stats.total}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-todo-surface/80 backdrop-blur-sm border-border/50 hover:bg-todo-surface-hover transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-todo-warning/10 rounded-lg">
            <Circle className="w-5 h-5 text-todo-warning" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-2xl font-bold text-foreground">{stats.active}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-todo-surface/80 backdrop-blur-sm border-border/50 hover:bg-todo-surface-hover transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-todo-success/10 rounded-lg">
            <CheckCircle className="w-5 h-5 text-todo-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};