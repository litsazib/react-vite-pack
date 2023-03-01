import {createSlice} from "@reduxjs/toolkit";
export const summarySlice=createSlice({
    name:'summary',
    initialState:{
        value:[],
        allUsersData:[]
    },
    reducers:{
        SetSummary:(state,action)=>{
            state.value=action.payload
        },
        GetAllUser:(state,action)=>{
            state.allUsersData=action.payload
        }
    }
})
export  const {SetSummary,GetAllUser}=summarySlice.actions;
export default  summarySlice.reducer;
