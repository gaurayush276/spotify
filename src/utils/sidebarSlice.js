import { createSlice } from "@reduxjs/toolkit";
import { SiSlides } from "react-icons/si";

const sidebarSlice = createSlice( {
    name : 'sidebar' , 
    initialState : {
        isOpen : true , 
    } ,
    reducers:{
        toggleSideBar :(state ) =>{
            state.isOpen = ! state.isOpen ; 
        }
    }
})

export default sidebarSlice.reducer ; 
export const { toggleSideBar} = sidebarSlice.actions ;