import React,{useCallback} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { MainContainer } from "../../styles/container";
import { StateType } from "../../redux/stateType";
import { adjustOptions_setBlack } from "../../redux/actions/adjustActions";
import { StdCheckBox } from "../../parts/checkbox/checkboxes";

const { CenterContainer } = MainContainer;

import { AdjustRadios , FillRadios } from "./optionCheckBoxes";

export const FormWrapper = styled.div`
    width: 155px;
    height: 100%;
`;

const AdjustMain = () =>{
    const dispatch = useDispatch();
    const adjustOptions = useSelector((state:StateType)=>state.adjustOptions)
    const handleBlackInk = useCallback((checked)=>dispatch(adjustOptions_setBlack(checked)),[adjustOptions])
    return(
        <CenterContainer>
            <FormWrapper>
                <AdjustRadios />
                <FillRadios />
                <StdCheckBox checked={adjustOptions.IncludeBlack} func={handleBlackInk} name="include black"/>
            </FormWrapper>
        </CenterContainer>
    )
}

export default AdjustMain;