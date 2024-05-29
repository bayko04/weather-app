import citiesJson from "../cities/city.list.min.json"

export default class WeatherService {
    static getCities(city: any) {
        const onlyCity =
            Object.values(citiesJson) /* .map((city: any) => city.name) */

        const filtered = onlyCity.filter((item) => {
            if (city.length !== 0) {
                return item.name.toLowerCase().includes(city.toLowerCase())
            }
        })

        const sliced = filtered
            .sort((a: any, b: any) => a.name.length - b.name.length)
            .slice(0, 20)

        return sliced
    }
}
