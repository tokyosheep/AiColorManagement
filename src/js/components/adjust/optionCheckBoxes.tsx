import React,{ FC , useCallback} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { StdRadioBox } from "../../parts/radioButton/radioButton";
import { processType_check } from "../../redux/actions/adjustActions";
import { commonColor_fillType } from "../../redux/actions/commonColorActions";
import { fills } from "../../redux/reducer/commonColorbox";
import { StateType } from "../../redux/stateType";

const RadioWrapper = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    height: auto;
`;

export const AdjustRadios = () =>{
    const dispatch = useDispatch();
    const processType = useSelector((state:StateType)=>state.processType);
    const checkProcess = useCallback((name)=>dispatch(processType_check(name)),[processType]);
    const processList = Object.entries(processType).map(([key,value],i)=>{
        return (
            <li key={i}>
                <StdRadioBox checked={value} name={key} func={checkProcess} />
            </li>
        )
    });
    return(
        <RadioWrapper>
            {processList}
        </RadioWrapper>
    )
}

export const FillRadios = () =>{
    const dispatch = useDispatch();
    const colorBox = useSelector((state:StateType)=>state.commonColorBox);
    const handleFill = useCallback((name)=>dispatch(commonColor_fillType(name)),[colorBox]);
    const fillList = fills.map((f,i)=>{
        return(
            <li>
                <StdRadioBox checked={colorBox.fill === f} name={f} func={handleFill}/>
            </li>
        )
    });
    return(
        <RadioWrapper>
            {fillList}
        </RadioWrapper>
    )
}