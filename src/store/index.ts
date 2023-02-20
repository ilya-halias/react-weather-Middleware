import Thunk from "redux-thunk"
import {createStore, applyMiddleware} from "redux";
import {Weather} from "../types/weather";
import {reducer} from "./reducer"
export * from "./selector"
export * from "./actionCreator"

export const store = createStore(reducer, applyMiddleware(Thunk))

export type RootStore = ReturnType<typeof store.getState>
