import { configureStore } from '@reduxjs/toolkit'
import genTaskReducer from './features/task/taskSlice'
import impTaskReducer from './features/task/impTaskSlice'

export const store = configureStore({
  reducer: {
    impTasks : impTaskReducer,
    genTasks : genTaskReducer,
  },
})