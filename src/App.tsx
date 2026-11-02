import "./App.css";
import { TodoFilters } from "./components/TodoFilters/TodoFilters";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { TODO_TEXT } from "./constants/todo";
import { useTodos } from "./hooks/useTodos";

export const App = () => {
  const { addTodo, removeTodo, toggleTodo, filter, setFilter, filteredTodos } =
    useTodos();

  return (
    <main className="app">
      <section className="todo-card">
        <header className="header">
          <p className="eyebrow">{TODO_TEXT.eyebrow}</p>
          <h1>{TODO_TEXT.title}</h1>
          <TodoForm onAdd={addTodo} />
          <TodoFilters currentFilter={filter} onFilterChange={setFilter} />
        </header>
        <TodoList
          todos={filteredTodos}
          onRemove={removeTodo}
          onToggle={toggleTodo}
        />
      </section>
    </main>
  );
};
