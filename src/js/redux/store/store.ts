import { config } from "process";
import {combineReducers,createStore} from "redux";
import {createPattern,colorValues,modeMenuList,saveStrage,patternPoint} from "../reducer/index";

const rootReducer = combineReducers({
    createPattern,
    colorValues,
    modeMenuList,
    saveStrage,
    patternPoint
});

const configStore = () =>{
    const store = createStore(rootReducer);
    return store;
}

export default configStore;