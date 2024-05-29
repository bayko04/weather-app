import { configureStore } from "@reduxjs/toolkit"
import weatherReducer from "./reducers/weatherSlice"

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export default store
