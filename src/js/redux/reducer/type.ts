export type ModeList ={
    adjust:boolean,
    create:boolean,
    saveColor:boolean
} 

export type RGB = {
    red:number,
    green:number,
    blue:number
}

export type CMYK ={
    cyan:number,
    magenta:number,
    yellow:number,
    black:number
}

export type AdjustColor = {
    type:ColorType,
    color:{
        CMYK:CMYK,
        RGB:RGB
    }
}

export type ColorType = "CMYK"|"RGB";

export type PatterCMYK = {
    cyan:boolean,/*checkboxに*/
    magenta:boolean,
    yellow:boolean,
    black:boolean
}

export type StartPoint={
    selectedItem:boolean,
    colorForm:boolean
}

export type PatternPoint = {
    start:StartPoint,
    color:CMYK|RGB
}

export type PatternRGB = {
    red:boolean,
    green:boolean,
    blue:boolean
}

export type Axe = {
    step:number,
    number:number,
    CMYK:PatterCMYK,
    RGB:PatternRGB
}

export type CreatePattern = {
    type:ColorType,
    Xaxe:Axe,
    Yaxe:Axe,
    Zaxe:Axe
}

export type SaveStrage = {
    type:ColorType,
    name:string,
    color:CMYK|RGB
}