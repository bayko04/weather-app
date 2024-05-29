import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "../store/reducers/weatherSlice"
import WeatherService from "../services/WeatherService"
import { ICity } from "../types/types"
import { ICoord } from "../types/types"
import { IRoot } from "../types/IRoot"

const CitySelect = () => {
    const [city, setCity] = useState<string>("")
    const [searchedCity, setSearchedCity] = useState<ICity[]>([])
    const [pickedCity, setPickedCity] = useState<ICoord>({
        coord: { lat: 0, lon: 0 },
    })
    const myLocation = useSelector((state: IRoot) => state.weather.myLocation)
    const darkMode = useSelector((state: IRoot) => state.weather.darkMode)
    const dispatch = useDispatch()

    useEffect(() => {
        const selectedCities = WeatherService.getCities(city)
        setSearchedCity(selectedCities)
    }, [city])

    useEffect(() => {
        const { lat, lon } = pickedCity?.coord
        const api_key = "6d6c48494d43f6d6099104eee062428a"

        const fetchData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
            )
            const result = await response.json()
            dispatch(setData(result))
        }
        fetchData()
    }, [pickedCity])

    useEffect(() => {
        const { lat, lon } = myLocation
        const api_key = "6d6c48494d43f6d6099104eee062428a"

        const fetchData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
            )
            const result = await response.json()
            dispatch(setData(result))
        }
        if (myLocation.lat) {
            fetchData()
        }
    }, [myLocation])

    return (
        <div className="city-select">
            <input
                onBlur={() => setTimeout(() => setCity(""), 100)}
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder="City"
            />
            <div
                style={{ display: `${searchedCity.length ? "" : "none"}` }}
                className="city-select__cities"
            >
                <ul className={`city-select__list ${darkMode ? "dark" : ""}`}>
                    {searchedCity.map((item: ICity) => (
                        <li
                            onClick={() => {
                                setCity("")
                                setPickedCity(item)
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CitySelect
