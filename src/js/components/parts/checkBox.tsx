import * as React from "react";
import {CheckBox} from "./type";

export const StdCheckBox = ({addClass,name,func,arg,checked}:CheckBox) =>(
    <label className={"checkbox-std "+addClass}>
        <input type="checkbox" className="checkbox-std__input" checked={checked} onChange={(e)=>func(e,arg)} />
        <div className="checkbox-std__display"></div>
        <span className="checkbox-std__name">{name}</span>
    </label>
)

export const ColorTypeCheck = ({checked,name,func,arg}:CheckBox) =>(
    <label className={"ColorTypeCheck colorRadio-" + name}>
        <input type="checkbox" className="ColorTypeCheck__input" onChange={(e)=>func(e,arg)} checked={checked}/>
        <div className="ColorTypeCheck__cover"></div>
        <span className="ColorTypeCheck_name">{name}</span>
    </label>
)