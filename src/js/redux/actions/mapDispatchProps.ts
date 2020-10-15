import {SetColorValue,SetPattern,SetMODE,SetStrageColor,SetPatternOptions} from "./app";
import {ColorType,RGB,CMYK,Axe,ModeList,SaveStrage} from "../reducer/type";

export type DispatchFunc = {
    set_Mode:(mode:ModeList)=>void,
    set_ColorValue:(prop:ColorType,value:RGB|CMYK)=>void,
    set_ColorType:(value:ColorType)=>void,
    set_Pattern:(prop:string,obj:Axe)=>void,
    set_PetternType:(colorType:ColorType)=>void,
    set_StartPoint:(color:CMYK|RGB)=>void,
    set_StartType:(prop:string,value:boolean)=>void,
    set_StarageColor:(index:number,colorObj:SaveStrage)=>void,
    set_StrageColorType:(index:number,colorType:ColorType)=>void
}

export type MapDispatch = (dispatch:Function) => DispatchFunc;

export const dispatchProps:MapDispatch = dispatch =>{
    return{
        set_Mode:(mode)=>dispatch(SetMODE.setMode(mode)),
        set_ColorValue:(prop,value)=>dispatch(SetColorValue.setValue(prop,value)),
        set_ColorType:(value)=>dispatch(SetColorValue.setType(value)),
        set_Pattern:(prop,obj)=>dispatch(SetPattern.setAxe(prop,obj)),
        set_PetternType:(colorType)=>dispatch(SetPattern.setPatten(colorType)),
        set_StartPoint:(color)=>dispatch(SetPatternOptions.setColor(color)),
        set_StartType:(prop,value)=>dispatch(SetPatternOptions.setType(prop,value)),
        set_StarageColor:(index,colorObj)=>dispatch(SetStrageColor.setColor(index,colorObj)),
        set_StrageColorType:(index,colorType)=>dispatch(SetStrageColor.switchType(index,colorType))
    }
}