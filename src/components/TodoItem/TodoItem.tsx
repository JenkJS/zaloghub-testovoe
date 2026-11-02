import type { ITodo } from "../../types/todo";
import { TODO_TEXT } from "../../constants/todo";
import "./style.css";

interface TodoItemProps {
  todo: ITodo;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TodoItem = ({ todo, onRemove, onToggle }: TodoItemProps) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`${TODO_TEXT.toggleAriaLabel}: «${todo.title}»`}
      />

      <span className="todo-title">{todo.title}</span>
      <button
        className="delete-button"
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label={`${TODO_TEXT.deleteAriaLabel}: «${todo.title}»`}
      >
        {TODO_TEXT.deleteButton}
      </button>
    </li>
  );
};
