import { useTodos } from '@/hooks/useTodos';
import { TodoForm } from '@/components/TodoForm';
import { TodoItem } from '@/components/TodoItem';
import { TodoFilters } from '@/components/TodoFilters';
import { TodoStats } from '@/components/TodoStats';
import { CheckSquare } from 'lucide-react';

const Index = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    stats
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-todo-gradient-from to-todo-gradient-to rounded-xl shadow-lg">
              <CheckSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-todo-gradient-from to-todo-gradient-to bg-clip-text text-transparent">
              Todo Genius
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Organize your tasks with style and efficiency
          </p>
        </div>

        {/* Stats */}
        <TodoStats stats={stats} />

        {/* Add Todo Form */}
        <TodoForm onAddTodo={addTodo} />

        {/* Filters */}
        <TodoFilters
          filter={filter}
          onFilterChange={setFilter}
          stats={stats}
          onClearCompleted={clearCompleted}
        />

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="p-6 bg-todo-surface/50 backdrop-blur-sm rounded-2xl border border-border/30 inline-block">
                <CheckSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  {filter === 'active' && 'No active tasks! Time to relax 🎉'}
                  {filter === 'completed' && 'No completed tasks yet. Get started!'}
                  {filter === 'all' && 'No tasks yet. Add your first task above!'}
                </p>
              </div>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
