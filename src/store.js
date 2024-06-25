import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'



let items = createSlice({
  name: 'items',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state,action) {

      let count = state.find(value => value.id === action.payload)
      count.count += 1
    },
    addCart (state,action) {
      let checkRepaet = state.find(value => value.id === action.payload.id)

        if(!checkRepaet) {
          state.push(action.payload)
        } else {
          checkRepaet.count = Number(action.payload.count) + Number(checkRepaet.count)
        }
    },
    removeCart (state, action){

      const newState =  state.filter((item) => item.id !== action.payload)

      return newState
    }
  }
})

export let { addCount, addCart, removeCart } = items.actions


export default configureStore({
  reducer: { 
    items : items.reducer,
    user : user.reducer,
  }
})
