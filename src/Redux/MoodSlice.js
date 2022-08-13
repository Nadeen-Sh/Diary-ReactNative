import { createSlice } from '@reduxjs/toolkit'
let today = new Date();
// let curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let idEmoji= 0;

const moodsSlice = createSlice({

  name: 'emojis',
  initialState: [{"id": 0, date:"2022-8-5" , "emoji": 10,"title": "smile"}],
  reducers: {
    addEmoji(state, action) {
        state.push({ id: idEmoji++, date: date, emoji: action.payload.photo, title: action.payload.title})
    }
  }
})

export const { addEmoji } = moodsSlice.actions

export default moodsSlice.reducer