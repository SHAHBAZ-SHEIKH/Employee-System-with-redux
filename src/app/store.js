import { configureStore } from "@reduxjs/toolkit";
import UserDetailsSlice  from "../features/UserDetailsSlice";

const store = configureStore({
    reducer: {
        userDetails: UserDetailsSlice
    },
});

export default store