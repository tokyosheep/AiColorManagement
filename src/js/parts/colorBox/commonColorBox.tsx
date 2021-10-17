import React,{FC} from "react";
import styled from "styled-components";
import { StateType } from "../../redux/stateType";
import { useSelector , useDispatch } from "react-redux";
import { adjustOptions_setAmount } from "../../redux/actions/adjustActions";

import { commonColor_setColor } from "../../redux/actions/commonColorActions";
import { ColorBox , setColorCSS , CMYK , RGB } from "../../redux/commonType";

import { FormBoxWidth } from "../../styles/commonValue";

const BoxContainer = styled.div`
    width: ${FormBoxWidth}px;
    height: 155px;
    margin-top: 5px;
`;

const BoxWrapper = styled.div<{color:string}>`
    width: 100%;
    height: 30px;
    border: 1px solid ${props=>props.color};
    background: #6A6A6A;
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
    &:focus{
        outline: none;
    }
`;

const ColorTitle = styled.div`
    color: #fff;
    font-weight: 300;
    font-size: 15px;
`;
export type ColorSetFunc = (e:React.ChangeEvent<HTMLInputElement>,index:number,key:keyof CMYK | keyof RGB)=>void;
type Props = ColorBox&{func?:ColorSetFunc,colorIndex?:number};

const CommonColorBox:FC<Props> = ({cmyk,rgb,profile,func,colorIndex}) =>{
    const dispatch = useDispatch();
    const color = profile === "CMYK" ? cmyk : rgb;
    const colorList = Object.entries(color).map(([key,value]:[keyof CMYK|keyof RGB,number],index)=>{
        return(
            <BoxWrapper color={setColorCSS(key)} key={index}>
                <NumberBox type="number" value={value} onChange={
                    (e)=>{
                        if(func !== undefined){
                            func(e,colorIndex,key)
                        }else{
                            color[key] = parseFloat(e.target.value);
                            dispatch(commonColor_setColor(profile,color));
                        }
                    }
                }
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
    height: 40px;
`;

export const AmountBox:FC<{}> = () =>{
    const dispatch = useDispatch();
    const options = useSelector((state:StateType)=>state.adjustOptions)
    return(
        <AmountContainer>
            <BoxWrapper color="#000">
                <NumberBox type="number" value={options.amount} onChange={(e)=>dispatch(adjustOptions_setAmount(parseFloat(e.target.value)))} ></NumberBox>
                <ColorTitle >amount</ColorTitle>
            </BoxWrapper>
        </AmountContainer>
    )
}