import { Profile , CMYK , RGB } from "../commonType";

export type CMYKAxe = {
    "cyan":boolean,
    "magenta":boolean,
    "yellow":boolean,
    "black":boolean,
    "number":number,
    "step":number,
};

export type RGBAxe = {
    "red":boolean,
    "green":boolean
    "blue":boolean,
    "number":number,
    "step":number
};

export type Axe<T> = {
    Xaxe:T,
    Yaxe:T,
    Zaxe:T
}

export type AxeKey = "x"|"y"|"z";

const initCMYKAxe:CMYKAxe = {
    cyan:false,
    magenta:false,
    yellow:false,
    black:false,
    number:0,
    step:1
}

const initRGBAxe:RGBAxe = {
    red:false,
    green:false,
    blue:false,
    number:0,
    step:1
}

export type AxeColorBox = {
    cmyk:Axe<CMYKAxe>,
    rgb:Axe<RGBAxe>
}

const initAxeColor:AxeColorBox = {
    cmyk:{
        Xaxe:{...initCMYKAxe},
        Yaxe:{...initCMYKAxe},
        Zaxe:{...initCMYKAxe}
    },
    rgb:{
        Xaxe:{...initRGBAxe},
        Yaxe:{...initRGBAxe},
        Zaxe:{...initRGBAxe}
    }
}



export type AxeActions = {
    type:"axeColor_setColor",
    color:CMYKAxe|RGBAxe,
    axe:AxeKey,
    profile:Profile
}|{
    type:"axeColor_setNumber",
    prop:"step"|"number",
    value:number,
    axe:AxeKey,
    profile:Profile
}

type AxeReducer = (state:AxeColorBox,action:AxeActions)=>AxeColorBox;

export const axeColorBox:AxeReducer = (state=initAxeColor,action)=>{
    switch(action.type){
        
        case "axeColor_setColor":
            state[action.profile.toLowerCase()][action.axe] = {...action.color};
            return {...state};

        case "axeColor_setNumber":
            state[action.profile.toLowerCase()][action.axe][action.prop] = action.value;
            return {...state};

        default:
            return state;
    }
}

export type OriginPoint = "selected"|"colorForm";

export type OriginPointActions = {
    type:"originPoint_check",
    value:OriginPoint
};

type OriginPointReducer = (state:OriginPoint,action:OriginPointActions)=>OriginPoint;

export const createColorOriginPoint:OriginPointReducer = (state="selected",action)=>{
    switch(action.type){
        case "originPoint_check":
            return action.value;

        default:
            return state;
    }
} 

export type CenterPoint = boolean;

export type CenterPointActions = {type:"centerPoint_check"};

type CenterPointReducer = (state:CenterPoint,action:CenterPointActions)=>CenterPoint;

export const centerPoint:CenterPointReducer = (state=false,action)=>{
    switch(action.type){
        case "centerPoint_check":
            return !state;

        default:
            return state;
    }
} 

export type CreateColorJSX  = {
    "type": "createPattern",
    "color": AxeColorBox & {"space":Profile}
    "option": {
        "centerPoint":boolean,
        "start":OriginPoint,
        "color": CMYK|RGB
    }
}
