import {ACTION_TYPES, GetWeatherError, GetWeatherStart, GetWeatherSuccess} from "./type";
import {Weather} from "../types/weather";
import {Dispatch} from "redux";
import {getWeatherApi} from "../components/api"

export const getWeatherStart = (): GetWeatherStart => ({type: ACTION_TYPES.GET_WEATHER_START})
export const getWeatherError = (): GetWeatherError => ({type: ACTION_TYPES.GET_WEATHER_ERROR})
export const getWeatherSuccess = (data: Weather): GetWeatherSuccess => ({type: ACTION_TYPES.GET_WEATHER_SUCCESS, payload:data})

export const fetchWeather = (params: {q: string, units: string}) => (dispatch: Dispatch) => {
    dispatch(getWeatherStart())
    getWeatherApi(params).then((weather: Weather) => dispatch(getWeatherSuccess(weather))).catch(() => dispatch(getWeatherError()))
}
