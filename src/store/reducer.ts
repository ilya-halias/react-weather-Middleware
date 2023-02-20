import {Weather} from "../types/weather";
import {Action, ACTION_TYPES} from "./type";


export interface Store {
    data: Weather
}



const initialStore: Store = {
    data: {main: {
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
},
wind: {
    speed: 0,
    gust: 0
},
clouds: { all: 0 },
dt: 0,
sys: {
    sunrise: 0,
    sunset: 0,
},
name: " ",
id: 0,
weather:[{icon: "string"}]
}}

export const reducer = (store: Store = initialStore, action : Action): Store => {
    switch (action.type){
        case ACTION_TYPES.GET_WEATHER_START:{
            return {...store}
        }
        case ACTION_TYPES.GET_WEATHER_ERROR:{
            return {...store}
        }
        case ACTION_TYPES.GET_WEATHER_SUCCESS:{
            return {data: action.payload}
        }
    }
    return store
}
