import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../components/features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
