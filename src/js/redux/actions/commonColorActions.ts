import { CommonColorAction , FillType } from "../reducer/commonColorbox";
import { CMYK , RGB , ColorBox , Profile } from "../commonType";

export type SetColorFunc = <T extends Profile>(profile:T, colorObj:T extends "CMYK" ? CMYK : RGB)=>CommonColorAction;
export const commonColor_setColor:SetColorFunc = (profile,colorObj)=>{
    return {type:"commonColor_setColor",profile:profile,colorObj:colorObj};
}

export type SetProfileFunc = (profile:Profile)=>CommonColorAction;
export const commonColor_setProfile:SetProfileFunc = (profile) => ({type:"commonColor_setProfile",profile:profile});

export const commonColor_fillType:(fill:FillType)=>CommonColorAction = fill => ({type:"commonColor_fillType",fill:fill});