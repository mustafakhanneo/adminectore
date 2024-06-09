import { createSlice } from "@reduxjs/toolkit"

const initialState: any = [{
    name: 'mustafa'
},{
    name: 'khan'
}]
const userSlice = createSlice(
{
    name: "user",
    initialState,
    reducers: {
    currentUser:((state, action)=>{

    })
    }
}
);

export const { currentUser } =
  userSlice.actions;
export default userSlice.reducer;