import type { TodoFilter } from "../../types/todo";
import { TODO_FILTERS } from "../../constants/todo";
import "./style.css";

interface TodoFiltersProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

export const TodoFilters = ({
  currentFilter,
  onFilterChange,
}: TodoFiltersProps) => {
  return (
    <div className="todo-filters">
      {TODO_FILTERS.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`filter-button ${
            currentFilter === filter.value ? "active" : ""
          }`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
