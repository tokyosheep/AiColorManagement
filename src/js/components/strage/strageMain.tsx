import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import StrageColorDataBox from "./strageColorBox/strageColorBox";

import { StrageContainer } from "../../styles/container";
import { StateType } from "../../redux/stateType";

const { StrageMainContainer } = StrageContainer;

const ListWrapper = styled.ul`
    list-style:none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const StrageMain = () =>{
    const tempStrageColors = useSelector((state:StateType)=>state.tempStrage);
    const colors = tempStrageColors.map((c,i)=>{
        return(
            <li key={i}>
                <StrageColorDataBox {...c} index={i}/>
            </li>
        )
    });
    return(
        <StrageMainContainer>
            <ListWrapper>
                {colors}
            </ListWrapper>
        </StrageMainContainer>
    )
}

export default StrageMain;