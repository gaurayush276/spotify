import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import musicSlice from "./musicSlice";

 const appStore = configureStore( {
    reducer:{
        sidebar : sidebarSlice ,
        musicContainer: musicSlice ,
    }
 })
 export default appStore  ;