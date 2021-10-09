import { CMYK , RGB , initCMYK , initRGB  , ColorBox , Profile } from "../commonType";

export type StrageColorBox = ColorBox&{name:string};
const initColorBox:StrageColorBox = {
    cmyk:{...initCMYK},
    rgb:{...initRGB},
    profile:"CMYK",
    name:"color"
}

const initTempStrage = new Array(6).fill({...initColorBox});

export type TempStrageActions = {
        type:"tempStrage_setColor",
        index:number,
        color:CMYK|RGB,
        profile:Profile
    }|
    {
        type:"tempStrage_setProfile",
        index:number,
        profile:Profile
    }|{
        type:"tempStrage_setName",
        index:number,
        value:string
    };

type TempStrageReducer = (state:StrageColorBox[],action:TempStrageActions)=>StrageColorBox[];

export const tempStrage:TempStrageReducer = (state=initTempStrage,action)=>{
    switch(action.type){
        case "tempStrage_setColor":
            state[action.index][action.profile.toLowerCase()] = action.color;
            return [...state];

        case "tempStrage_setProfile":
            state[action.index].profile = action.profile;
            return [...state];

        case "tempStrage_setName":
            state[action.index].name = action.value;
            return [...state];

        default:
            return state;
    }
} 