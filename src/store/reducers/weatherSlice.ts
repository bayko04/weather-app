import { createSlice } from "@reduxjs/toolkit"
import WeatherService from "../../services/WeatherService"

export interface IWeather {
    darkMode: boolean
    data: any
    error: string
    fahrenheit: boolean
    isLoading: boolean
    myLocation: { lat: number; lon: number }
    burger: boolean
}

const initialState: IWeather = {
    darkMode: false,
    data: null,
    error: "",
    fahrenheit: false,
    isLoading: false,
    myLocation: {
        lat: 0,
        lon: 0,
    },
    burger: false,
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        setFahrenheit(state) {
            state.fahrenheit = !state.fahrenheit
        },
        setDarkMode(state) {
            state.darkMode = !state.darkMode
        },
        setMyLocation(state, action) {
            state.myLocation = action.payload
        },
        setBurger(state) {
            state.burger = !state.burger
        },
    },
})

export const { setData, setFahrenheit, setMyLocation, setDarkMode, setBurger } =
    weatherSlice.actions
export default weatherSlice.reducer
