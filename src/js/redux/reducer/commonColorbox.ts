import { CMYK , RGB , initCMYK , initRGB  , ColorBox , Profile } from "../commonType";
import { valueOf } from "../../types/common";

export type FillType = "key"|"flat"|"none";
export const fills = ["key","flat","none"];

export type CommonBox = ColorBox & {
    fill:FillType
};

const initColor:CommonBox = {
    "rgb":{...initRGB},
    "cmyk":{...initCMYK},
    "profile":"CMYK",
    "fill":"flat"
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