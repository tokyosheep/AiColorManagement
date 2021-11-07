import { Profile } from "../commonType";
import { CMYKAxe , RGBAxe , AxeActions , AxeKey , OriginPointActions , OriginPoint , CenterPointActions } from "../reducer/create";

export const axeColor_setColor:(color:CMYKAxe|RGBAxe,axis:AxeKey,profile:Profile)=>AxeActions = (color,axis,profile) => ({type:"axeColor_setColor",color:color,axis:axis,profile:profile});

export const axeColor_setNumber:(prop:"step" | "number",value:number,axe:AxeKey,profile:Profile)=>AxeActions = (prop,value,axis,profile) =>{
    return {type:"axeColor_setNumber",prop:prop,value:value,axis:axis,profile:profile};
}

export type OriginPointFunc = (value:OriginPoint)=>OriginPointActions;
export const originPoint_check:OriginPointFunc = value => ({type:"originPoint_check",value:value});

export const centerPoint_check:()=>CenterPointActions = () =>({type:"centerPoint_check"});