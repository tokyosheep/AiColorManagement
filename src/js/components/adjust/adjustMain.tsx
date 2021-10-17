import React,{useCallback} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { MainContainer } from "../../styles/container";
import { StateType } from "../../redux/stateType";
import { adjustOptions_setBlack } from "../../redux/actions/adjustActions";
import { StdCheckBox } from "../../parts/checkbox/checkboxes";
import { NoticeBleButton } from "../../parts/button/buttons";

import { SendHostScript } from "../../fileSystem/connext";
import { writeDebugData } from "../../fileSystem/init";
import { AdjustJSXArg } from "../../redux/reducer/commonColorbox";
import { ProcessType } from "../../redux/reducer/adjustOptions";

const { CenterContainer } = MainContainer;

import { AdjustRadios , FillRadios } from "./optionCheckBoxes";

export const FormWrapper = styled.div`
    width: 155px;
    height: 100%;
`;

const AdjustMain = () =>{
    const dispatch = useDispatch();
    const adjustOptions = useSelector((state:StateType)=>state.adjustOptions);
    const commonColor = useSelector((state:StateType)=>state.commonColorBox);
    const processType = useSelector((state:StateType)=>state.processType);
    const handleBlackInk = useCallback((e)=>dispatch(adjustOptions_setBlack(e.target.checked)),[adjustOptions]);

    const adjustItemColor = async()=>{
        const connect = new SendHostScript();
        const r:[keyof ProcessType,boolean] = Object.entries(processType).find(([key,value])=> value===true);
        const arg:AdjustJSXArg = r[0] === "Brightness" || r[0] === "Saturation" ?
        {
            type:r[0],
            colorObj:{
                amount:adjustOptions.amount,
                fill:commonColor.fill,
                includeBlack:adjustOptions.IncludeBlack
            }
        }
        : {
            type:r[0],
            colorObj:{...commonColor,includeBlack:adjustOptions.IncludeBlack}
        }
        await writeDebugData(arg);
        const res = await connect.callHostScript(arg);
        console.log(res);
    }
    return(
        <CenterContainer>
            <FormWrapper>
                <AdjustRadios />
                <FillRadios />
                <StdCheckBox checked={adjustOptions.IncludeBlack} func={handleBlackInk} name="include black"/>
                <NoticeBleButton name="adjust" func={adjustItemColor} />
            </FormWrapper>
        </CenterContainer>
    )
}

export default AdjustMain;