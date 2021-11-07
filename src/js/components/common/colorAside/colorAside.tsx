import React,{FC} from "react";
import { useSelector , useDispatch } from "react-redux";

import CommonColorBox  from "../../../parts/colorBox/commonColorBox";
import { ProfileButton , WriteFlatButton , WriteKeyBUtton } from "../../../parts/button/buttons";

import { MainContainer } from "../../../styles/container";
import { StateType } from "../../../redux/stateType";

import { SendHostScript } from "../../../fileSystem/connext";

const { ColorBoxContainer } = MainContainer;


const ColorAside:FC<{Elm:FC}> = ({Elm}) =>{
    const color = useSelector((state:StateType)=>state.commonColorBox);
    const writeColorData:(name:string)=>Promise<void> = async(name) =>{
        const connect = new SendHostScript();
        const r = await connect.callHostScript(name !== "write key" ?
            {type:"writeFlatData",fill:"fillColor"} :
            {type:"writeKeyData",fill:"strokeColor"}
        );
        console.log(r);
    }
    return(
        <ColorBoxContainer>
            <CommonColorBox {...color}/>
            <ProfileButton profile={color.profile}/>
            <Elm />
            <WriteKeyBUtton name="write key" func={writeColorData} />
            <WriteFlatButton name="write falt" func={writeColorData} />
        </ColorBoxContainer>
    )
}

export default ColorAside;