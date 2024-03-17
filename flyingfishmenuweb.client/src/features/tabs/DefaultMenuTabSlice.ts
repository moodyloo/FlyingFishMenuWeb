import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store.ts'

// Define a type for the slice state
interface DefaultMenuTabState {
    value: number
}

// Define the initial state using that type
const initialState: DefaultMenuTabState = {
    value: 1
}

export const defaultMenuTabSlice = createSlice({
  name: 'defaultMenuTab',
  initialState,
  reducers: {
      setDefaultMenuTab: (state, action: PayloadAction<number>) => {
          state.value = action.payload;
      }
  },
})

export const selectDefaultMenuTab = (state: RootState) => state.defaultMenuTab.value
export default defaultMenuTabSlice.reducer