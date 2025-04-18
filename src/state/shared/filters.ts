import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Nullable } from "@/src/interfaces";
import { State as AppState } from "@/src/state/store";
import { TaskStatusEnum } from "@/src/enum";

export type FilterType = "ALL" | TaskStatusEnum;

type State = {
  filters: FilterType[];
  activeFilter: FilterType;
};

const initialState: State = {
  filters: ["ALL", TaskStatusEnum.ACTIVE, TaskStatusEnum.COMPLETED],
  activeFilter: "ALL",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    initializeFilters: () => initialState,

    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { initializeFilters, setFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilters = (state: AppState) => state.filters;
