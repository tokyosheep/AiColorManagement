import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useDispatch , useSelector } from "react-redux";

import { StdRadioBox } from "../../../../parts/radioButton/radioButton";
import { StdCheckBox } from "../../../../parts/checkbox/checkboxes";

import { originPoint_check , centerPoint_check } from "../../../../redux/actions/createActions";
import { StateType } from "../../../../redux/stateType";

const RadioWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 10px 0px;
    & > *{
        margin-bottom: 5px;
    }
`;

const AsideAddedForm = () =>{
    const dispatch = useDispatch();
    const originPoint = useSelector((state:StateType)=>state.createColorOriginPoint);
    const isCenter = useSelector((state:StateType)=>state.centerPoint);
    const handleOriginPoint = useCallback((e,value)=>{
        dispatch(originPoint_check(value));
    },[originPoint]);
    const handleCenterPoint = useCallback((e,value)=>{
        dispatch(centerPoint_check());
    },[isCenter]);
    return(
        <>
            <RadioWrapper>
                <StdRadioBox name="selected" checked={originPoint === "selected"} func={handleOriginPoint} />
                <StdRadioBox name="colorForm" checked={originPoint === "colorForm"} func={handleOriginPoint}/>
            </RadioWrapper>
            <StdCheckBox name="as a center" checked={isCenter} func={handleCenterPoint} />
        </>
    )
}

export default AsideAddedForm;