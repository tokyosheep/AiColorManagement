import { CMYK , RGB , initCMYK , initRGB  , ColorBox , Profile } from "../commonType";
import { ProcessType } from "./adjustOptions";

export type FillType = "key"|"flat"|"both";
export const fills = ["key","flat","both"];

export type CommonBox = ColorBox & {
    fill:FillType
};

const initColor:CommonBox = {
    "rgb":{...initRGB},
    "cmyk":{...initCMYK},
    "profile":"CMYK",
    "fill":"flat"
}

export type AdjustJSXArg = {
    colorObj:{
        cmyk:CMYK,
        rgb:RGB,
        profile:Profile,
        fill:FillType,
        includeBlack?:boolean
    }|{
        amount:number,
        fill:FillType,
        includeBlack?:boolean
    },
    type:keyof ProcessType | "replace"
}


export type CommonColorAction = {
        type:"commonColor_setColor",
        profile: Profile,
        colorObj:CMYK | RGB
    }|{
        type:"commonColor_setProfile",
        profile:Profile
    }|{
        type:"commonColor_fillType",
        fill:FillType
    };

type CommonColorReducer = (state:CommonBox,action:CommonColorAction) => CommonBox;

export const commonColorBox:CommonColorReducer = (state=initColor,action) =>{
    switch(action.type){
        case "commonColor_setColor":
            state[action.profile.toLowerCase()] = {...action.colorObj};
            return {...state};

        case "commonColor_setProfile":
            state.profile = action.profile;
            return {...state};

        case "commonColor_fillType":
            state.fill = action.fill;
            return {...state};

        default:
            return state;
    }
}