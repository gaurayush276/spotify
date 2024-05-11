import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
    name : "musicSlice" , 
    initialState : {
        toptracks : null ,
    } ,
    reducers :{
        addmusic : ( state , action ) =>{
            state.toptracks = action.payload ; 
        }
    }
})

export default musicSlice.reducer ;
export const { addmusic } = musicSlice.actions ; 