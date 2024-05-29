import { useSelector } from "react-redux"
import Header from "./components/Header"
import WeatherDisplay from "./components/WeatherDisplay"
import "./App.scss"

function App() {
    const darkMode = useSelector((state: any) => state.weather.darkMode)

    return (
        <div className={`App ${darkMode ? "dark" : ""}`}>
            <Header />
            <div className="content">
                <WeatherDisplay />
            </div>
        </div>
    )
}

export default App
