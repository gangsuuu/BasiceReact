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
      state.push(action.payload)
      // state.push({
      //   name : action.payload.name,
      //   id : action.payload.id,
      //   count : action.payload.count,
      // })
      console.log(state[2].count)
    }
  }
})

export let { addCount, addCart } = items.actions


export default configureStore({
  reducer: { 
    items : items.reducer,
    user : user.reducer,
  }
}) 