import { CommonBox } from "./reducer/commonColorbox";
import { ColorBox } from "./commonType";
import { ProcessType , AdjustOptions } from "./reducer/adjustOptions";
import { StrageColorBox } from "./reducer/strage";
import { AxeColorBox , OriginPoint , CenterPoint } from "./reducer/create";

export type StateType = {
    commonColorBox:CommonBox,
    adjustOptions:AdjustOptions,
    processType:ProcessType,
    tempStrage:StrageColorBox[],
    axeColorBox:AxeColorBox,
    createColorOriginPoint:OriginPoint,
    centerPoint:CenterPoint,
    isLoading:boolean
};

