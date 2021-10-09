import { ProcessActions , AdjustActions , ProcessType } from "../reducer/adjustOptions";

export type ProcessFunc = (prop:keyof ProcessType)=>ProcessActions;
export const processType_check:ProcessFunc = prop => ({type:"processType_check",prop:prop});


export const adjustOptions_setAmount:(value:number)=>AdjustActions = value => ({type:"adjustOptions_setAmount",value:value});

export const adjustOptions_setBlack:(checked:boolean)=>AdjustActions = checked => ({type:"adjustOptions_setBlack",checked:checked});