import { render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import TodoTable from "./TodoTable";
import { useAppSelector } from "@/src/state/redux-hooks/reduxHooks";
import { TaskStatusEnum } from "@/src/enum";
import { ITodo } from "@/src/interfaces";

vi.mock("@/src/state/redux-hooks/reduxHooks", () => ({
  useAppSelector: vi.fn(),
}));

vi.mock("./partial/TodoTableHeading", () => ({
  default: () => <div data-testid="todo-table-header">Table Header</div>,
}));

vi.mock("./partial/TodoTableRow", () => ({
  default: ({ todo }: { todo: ITodo }) => (
    <div data-testid={`todo-row-${todo.id}`}>
      {todo.name} - {todo.status}
    </div>
  ),
}));

describe("TodoTable", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all todos when filter is ALL", () => {
    const mockTodos = [
      {
        id: "1",
        name: "Book 1",
        status: TaskStatusEnum.ACTIVE,
        dueDate: new Date(),
      },
      {
        id: "2",
        name: "Book 2",
        status: TaskStatusEnum.COMPLETED,
        dueDate: new Date(),
      },
    ];

    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectTodos") {
        return { todos: mockTodos };
      }
      if (selector.name === "selectFilters") {
        return { activeFilter: "ALL" };
      }
      return null;
    });

    render(<TodoTable />);

    expect(screen.getByTestId("todo-table-header")).toBeInTheDocument();

    mockTodos.forEach((todo) => {
      expect(screen.getByTestId(`todo-row-${todo.id}`)).toBeInTheDocument();
      expect(
        screen.getByText(`${todo.name} - ${todo.status}`)
      ).toBeInTheDocument();
    });
  });

  it("filters todos based on status", () => {
    const mockTodos = [
      {
        id: "1",
        name: "Book 1",
        status: TaskStatusEnum.ACTIVE,
        dueDate: new Date(),
      },
      {
        id: "2",
        name: "Book 2",
        status: TaskStatusEnum.COMPLETED,
        dueDate: new Date(),
      },
      {
        id: "3",
        name: "Book 3",
        status: TaskStatusEnum.ACTIVE,
        dueDate: new Date(),
      },
    ];

    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectTodos") {
        return { todos: mockTodos };
      }
      if (selector.name === "selectFilters") {
        return { activeFilter: TaskStatusEnum.ACTIVE };
      }
      return null;
    });

    render(<TodoTable />);

    expect(screen.getByTestId("todo-row-1")).toBeInTheDocument();
    expect(screen.getByTestId("todo-row-3")).toBeInTheDocument();
    expect(screen.queryByTestId("todo-row-2")).not.toBeInTheDocument();
  });

  it("renders an empty table when no todos match the filter", () => {
    const mockTodos = [
      {
        id: "1",
        name: "Book 1",
        status: TaskStatusEnum.ACTIVE,
        dueDate: new Date(),
      },
      {
        id: "2",
        name: "Book 3",
        status: TaskStatusEnum.ACTIVE,
        dueDate: new Date(),
      },
    ];

    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectTodos") {
        return { todos: mockTodos };
      }
      if (selector.name === "selectFilters") {
        return { activeFilter: TaskStatusEnum.COMPLETED };
      }
      return null;
    });

    render(<TodoTable />);

    expect(screen.queryByTestId(/^todo-row-/)).not.toBeInTheDocument();
  });
});
