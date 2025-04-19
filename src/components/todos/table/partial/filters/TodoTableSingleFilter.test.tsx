import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import TodoTableSingleFilter from "./TodoTableSingleFilter";
import {
  useAppDispatch,
  useAppSelector,
} from "@/src/state/redux-hooks/reduxHooks";
import { TaskStatusEnum } from "@/src/enum";
import { setFilter } from "@/src/state/shared/filters";

vi.mock("@/src/state/redux-hooks/reduxHooks", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

vi.mock("@/src/state/shared/filters", () => ({
  selectFilters: (state: any) => state.filters,
  setFilter: vi.fn(),
}));

describe("TodoTableSingleFilter", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useAppDispatch as Mock).mockReturnValue(mockDispatch);
  });

  it("renders filter with correct text", () => {
    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectFilters") {
        return { activeFilter: "ALL" };
      }
      return null;
    });

    render(<TodoTableSingleFilter filter={TaskStatusEnum.ACTIVE} />);

    expect(screen.getByText(TaskStatusEnum.ACTIVE)).toBeInTheDocument();
  });

  it("applies active style when filter matches activeFilter", () => {
    const activeFilter = TaskStatusEnum.ACTIVE;

    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectFilters") {
        return { activeFilter };
      }
      return null;
    });

    const { container } = render(
      <TodoTableSingleFilter filter={activeFilter} />
    );

    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-light-grey-transparent");
  });

  it("applies inactive style when filter does not match activeFilter", () => {
    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectFilters") {
        return { activeFilter: "ALL" };
      }
      return null;
    });

    const { container } = render(
      <TodoTableSingleFilter filter={TaskStatusEnum.ACTIVE} />
    );

    const button = screen.getByRole("button");
    expect(button.className).toContain("bg--transparent");
  });

  it("dispatches setFilter action when clicked", () => {
    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectFilters") {
        return { activeFilter: "ALL" };
      }
      return null;
    });

    render(<TodoTableSingleFilter filter={TaskStatusEnum.ACTIVE} />);

    fireEvent.click(screen.getByRole("button"));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(setFilter).toHaveBeenCalledWith(TaskStatusEnum.ACTIVE);
  });
});
