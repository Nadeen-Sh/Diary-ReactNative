import { configureStore } from '@reduxjs/toolkit'
import MoodSlice from './InputMoodSlice.js'
import EmojiSlice from "./MoodSlice.js"


export default configureStore({
  reducer: {
  moods: MoodSlice,
  emojis: EmojiSlice 
  }
})
