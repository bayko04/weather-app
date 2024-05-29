import { useSelector } from "react-redux"
import { setBurger } from "../store/reducers/weatherSlice"
import { useDispatch } from "react-redux"
import { IRoot } from "../types/IRoot"

const Burger = () => {
    const dispatch = useDispatch()
    const burger = useSelector((state: IRoot) => state.weather.burger)

    return (
        <div
            onClick={() => dispatch(setBurger())}
            className={`burger ${burger ? "hide" : ""}`}
        >
            <span></span>
        </div>
    )
}

export default Burger
