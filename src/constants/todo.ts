import type { TodoFilter } from "../types/todo";

export const TODOS_STORAGE_KEY = "zaloghub-todos";
export const TODO_DRAFT_STORAGE_KEY = "zaloghub-todo-draft";

export const TODO_TEXT = {
  eyebrow: "План на сегодня",
  title: "Мои задачи",
  inputPlaceholder: "Введите задачу",
  addButton: "Создать",
  deleteButton: "Удалить",
  emptyList: "Список задач пуст",
  toggleAriaLabel: "Отметить задачу выполненной",
  deleteAriaLabel: "Удалить задачу",
} as const;

export const TODO_FILTERS: ReadonlyArray<{
  value: TodoFilter;
  label: string;
}> = [
  { value: "all", label: "Все" },
  { value: "active", label: "Активные" },
  { value: "completed", label: "Выполненные" },
];
