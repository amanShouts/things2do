import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  impTask: [],
}

export const counterSlice = createSlice({
  name: 'impTask',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.impTask += 1
      console.log(action, " payload", action.payload)
      state.impTask.push(action.payload)
    },
    removeTask: (state, action) => {
      const deleteId = action.payload
      console.log(deleteId, " deletid")
      state.impTask = state.impTask.filter((elem) => {
        return elem.id === deleteId ? false : true;
      })
    },
    slashTask: (state, action) => {
      state.impTask = state.impTask.map((elem) => (
        elem.id === action.payload ? {...elem, done : true} : {...elem}
      ))
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask, slashTask } = counterSlice.actions

export default counterSlice.reducer