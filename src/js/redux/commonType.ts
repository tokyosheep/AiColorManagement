
export type CMYK = {
    "cyan":number,
    "magenta":number,
    "yellow":number,
    "black":number
}

export type RGB ={
    "red":number,
    "green":number,
    "blue":number
}

export type Profile = "CMYK"|"RGB";

export type SingleColor = {
    tint:number
}

export const initCMYK = {
    cyan:0,
    magenta:0,
    yellow:0,
    black:0
};

export const initRGB = {
    red:0,
    blue:0,
    green:0
}

export type ColorBox = {
    cmyk:CMYK,
    rgb:RGB,
    profile:Profile,
};

export const setColorCSS:(key:keyof CMYK|keyof RGB)=>string = key =>{
    switch(key){
        case "black":
            return "#000";

        case "blue":
            return "#00f";

        case "green":
            return "#0f0";

        case "red":
            return "#f00";

        case "magenta":
            return "#f0f";

        case "yellow":
            return "#ff0";

        case "cyan":
            return "#0ff";

        default:
            return "#000";
    }
}