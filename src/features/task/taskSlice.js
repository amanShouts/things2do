import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genTask: [],
}

export const counterSlice = createSlice({
  name: 'genTask',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.impTask += 1
      console.log(action, " payload", action.payload)
      state.genTask.push(action.payload)
    },
    removeTask: (state, action) => {
      const deleteId = action.payload
      console.log(deleteId, " deletid")
      console.log(state, " befireee deleteeee")
      state.genTask = state.genTask.filter((elem) => {
        return elem.id === deleteId ? false : true;
      })
      console.log(state, " after deleteeee")
    },
    slashTask: (state, action) => {
      state.genTask = state.genTask.map((elem) => (
        elem.id === action.payload ? {...elem, done : true} : {...elem}
      ))
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask, slashTask } = counterSlice.actions

export default counterSlice.reducer