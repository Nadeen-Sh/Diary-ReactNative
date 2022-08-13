import { createSlice } from '@reduxjs/toolkit'
let today = new Date();
let curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

let nextmoodId = 0;
const InputmoodsSlice = createSlice({
  name: 'moods',
  initialState: [{"id": 0,date:"2022-8-5", "text": "Fraiday , I'm happy "}],
  reducers: {
    addMood(state, action) {
      state.push({ id: nextmoodId++, date: date, text: action.payload})
    }
  }
})

export const { addMood } = InputmoodsSlice.actions

export default InputmoodsSlice.reducer