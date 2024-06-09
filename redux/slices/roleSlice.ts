import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: string = 'user'
const  roleSlice = createSlice(
{
    name: "role",
    initialState,
    reducers: {
    changeRole:((state, action: PayloadAction<string>)=>{
        return action.payload;
    })
    }
}
);

export const { changeRole } =
 roleSlice.actions;
export default roleSlice.reducer;