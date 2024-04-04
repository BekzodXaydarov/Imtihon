import { configureStore } from '@reduxjs/toolkit'
import Redux from './redux'

export default configureStore({
  reducer: {
    Redux: Redux
  }
})