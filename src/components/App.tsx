
import {useCallback, useEffect, useState} from "react";
import css from "./styles.module.css" ;
import humIcon from './img/humidity.svg';
import pressureIcon from "./img/pressure.svg";
import windIcon from "./img/wind.svg";
import {Input, Dropdown, InfoItem,ErrorBoundary} from "./common";
import sunrise from "./img/sunrise_1.svg";
import sunset from "./img/sunset.svg";
// @ts-ignore
import debounce from 'lodash/debounce';
import {fetchWeathers} from "../store/slice"
import {useSelector, useDispatch} from "react-redux"
import {getWeatherSelector} from "../store";
import {getCurrentTime} from "./common/date/date"
import {Params} from "../types/params";


const units = [
    {value: "metric", label: "Metric, °C"},
    {value: "standard", label: "Standard, K"},
    {value: "imperial", label: "Imperial, °F"}

]

export const App = () => {

    const [params, setParams] = useState<Params>({
        q: 'Minsk',
        units: units[0].value,
    })

    const dispatch = useDispatch()
    const weatherSelector = useSelector(getWeatherSelector)

    const fetchWeatherDebounced = useCallback(debounce((params: Params): void =>
        dispatch(fetchWeathers(params) as any), 2_000), [dispatch]);

    useEffect(() => fetchWeatherDebounced(params), [params]);

    const updateParams = (nextParams: Partial<Params>) => {
        setParams(prevState => ({...prevState, ...nextParams}))
    }


    const infoItems: { img?: any; label: string; value: string;  }[] = [
        {
            img: humIcon,
            label: "Влажность",
            value: String(weatherSelector?.main.humidity + "   %"),
        },
        {
            img: pressureIcon,
            label: "Давление",
            value: String(weatherSelector?.main.pressure + "   гПа"),
        },
        {
            img: windIcon,
            label: "Ветер",
            value: String(weatherSelector?.wind.speed + "  м/сек"),
        },
    ]

    return (

        <div className={css.container}>
            <ErrorBoundary fallback={<span>Уже чиню </span>}>
                <Dropdown value={params.units} onChange={(units) => updateParams({units})} options={units}/>
                <div className={css.search_city}>
                    <Input value={params.q} onChange={(q) => updateParams({q})}/>
                </div>

                <img src={`https://openweathermap.org/img/wn/${weatherSelector!.weather[0].icon}@2x.png`}
                     className={css.img_back} alt="icon"/>

                <div className={css.weather}>
                    <p className={css.city}>
                        {weatherSelector!.name}
                    </p>
                    <p className={css.temperature}>
                        Температура воздуха: {Math.round(weatherSelector!.main.temp)}
                    </p>
                    <p className={css.temperature}>
                        Ощущается как: {Math.round(weatherSelector!.main.feels_like)}
                    </p>

                </div>

                <div className={css.cloud}>
                    Облачность: {weatherSelector?.clouds.all} %
                </div>
                <div className={css.sun_list}>

                    <div className={css.sunriseAndSunset}>

                        <p className={css.sun_time}>
                            <img src={sunrise} className={css.sunrise_sunset} alt="sunrise"/>
                            Восход : {String(getCurrentTime(weatherSelector!.sys.sunrise))}</p>
                        <p className={css.sun_time}>
                            <img src={sunset} className={css.sunrise_sunset} alt="sunset"/>
                            Закат : {String(getCurrentTime(weatherSelector!.sys.sunset))}</p>
                    </div>
                    <ul className={css.list}>
                        {infoItems.map((item, index) => (
                            <InfoItem
                                key={item.img + index}
                                img={item.img}
                                label={item.label}
                                value={item.value}
                            />
                        ))}
                    </ul>
                </div>
            </ErrorBoundary>
        </div>

    )

}
