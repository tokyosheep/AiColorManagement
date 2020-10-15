import {MapState} from "./reducer/index";
import {DispatchFunc} from "./actions/mapDispatchProps";

export type Props = DispatchFunc&{
    state:MapState
}