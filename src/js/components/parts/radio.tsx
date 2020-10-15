import * as React from "react";
import {CheckBox} from "./type";

export const SideMenuRadio = ({checked,name,func,arg}:CheckBox) =>(
    <label className="sideMenuRadio">
        <input type="radio" className="sideMenuRadio__input" onChange={(e)=>func(e,arg)} checked={checked}/>
        <div className="sideMenuRadio__cover"></div>
        <span className="sideMenuRadio__name">{name}</span>
    </label>
)

export const StdRadioButton = ({checked,name,func,arg}:CheckBox)=>(
    <label className="stdRadio">
        <input type="radio" className="stdRadio__input" onChange={(e)=>func(e,arg)} checked={checked}/>
        <div className="stdRadio__box"></div>
        <span className="stdRadio__name">{name}</span>
    </label>
)