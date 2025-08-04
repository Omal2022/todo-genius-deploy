import { useState, useEffect } from 'react';
import { Todo, FilterType } from '@/types/todo';

const STORAGE_KEY = 'todos';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error('Error parsing saved todos:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    stats
  };
};