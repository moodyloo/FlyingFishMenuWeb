import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { MenuCategoryEnum } from '../../model/MenuModel'

// Define a type for the slice state
interface DefaultMenuTabState {
    value: string
}

// Define the initial state using that type
const initialState: DefaultMenuTabState = {
    value: MenuCategoryEnum.FishAndChips
}

export const defaultMenuTabSlice = createSlice({
  name: 'defaultMenuTab',
  initialState,
  reducers: {
      setDefaultMenuTab: (state, action: PayloadAction<string>) => {
          state.value = action.payload;
      }
  },
})

export const selectDefaultMenuTab = (state: RootState) => state.defaultMenuTab.value
export default defaultMenuTabSlice.reducer