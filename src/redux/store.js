import { configureStore } from "@reduxjs/toolkit";
import mainPageSlice from './slice'


const store = configureStore({
    reducer: {
        mainpage: mainPageSlice
    }
}
)

export default store 