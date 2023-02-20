import {Weather} from "../types/weather";

export enum ACTION_TYPES {
    GET_WEATHER_START = "WEATHER_GET_WEATHER_START",
    GET_WEATHER_SUCCESS = "WEATHER_GET_WEATHER_SUCCESS",
    GET_WEATHER_ERROR = "WEATHER_GET_WEATHER_ERROR"
}

export type GetWeatherStart = {type:ACTION_TYPES.GET_WEATHER_START };
export type GetWeatherSuccess = {type:ACTION_TYPES.GET_WEATHER_SUCCESS
    payload: Weather};
export type GetWeatherError = {type:ACTION_TYPES.GET_WEATHER_ERROR };

export type Action = GetWeatherStart | GetWeatherError | GetWeatherSuccess
