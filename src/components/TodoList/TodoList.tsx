import type { ITodo } from "../../types/todo";
import { TODO_TEXT } from "../../constants/todo";
import { TodoItem } from "../TodoItem/TodoItem";
import "./style.css";

interface TodoListProps {
  todos: ITodo[];
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
  if (!todos.length) {
    return <p className="todo-list-empty">{TODO_TEXT.emptyList}</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};
