import { TempStrageActions } from "../reducer/strage";
import { CMYK , RGB , Profile } from "../commonType";

export type SetColorFunc = <T extends Profile>(index:number,profile:T,color:T extends "CMYK" ? CMYK : RGB)=>TempStrageActions;
export const tempStrage_setColor:SetColorFunc = (index,profile,color) =>{
    return {type:"tempStrage_setColor",index:index,profile:profile,color:color};
}

export type SetProfileFunc = (index:number,profile:Profile)=>TempStrageActions;
export const tempStrage_setProfile:SetProfileFunc = (index,profile) => ({type:"tempStrage_setProfile",index:index,profile:profile});

export type SetStrageNameFunc = (index:number,name:string)=>TempStrageActions;
export const tempStrage_setName:SetStrageNameFunc = (index,name) => ({type:"tempStrage_setName",index:index,value:name});