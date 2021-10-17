import { CMYK , RGB , ColorBox , Profile } from "../commonType";

const initCMYK = {
    cyan:0,
    magenta:0,
    yellow:0,
    black:0
};

const initRGB = {
    red:0,
    blue:0,
    green:0
}

export type StrageColorBox = ColorBox&{name:string};

const initTempStrage:StrageColorBox[] = new Array(6).fill(null).map(n=>{
    return{
        cmyk:{...initCMYK},
        rgb:{...initRGB},
        profile:"CMYK",
        name:"color"
    };
});


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
            state[action.index][action.profile.toLowerCase()] = {...action.color};
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