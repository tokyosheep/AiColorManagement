export type LoadingActions = {
    type:"loading_set"
}

type LoadingReducer = (state:boolean,action:LoadingActions)=>boolean;

export const isLoading:LoadingReducer = (state=false,action)=>{
    switch(action.type){
        case "loading_set":
            return !state;

        default:
            return state;
    }
}