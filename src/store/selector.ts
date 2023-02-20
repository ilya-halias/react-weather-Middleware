import {Store} from "./reducer"
import {RootStore} from "./index";
export const getWeatherSelector = (store: RootStore): Store['data'] => store.data;
