import { type ChangeEvent, type SyntheticEvent } from "react";
import "./style.css";
import { TODO_DRAFT_STORAGE_KEY, TODO_TEXT } from "../../constants/todo";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [inputValue, setInputValue] = useLocalStorage<string>(
    TODO_DRAFT_STORAGE_KEY,
    "",
  );
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputValue.trim();

    if (!value) return;

    onAdd(value);
    setInputValue("");
  };

  return (
    <div className="container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder={TODO_TEXT.inputPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn" disabled={!inputValue.trim()}>
          {TODO_TEXT.addButton}
        </button>
      </form>
    </div>
  );
};
