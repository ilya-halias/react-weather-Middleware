import {FC, ChangeEvent} from "react";

import css from "./dropdown.module.css";
interface DropDawnProps {
    value: string;
    onChange: (value: string, e: ChangeEvent<HTMLSelectElement>)=> void;
    options: {value: string; label:string; }[];

}

export const Dropdown: FC<DropDawnProps> = ({value, onChange, options})=>{
    return (
        <select className={css.dropdown} value={value} onChange={(event) => onChange(event.target.value, event)}>
            {options.map(({value, label})=>(
                <option value={value} key={value} >
                    {label}
                </option>
            ))}
        </select>
    )
}
