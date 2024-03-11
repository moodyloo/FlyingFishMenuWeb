import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CountryISO {
    value: string
}

// Define the initial state using that type
const initialState: CountryISO = {
    value: "GBR"
}

export const countryISOSlice = createSlice({
  name: 'countryISO',
  initialState,
  reducers: {
      setCountryISO: (state, action: PayloadAction<string>) => {
          state.value = action.payload;
      }
  },
})

export const setCountryISO = (state: RootState) => state.countryISO.value
export default countryISOSlice.reducer