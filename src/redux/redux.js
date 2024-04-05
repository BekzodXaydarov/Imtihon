import { createSlice } from '@reduxjs/toolkit'


export const Reudx = createSlice({
  name: 'language',
  initialState: {
    value: localStorage.getItem('language') ? localStorage.getItem('language') : "uz"
  },
  reducers: {
    setLanguage(state,action){
      localStorage.setItem("language",state.value)
      state.value = action.payload
    },

  }
})

export const {setLanguage } = Reudx.actions

export default Reudx.reducer