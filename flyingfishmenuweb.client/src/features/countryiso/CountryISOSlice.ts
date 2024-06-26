import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const { setCountryISO } = countryISOSlice.actions;
export default countryISOSlice.reducer