import { commonColorBox } from "../reducer/commonColorbox";
import { adjustOptions , processType } from "../reducer/adjustOptions";
import { tempStrage } from "../reducer/strage";
import { isLoading } from "../reducer/loading";
import { axeColorBox , centerPoint , createColorOriginPoint } from "../reducer/create";
import { combineReducers , createStore } from "redux";

const rootReducer = combineReducers({
    commonColorBox,
    processType,
    adjustOptions,
    tempStrage,
    axeColorBox,
    centerPoint,
    createColorOriginPoint,
    isLoading
});

const configStore = () => createStore(rootReducer);

export default configStore;