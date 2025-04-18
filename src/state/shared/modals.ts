import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Nullable } from "@/src/interfaces";
import { State as AppState } from "@/src/state/store";
import { ModalEnum } from "@/src/enum";

type State = {
  modal: Nullable<ModalEnum>;
};

const initialState: State = {
  modal: null,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    initializeModal: () => initialState,
    setModal: (state, action: PayloadAction<ModalEnum>) => {
      state.modal = action.payload;
    },
    removeModal: (state) => {
      state.modal = null;
    },
  },
});

export const { initializeModal, setModal, removeModal } = modalSlice.actions;

export default modalSlice.reducer;

export const selectModal = (state: AppState) => state.modals;
