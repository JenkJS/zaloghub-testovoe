import type { ITodo, TodoFilter } from "../types/todo";
import { useLocalStorage } from "./useLocalStorage";
import { TODOS_STORAGE_KEY } from "../constants/todo";
import { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>(TODOS_STORAGE_KEY, []);
  const [filter, setFilter] = useState<TodoFilter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const addTodo = (value: string) => {
    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      title: value,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    filter,
    setFilter,
    filteredTodos,
  };
};
