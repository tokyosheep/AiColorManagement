import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import CommonColorBox,{ColorSetFunc} from "../../../parts/colorBox/commonColorBox";
import { OtherStdButton , ButtonFunc } from "../../../parts/button/buttons";
import { StdTextBox } from "../../../parts/textbox/textBox";
import { StrageColorBox } from "../../../redux/reducer/strage";
import { Profile } from "../../../redux/commonType";
import { tempStrage_setName , tempStrage_setColor , tempStrage_setProfile } from "../../../redux/actions/strageActions";


const BoxWrapper = styled.div`
    width: 170px;
    padding: 10px;
    height: 370px;
    background: #262525;
`;

export type StrageBoxProps = StrageColorBox & {index:number};

const StrageColorBox:FC<StrageBoxProps> = (props) =>{
    const dispatch = useDispatch();
    const handleNameValue = useCallback((e:React.ChangeEvent<HTMLInputElement>,name:string)=>{
        dispatch(tempStrage_setName(props.index,e.target.value));
    },[props.name]);

    const handleColorObj:ColorSetFunc = useCallback((e,index,key)=>{
        const color = props.profile === "CMYK" ? props.cmyk : props.rgb;
        color[key] = parseFloat(e.target.value);
        dispatch(tempStrage_setColor(index,props.profile,{...color}));
    },[props]);

    const handleProfile:ButtonFunc = useCallback((e,profile:Profile)=>{
        dispatch(tempStrage_setProfile(props.index,profile==="CMYK" ? "RGB" : "CMYK"));
    },[props.profile]);

    const handleLoadColor = useCallback(()=>{
        (async()=>{

        })();
    },[props]);

    const pasteColor = async() =>{

    }
    return(
        <BoxWrapper>
            <StdTextBox name="name" value={props.name} func={handleNameValue} />
            <CommonColorBox {...props} colorIndex={props.index} func={handleColorObj} />
            <OtherStdButton name="Profile" func={handleProfile}/>
            <OtherStdButton name="Load color" func={handleLoadColor} />
            <OtherStdButton name="Paste" func={pasteColor} />
        </BoxWrapper>
    )
}

export default StrageColorBox;