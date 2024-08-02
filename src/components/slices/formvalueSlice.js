import { createSlice } from "@reduxjs/toolkit";

const FormValueSlice = createSlice({
    name : "formvalue",
    initialState : [],
    reducers : {
       formValues(state , action){
        state.push(action.payload)
       },
       richTextValue(state , action){
        state.push(action.payload)
       },
    }
})
export const {formValues, richTextValue} = FormValueSlice.actions
export default FormValueSlice.reducer