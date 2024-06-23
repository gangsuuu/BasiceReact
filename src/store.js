import { configureStore, createSlice } from '@reduxjs/toolkit'



let user = createSlice({
  name: 'user',
  initialState: "kim"
})

let items = createSlice({
  name: 'items',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})


export default configureStore({
  reducer: { 
    user : user.reducer,
    items : items.reducer,
  }
}) 