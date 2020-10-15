import * as React from "react";
import {Button} from "./type";

export const StdButton = ({func,name,arg,addClass}:Button)=>(
    <button className={"button-std btn-" + addClass} onClick={(e)=>func(e,arg)}>{name}</button>
)

export const ColorTypeBtn = ({name,func}:{name:string,func:(name:string)=>void}) =>{
    return(
        <button className={"colorTypeBtn typeBtn-"+name} onClick={(e)=>func(name)}>{name}</button>
    )
}