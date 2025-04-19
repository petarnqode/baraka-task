import { render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import TodoTableFilters from "./TodoTableFilters";
import { useAppSelector } from "@/src/state/redux-hooks/reduxHooks";
import { TaskStatusEnum } from "@/src/enum";

vi.mock("@/src/state/redux-hooks/reduxHooks", () => ({
  useAppSelector: vi.fn(),
}));

vi.mock("./TodoTableSingleFilter", () => ({
  default: ({ filter }: { filter: string }) => (
    <div data-testid={`filter-${filter}`}>{filter}</div>
  ),
}));

describe("TodoTableFilters", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all filter options", () => {
    const mockFilters = [
      "ALL",
      TaskStatusEnum.ACTIVE,
      TaskStatusEnum.COMPLETED,
    ];

    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectFilters") {
        return { filters: mockFilters };
      }
      return null;
    });

    render(<TodoTableFilters />);

    mockFilters.forEach((filter) => {
      expect(screen.getByTestId(`filter-${filter}`)).toBeInTheDocument();
      expect(screen.getByText(filter)).toBeInTheDocument();
    });
  });

  it("renders no filters when filters array is empty", () => {
    (useAppSelector as Mock).mockImplementation((selector) => {
      if (selector.name === "selectFilters") {
        return { filters: [] };
      }
      return null;
    });

    render(<TodoTableFilters />);

    expect(screen.queryByTestId(/^filter-/)).not.toBeInTheDocument();
  });
});
