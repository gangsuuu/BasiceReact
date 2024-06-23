import { createSlice } from "@reduxjs/toolkit"


let user = createSlice({
    name: 'user',
    initialState: { 
      name : 'kim',
       age : 20
      },
      reducers : {
       changeName(state){
        // return { name : 'park', age : 20}
        // state.name = 'park'
      },
      addAge(state,value){
        state.age += Number(value.payload)
      }
    }
  })

export let { changeName, addAge } = user.actions

export default user