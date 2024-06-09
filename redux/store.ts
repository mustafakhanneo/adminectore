import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import roleSlice from "./slices/roleSlice";


const rootReducer = combineReducers({
    user: userSlice,
    role: roleSlice,
    // Add other reducers here
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  const store = configureStore({
    reducer: rootReducer,
  });

export default store