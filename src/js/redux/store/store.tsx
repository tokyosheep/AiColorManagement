import { commonColorBox } from "../reducer/commonColorbox";
import { adjustOptions , processType } from "../reducer/adjustOptions";
import { combineReducers , createStore } from "redux";

const rootReducer = combineReducers({
    commonColorBox,
    processType,
    adjustOptions
});

const configStore = () => createStore(rootReducer);

export default configStore;