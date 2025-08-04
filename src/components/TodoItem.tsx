import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Todo } from '@/types/todo';
import { Trash2, Edit3, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={cn(
      "group bg-todo-surface/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 transition-all duration-200 hover:bg-todo-surface-hover hover:border-border/80 hover:shadow-md",
      todo.completed && "opacity-75"
    )}>
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="data-[state=checked]:bg-todo-success data-[state=checked]:border-todo-success"
        />
        
        {isEditing ? (
          <div className="flex-1 flex items-center gap-2">
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-background/50 border-border/50 focus:border-primary"
              autoFocus
            />
            <Button
              size="sm"
              onClick={handleEdit}
              className="h-8 w-8 p-0 bg-todo-success hover:bg-todo-success/80"
            >
              <Check className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancel}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <>
            <span className={cn(
              "flex-1 text-foreground transition-all duration-200",
              todo.completed && "line-through text-muted-foreground"
            )}>
              {todo.text}
            </span>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsEditing(true)}
                className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onDelete(todo.id)}
                className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};