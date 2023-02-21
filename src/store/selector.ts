
import {RootStore} from "./index";
import {Store} from "./slice";
export const getWeatherSelector = (store: RootStore): Store['data'] => store.data;
