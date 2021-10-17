import React,{FC} from "react";
import styled from "styled-components";

import { FormBoxWidth } from "../../styles/commonValue";

const TextBoxContainer = styled.div`
    width: ${FormBoxWidth}px;
    height: 45px;
`;

const TextBoxName = styled.span`
    color: #fff;
    font-size: 8px;
    font-weight: 300;
`;

const StdTextBoxForm = styled.input`
    width: 100%;
    height: 25px;
    border: 1px solid #aaa;
    border-radius: 5px;
    color: #fff;
    background: #262525;
    box-sizing:border-box;
    &:focus{
        outline: none;
    }
`;

export type TextBoxProps = {
    value:string,
    name:string,
    func:(e:React.ChangeEvent<HTMLInputElement>,name:string)=>void
}

export const StdTextBox:FC<TextBoxProps> = ({name,value,func}) =>{
    return(
        <TextBoxContainer>
            <TextBoxName>{name}</TextBoxName>
            <StdTextBoxForm type="text" value={value} onChange={(e)=>func(e,name)}></StdTextBoxForm>
        </TextBoxContainer>
    )
}