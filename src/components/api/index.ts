import {Weather} from "../../types/weather";

const BASE_URL = "https://api.openweathermap.org";
const APP_ID = process.env.REACT_APP_OPEN_WEATHER_TOKEN

const fetchData = (url: string, params: Record<string, string | number> = {}) => {
    const searchParams = new URLSearchParams({...params, appId: APP_ID} as Record<string, string>)

    const fullUrl = new URL(url, BASE_URL);

    fullUrl.search = searchParams.toString();

    return fetch(fullUrl).then((data) => {
        if (data.ok) {
            return data.json();
        }
        throw new Error('oops');
    });
};

export const getWeatherApi = (params?: { q?: string, units?: string }): Promise<Weather> =>
    fetchData("/data/2.5/weather", params);
