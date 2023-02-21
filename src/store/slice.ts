import {Weather} from "../types/weather";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {getWeatherApi} from "../components/api"
import {LOAD_STATUSES} from "../types/loadstatus";


export const fetchWeathers = createAsyncThunk("weather", getWeatherApi)

export interface Store {
    data: Weather ,
    loadStatus: LOAD_STATUSES

}



const initialState: Store = {

    loadStatus: LOAD_STATUSES.UNKNOWN,

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
    }
}

export const {reducer} = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
         builder.addCase(fetchWeathers.pending, (store)=>{
             store.loadStatus = LOAD_STATUSES.LOADING
         });
         builder.addCase(fetchWeathers.fulfilled, (store, action: PayloadAction<Weather>)=>{
             store.loadStatus = LOAD_STATUSES.LOADED
             store.data = action.payload

         });
         builder.addCase(fetchWeathers.rejected, (store)=>{
             store.loadStatus = LOAD_STATUSES.ERROR

         });

    }

})
