import * as React from "react";
import {TextBox,NumberBox} from "./type";

export const StdTextBox = ({name,func,addClass,arg,value}:TextBox<string>) =>(
    <label className={"textBox-std "+addClass}>
        <input type="text" className="textBox-std__input" value={value} onChange={(e)=>func(e,arg)} />
        <span className="textBox-std__name">{name}</span>
    </label>
);

export const StdNumberBox = ({name,func,addClass,arg,value,max,min,step}:NumberBox)=>(
    <label className={"number-std "+addClass}>
        <input type="number" className="number-std__input" value={value} onChange={(e)=>func(e,arg)} max={max} min={min} step={step} />
        <span className="number-std__name">{name}</span>
    </label>
)

export type ColorBox = {
    type:"RGB"|"CMYK",
    name:string,
    arg?:Object,
    func:(e:React.ChangeEvent,type:"RGB"|"CMYK",name?:string,arg?:Object)=>void,
    value:number
}

export const ColorNumberBox = ({name,func,value,type,arg}:ColorBox)=>{

    return(
        <label className={"number-color number-" +name}>
            <input type="number" className={"number-color__input "} value={value} onChange={(e)=>func(e,type,name,arg)} max={type === "RGB" ? 255 : 100} min={type === "RGB" ? -255 : -100} step={1}/>
            <span className="number-color__name">{name}</span>
        </label>
    )
}