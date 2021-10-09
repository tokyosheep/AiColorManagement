import React,{FC} from "react";
import styled from "styled-components";
import { StateType } from "../../redux/stateType";
import { useSelector , useDispatch } from "react-redux";
import { adjustOptions_setAmount } from "../../redux/actions/adjustActions";

import { commonColor_setColor } from "../../redux/actions/commonColorActions";
import { ColorBox , setColorCSS , CMYK , RGB } from "../../redux/commonType";

const BoxContainer = styled.div`
    width: 150px;
    height: 155px;
`;

const BoxWrapper = styled.div<{color:string}>`
    width: 100%;
    height: 30px;
    border: 1px solid ${props=>props.color};
    background: #6A6A6A;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow:0 0 5px rgba(0,0,0,0.2);
`;

const NumberBox = styled.input`
    border: none;
    width: 65px;
    height: 20px;
    background: #363636;
    color: #fff;
`;

const ColorTitle = styled.div`
    color: #fff;
    font-weight: 300;
    font-size: 15px;
`;

type Props = ColorBox&{func?:(e:React.ChangeEvent<HTMLInputElement>,index:number)=>void,colorIndex?:number};

const CommonColorBox:FC<Props> = ({cmyk,rgb,profile,func,colorIndex}) =>{
    const dispatch = useDispatch();
    const color = profile === "CMYK" ? cmyk : rgb;
    const colorList = Object.entries(color).map(([key,value]:[keyof CMYK|keyof RGB,number],index)=>{
        return(
            <BoxWrapper color={setColorCSS(key)} key={index}>
                <NumberBox type="number" value={value} onChange={
                    (e)=>{
                    func ? func(e,colorIndex) :
                        color[key] = parseFloat(e.target.value);
                        dispatch(commonColor_setColor(profile,color));
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




export const AmountBox:FC<{}> = () =>{
    const dispatch = useDispatch();
    const options = useSelector((state:StateType)=>state.adjustOptions)
    return(
        <BoxWrapper color="#000">
            <NumberBox value={options.amount} onChange={(e)=>dispatch(adjustOptions_setAmount(parseFloat(e.target.value)))} ></NumberBox>
        </BoxWrapper>
    )
}