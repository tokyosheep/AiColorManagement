import {ColorType,RGB,CMYK,Axe,ModeList,SaveStrage} from "../reducer/type";

export const SetMODE = {
    setMode:(mode:ModeList)=>{
        return{type:"SETMODE",mode}
    }
}

export const SetColorValue = {
    setValue:(prop:ColorType,value:RGB|CMYK)=>{
        return{type:"SETCOLORVALUR",prop:prop,value:value}
    },
    setType:(value:ColorType)=>{
        return{type:"SETCOLORTYPE",value:value}
    }
}

export const SetPattern = {
    setAxe:(prop:string,obj:Axe)=>{
        return{type:"SETAXE",prop:prop,obj:obj}
    },
    setPatten:(colorType:ColorType)=>{
        return{colorType:colorType,type:"SETPATTERNTYPE"}
    }
}

export const SetPatternOptions = {
    setColor:(color:CMYK|RGB)=>{
        return{color:color,type:"SETPOINTCOLOR"}
    },
    setType:(prop:string,value:boolean)=>{
        return{prop:prop,value:value,type:"SWITCHSTART"}
    }
}

export const SetStrageColor = {
    setColor:(index:number,colorObj:SaveStrage)=>{
        return{index:index,colorObj:colorObj,type:"SETCOLORSAVE"}
    },
    switchType:(index:number,colorType:ColorType)=>{
        return{index:index,colorType:colorType,type:"SWITCHCOLORTYPE"}
    }
}