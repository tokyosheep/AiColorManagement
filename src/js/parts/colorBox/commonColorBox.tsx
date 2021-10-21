import React,{FC} from "react";
import styled from "styled-components";
import { StateType } from "../../redux/stateType";
import { useSelector , useDispatch } from "react-redux";
import { adjustOptions_setAmount } from "../../redux/actions/adjustActions";

import { commonColor_setColor } from "../../redux/actions/commonColorActions";
import { ColorBox , setColorCSS , CMYK , RGB } from "../../redux/commonType";

import { FormBoxWidth } from "../../styles/commonValue";
import {darken} from "polished";

const BoxContainer = styled.div`
    width: ${FormBoxWidth}px;
    height: 155px;
    margin-top: 5px;
`;

const BoxWrapper = styled.div<{color:string,disabled:boolean}>`
    width: 100%;
    height: 30px;
    border: 1px solid ${props=>props.color};
    background: ${props=>props.disabled ? darken(0.2,"#6A6A6A") : "#6A6A6A"};
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    align-items: center;
    box-shadow:0 0 5px rgba(0,0,0,0.2);
    box-sizing:border-box;
    margin-bottom: 5px;
`;

const NumberBox = styled.input`
    border: none;
    width: 65px;
    height: 20px;
    background: #363636;
    color: #fff;
    transition: .3s linear;
    &:focus{
        outline: none;
    }
    &:disabled{
        color: #999;
        background: #232323;
    }
`;

const ColorTitle = styled.div`
    color: #fff;
    font-weight: 300;
    font-size: 15px;
`;
export type ColorSetFunc = (e:React.ChangeEvent<HTMLInputElement>,index:number,key:keyof CMYK | keyof RGB)=>void;
type Props = ColorBox&{func?:ColorSetFunc,colorIndex?:number};

const setMax:(num:number,profile:"RGB"|"CMYK")=>number =(num,profile)=>{
    const max = profile === "RGB" ? 255 : 100;
    return max < Math.abs(num) ? max : num;
}

const CommonColorBox:FC<Props> = ({cmyk,rgb,profile,func,colorIndex}) =>{
    const dispatch = useDispatch();
    const color = profile === "CMYK" ? cmyk : rgb;
    const colorList = Object.entries(color).map(([key,value]:[keyof CMYK|keyof RGB,number],index)=>{
        return(
            <BoxWrapper color={setColorCSS(key)} key={index} disabled={false}>
                <NumberBox type="number" value={value} onChange={
                    (e)=>{
                        if(func !== undefined){
                            func(e,colorIndex,key)
                        }else{
                            color[key] = setMax(parseFloat(e.target.value),profile);
                            dispatch(commonColor_setColor(profile,color));
                        }
                    }
                }
                max={profile === "CMYK" ? 100 : 255}
                min={profile === "CMYK" ? -100 : -255}
                step="any"
                ></NumberBox>
                <ColorTitle >{key}</ColorTitle>
            </BoxWrapper>
        )
    })
    return(
        <BoxContainer>
            {colorList}
        </BoxContainer>
    )
}

export default CommonColorBox;


const AmountContainer = styled(BoxContainer)`
    
`;

export const AmountBox:FC<{}> = () =>{
    const dispatch = useDispatch();
    const options = useSelector((state:StateType)=>state.adjustOptions);
    const processType = useSelector((state:StateType)=>state.processType);
    const disabled = !processType.Brightness && !processType.Saturation;
    return(
        <AmountContainer >
            <BoxWrapper color="#000" disabled={disabled}>
                <NumberBox type="number" 
                    disabled={disabled} 
                    value={options.amount} 
                    onChange={(e)=>dispatch(adjustOptions_setAmount(parseFloat(e.target.value)))}
                    min={-100} max={100}
                    step={1}
                ></NumberBox>
                <ColorTitle >amount</ColorTitle>
            </BoxWrapper>
        </AmountContainer>
    )
}