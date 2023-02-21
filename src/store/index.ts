import {configureStore} from "@reduxjs/toolkit"
import {reducer} from "./slice";
export * from "./selector"




export const store = configureStore({
    reducer: reducer
})

export type RootStore = ReturnType<typeof store.getState>
