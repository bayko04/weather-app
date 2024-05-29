import { useSelector } from "react-redux"
import cloudyImg from "../images/weather/cloudy.svg"
import thunderImg from "../images/weather/thunder.svg"
import rainImg from "../images/weather/rainy-5.svg"
import snowImg from "../images/weather/snowy-1.svg"
import clearImg from "../images/weather/day.svg"
import drizzleImg from "../images/weather/rainy-1.svg"
import { IRoot } from "../types/IRoot"

const WeatherDisplay = () => {
    const weatherData = useSelector((state: IRoot) => state.weather.data)
    const darkMode = useSelector((state: IRoot) => state.weather.darkMode)
    const fahrenheitState = useSelector(
        (state: any) => state.weather.fahrenheit
    )

    const celsius = {
        current: Math.floor(weatherData?.main.temp) - 273,
        max: Math.floor(weatherData?.main.temp_max) - 273,
        min: Math.floor(weatherData?.main.temp_min) - 273,
    }
    const fahrenheit = {
        current: ((Math.floor(weatherData?.main.temp) - 273) * 9) / 5 + 32,
        max: ((Math.floor(weatherData?.main.temp_max) - 273) * 9) / 5 + 32,
        min: ((Math.floor(weatherData?.main.temp_min) - 273) * 9) / 5 + 32,
    }

    const weatherIcons: any = {
        Clouds: cloudyImg,
        Thunderstorm: thunderImg,
        Rain: rainImg,
        Snow: snowImg,
        Clear: clearImg,
        Drizzle: drizzleImg,
    }

    return (
        <div className="weather-display">
            <div className="container">
                <div
                    className={`weather-display__row ${darkMode ? "dark" : ""}`}
                >
                    <div className="weather-display__icon">
                        <img
                            src={`${
                                weatherIcons[weatherData?.weather[0].main]
                            }`}
                            alt=""
                        />
                    </div>

                    <div className="weather-display__content">
                        <h2 className="weather-display__city">
                            {weatherData?.name}
                        </h2>
                        <h1 className="weather-display__current">
                            {fahrenheitState
                                ? fahrenheit.current + "f°"
                                : celsius.current + "°"}
                        </h1>
                        <h4 className="weather-display__weatherType">
                            {weatherData?.weather[0].main}
                        </h4>
                        <p className="weather-display__high">
                            H:
                            {fahrenheitState
                                ? fahrenheit.max + "f°"
                                : celsius.max + "°"}
                        </p>
                        <p className="weather-display__low">
                            L:
                            {fahrenheitState
                                ? fahrenheit.min + "f°"
                                : celsius.min + "°"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay
