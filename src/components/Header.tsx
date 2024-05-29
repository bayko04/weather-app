import { useDispatch, useSelector } from "react-redux"
import {
    setFahrenheit,
    setMyLocation,
    setDarkMode,
    setBurger,
} from "../store/reducers/weatherSlice"
import CitySelect from "./CitySelect"
import moonImg from "../images/nav/moon.svg"
import sunImg from "../images/nav/sun.svg"
import locImg from "../images/nav/loc.svg"
import tempImg from "../images/nav/temp.svg"
import Burger from "./Burger"
import { IRoot } from "../types/IRoot"

const Header = () => {
    const { darkMode, burger } = useSelector((state: IRoot) => state.weather)
    const dispatch = useDispatch()

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    dispatch(
                        setMyLocation({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude,
                        })
                    )
                },
                (err) => {
                    console.log(err)
                }
            )
        }
    }

    const handleLocationClick = () => {
        getLocation()
        dispatch(setBurger())
    }

    const handleDarkModeClick = () => {
        dispatch(setDarkMode())
        dispatch(setBurger())
    }

    const handleFahrenheitClick = () => {
        dispatch(setFahrenheit())
        dispatch(setBurger())
    }

    return (
        <div className="header">
            <div className="container">
                <div className={`header__row ${darkMode ? "dark" : ""}`}>
                    <CitySelect />
                    <nav className="header__nav">
                        <ul className={`header__list ${burger ? "hide" : ""}`}>
                            <li
                                title="свой город"
                                onClick={handleLocationClick}
                                className="header__location"
                            >
                                <img
                                    src={locImg}
                                    alt=""
                                />
                            </li>
                            <li
                                onClick={handleDarkModeClick}
                                className="header__darkMode"
                            >
                                <img
                                    title="изменить тему"
                                    src={`${darkMode ? sunImg : moonImg}`}
                                    alt=""
                                />
                            </li>
                            <li
                                title="сменить единицу измерения"
                                onClick={handleFahrenheitClick}
                                className="header__fahrenheit"
                            >
                                <img
                                    src={tempImg}
                                    alt=""
                                />
                            </li>
                        </ul>
                        <Burger />
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
