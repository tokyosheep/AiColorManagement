import React,{useCallback} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { MainContainer } from "../../../styles/container";
import { StateType } from "../../../redux/stateType";
import { FormWrapper } from "../../adjust/adjustMain";
import { FillRadios } from "../../adjust/optionCheckBoxes";

import { NoticeBleButton } from "../../../parts/button/buttons";

const { CenterContainer } = MainContainer;

import { SendHostScript } from "../../../fileSystem/connext";
import { writeDebugData } from "../../../fileSystem/init";
import { AdjustJSXArg } from "../../../redux/reducer/commonColorbox";

const ReplaceMain = () =>{
    const commonColor = useSelector((state:StateType)=>state.commonColorBox);
    const replaceColor = async() =>{
        const connect = new SendHostScript();
        const arg:AdjustJSXArg = {
            colorObj:{...commonColor},
            type:"replace"
        }
        //await writeDebugData(arg);
        const r = await connect.callHostScript(arg);
        console.log(r);
    }
    return(
        <CenterContainer>
            <FormWrapper>
                <FillRadios />
                <NoticeBleButton name="replace" func={replaceColor} />
            </FormWrapper>
        </CenterContainer>
    )
}

export default ReplaceMain;