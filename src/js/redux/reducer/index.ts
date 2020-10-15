import {AdjustColor,ColorType,CreatePattern,ModeList,SaveStrage,PatternPoint} from "./type";

const initModeList:ModeList = {
    adjust:true,
    create:false,
    saveColor:false
}

export const modeMenuList = (state = initModeList,action) => {
    switch(action.type){
        case"SETMODE":
            return action.mode;

        default:
            return state;
    }
}

const initCMYK = {
    cyan:0,
    magenta:0,
    yellow:0,
    black:0
}

const initRGB = {
    red:0,
    green:0,
    blue:0
}


const initCcolor:AdjustColor = {
    type:"CMYK",
    color:{
        CMYK:{
            cyan:0,
            magenta:0,
            yellow:0,
            black:0
        },
        RGB:{
            red:0,
            green:0,
            blue:0
        }
    }
}

export const colorValues = (state=initCcolor,action)=>{
    switch(action.type){
        case"SETCOLORVALUR":
            const stat = {...state};
            stat.color[action.prop] = action.value;
            return stat;

        case"SETCOLORTYPE":
            const colorObj = {...state};
            colorObj.type = action.value;
            return colorObj;

        default:
            return state;
    }
}

const initPattern:CreatePattern = {
    type:"CMYK",
    Xaxe:{
        step:1,
        number:5,
        CMYK:{
            cyan:false,
            magenta:false,
            yellow:false,
            black:false
        },
        RGB:{
            red:false,
            green:false,
            blue:false
        }
    },
    Yaxe:{
        step:1,
        number:5,
        CMYK:{
            cyan:false,
            magenta:false,
            yellow:false,
            black:false
        },
        RGB:{
            red:false,
            green:false,
            blue:false
        }
    },
    Zaxe:{
        step:1,
        number:5,
        CMYK:{
            cyan:false,
            magenta:false,
            yellow:false,
            black:false
        },
        RGB:{
            red:false,
            green:false,
            blue:false
        }
    }
}

export const createPattern = (state = initPattern,action) =>{
    switch(action.type){
        case"SETAXE":
            const stat = {...state};
            stat[action.prop] = action.obj;
            return stat;

        case"SETPATTERNTYPE":
            const pattern = {...state};
            pattern.type = action.colorType;
            return pattern;

        default:
            return state;
    }
}

const initPatternPoint:PatternPoint = {
    start:{
        selectedItem:true,
        colorForm:false
    },
    color:{...initCMYK}
}

export const patternPoint = (state=initPatternPoint,action) =>{
    switch(action.type){
        case"SWITCHSTART":
            const stat = {...state};
            Object.keys(stat.start).forEach(key=> stat.start[key] = false);
            stat.start[action.prop] = action.value;
            return stat;

        case"SETPOINTCOLOR":
            const option = {...state};
            option.color = action.color;
            return option;

        default:
            return state;
    }
}

const initColorStrage:SaveStrage[] = [
    {
        type:"CMYK",
        name:"color",
        color:{
            cyan:0,
            magenta:0,
            yellow:0,
            black:0
        }
    },
    {
        type:"CMYK",
        name:"cmyk",
        color:{
            cyan:0,
            magenta:0,
            yellow:0,
            black:0
        }
    },
    {
        type:"RGB",
        name:"rgb",
        color:{
            red:255,
            green:255,
            blue:255
        }
    }
]

export const saveStrage = (state = initColorStrage,action)=>{
    switch(action.type){
        case"SETCOLORSAVE":
            const colors = [...state];
            colors[action.index] = action.colorObj;
            return colors;

        case"SWITCHCOLORTYPE":
            const stat = [...state];
            stat[action.index].type = action.colorType;
            stat[action.index].color = action.colorType === "CMYK" ? {...initCMYK} : {...initRGB};
            return stat; 

        default:
            return state;
    }
}

export type MapState = {
    createPattern:CreatePattern,
    colorValues:AdjustColor,
    modeMenuList:ModeList,
    saveStrage:SaveStrage[],
    patternPoint:PatternPoint
}

