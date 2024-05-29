export interface ICity {
    id: number
    state: string
    name: string
    coord: {
        lat: number
        lon: number
    }
}
export interface ICoord {
    coord: {
        lat: number
        lon: number
    }
}
