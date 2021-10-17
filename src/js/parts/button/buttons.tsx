import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useDispatch , useSelector } from "react-redux";

import { commonColor_setProfile , commonColor_setColor } from "../../redux/actions/commonColorActions";
import { Profile } from "../../redux/commonType";
import { commonNavy } from "../../styles/commonColor";
import { darken } from "polished";
import { StateType } from "../../redux/stateType";

import { FormBoxWidth } from "../../styles/commonValue";

type ProfileProps = {
    profile:Profile,
}

const StdButtonStyle = styled.button`
    border: none;
    background: ${commonNavy};
    color: #fff;
    font-weight: 300;
    width: ${FormBoxWidth}px;
    height: 35px;
    cursor:pointer;
    &:active{
        background: ${commonNavy};
    }
`;

export const ProfileButton:FC<ProfileProps> = ({profile}) =>{
    const dispatch = useDispatch();
    return(
        <StdButtonStyle onClick={()=>dispatch(commonColor_setProfile(profile==="CMYK" ? "RGB" : "CMYK"))}>{profile}</StdButtonStyle>
    )
}

export type ButtonFunc = (name:string,arg?:unknown)=>void;
export type StdProps = {
    name:string,
    arg?:unknown,
    func:ButtonFunc
}

export const OtherStdButton:FC<StdProps> = ({name,func,arg}) =>{
    return(
        <StdButtonStyle onClick={()=>func(name,arg)} >{name}</StdButtonStyle>
    )
}

const WriteButtonStyle = styled(StdButtonStyle)`
    position: absolute;
    bottom: 10px;
    display: block;
`;

export type WriteBtnProps = {
    name:string,
    func:(name:string)=>Promise<void>
}

export const WriteFlatButton:FC<WriteBtnProps> = ({name,func}) =>{
    return(
        <WriteButtonStyle  onClick={()=>func(name)} >{name}</WriteButtonStyle >
    )
}

const WriteKeyButtonStyle = styled(StdButtonStyle)`
    position: absolute;
    bottom: 55px;
    display: block;
`;

export const WriteKeyBUtton:FC<WriteBtnProps> = ({name,func}) =>{
    return(
        <WriteKeyButtonStyle onClick={()=>func(name)} >{name}</WriteKeyButtonStyle>
    )
}

const noticebleColor = "#01B95D";

const NoticebleColor = styled(StdButtonStyle)`
    background: ${noticebleColor};
    &:active{
        background: ${darken(0.2,noticebleColor)};
    }
`;

export const NoticeBleButton:FC<StdProps> = ({name,func,arg}) =>{
    return <NoticebleColor onClick={()=>func(name,arg)}>{name}</NoticebleColor>
}


const LoadCommonStyle = styled(StdButtonStyle)`
    margin-top: 5px;
`;

import { SendHostScript } from "../../fileSystem/connext";
import { alertFromJSX } from "../../fileSystem/init";
import { ExportedObjType } from "../../redux/commonType";

export const LoadCommonColor = () =>{
    const dispatch = useDispatch();
    const colorObj = useSelector((state:StateType)=>state.commonColorBox);
    const loadColor = useCallback(()=>{
        (async()=>{
            try{
                const host = new SendHostScript("loadColor.jsx");
                const o = await host.callJsx();
                if(typeof o ==="boolean")return;
                const obj:ExportedObjType = JSON.parse(o);
                dispatch(commonColor_setColor(obj.space,obj.color));
                dispatch(commonColor_setProfile(obj.space));
            }catch(e){
                await alertFromJSX(e);
            }
        })();
    },[colorObj]);
    return(
        <>
            <LoadCommonStyle name="load color" onClick={loadColor}>
                load color
            </ LoadCommonStyle >
        </>
    )
}