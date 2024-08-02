import { createSlice } from "@reduxjs/toolkit";

const AppliedSlice = createSlice({
    name : "applied",
    initialState : [],
    reducers : {
       appliedForm(state , action){
        state.push(action.payload)
       }
    }
})
export const {appliedForm} = AppliedSlice.actions
export default AppliedSlice.reducer