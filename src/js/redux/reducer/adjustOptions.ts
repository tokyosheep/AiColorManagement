export type ProcessType = {
    "Additional":boolean,
    "Saturation":boolean,
    "Brightness":boolean,
    "AddRatio":boolean
};

const initProcess:ProcessType = {
    Additional:true,
    Saturation:false,
    Brightness:false,
    AddRatio:false
}

export type ProcessActions = {
    type:"processType_check",
    prop:keyof ProcessType
}

type ProcessTypeReducer = (state:ProcessType,action:ProcessActions)=>ProcessType;

export const processType:ProcessTypeReducer = (state=initProcess,action)=>{
    switch(action.type){
        case "processType_check":
            Object.keys(state).forEach((key:keyof ProcessType)=>state[key]=false);
            state[action.prop] = true;
            return {...state};

        default:
            return state;
    }
}

export type AdjustOptions = {
    "amount":number,
    "IncludeBlack":boolean
};

const initOptions:AdjustOptions = {
    amount:0,
    IncludeBlack:false
}

export type AdjustActions = {
        type:"adjustOptions_setAmount",
        value:number
    }|
    {
        type:"adjustOptions_setBlack",
        checked:boolean
    };

type AdjustActionsReducer = (state:AdjustOptions,action:AdjustActions)=>AdjustOptions;

export const adjustOptions:AdjustActionsReducer = (state=initOptions,action)=>{
    switch(action.type){
        case "adjustOptions_setAmount":
            state.amount = action.value;
            return {...state};

        case "adjustOptions_setBlack":
            state.IncludeBlack = action.checked;
            return {...state};

        default:
            return state;
    }
}
