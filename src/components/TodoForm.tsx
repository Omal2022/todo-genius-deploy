import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-todo-surface border-border/50 focus:border-primary h-12 pl-4 pr-4 text-foreground placeholder:text-muted-foreground rounded-xl backdrop-blur-sm"
        />
      </div>
      <Button 
        type="submit"
        className="h-12 px-6 bg-gradient-to-r from-todo-gradient-from to-todo-gradient-to hover:opacity-90 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-todo-shadow/25"
      >
        <Plus className="w-5 h-5" />
      </Button>
    </form>
  );
};