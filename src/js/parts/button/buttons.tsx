import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useDispatch , useSelector } from "react-redux";

import { commonColor_setProfile , commonColor_setColor } from "../../redux/actions/commonColorActions";
import { Profile } from "../../redux/commonType";
import { commonNavy } from "../../styles/commonColor";
import { darken } from "polished";
import { StateType } from "../../redux/stateType";

type ProfileProps = {
    profile:Profile,
}

const StdButtonStyle = styled.button`
    border: none;
    background: ${commonNavy};
    color: #fff;
    font-weight: 300;
    cursor: pointer;
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

type StdProps = {
    name:string,
    arg?:unknown,
    func:(name:string,arg?:unknown)=>void
}

export const OtherStdButton:FC<StdProps> = ({name,func,arg}) =>{
    return(
        <StdButtonStyle onClick={()=>func(name,arg)} >{name}</StdButtonStyle>
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

export const LoadColor = () =>{
    const dispatch = useDispatch();
    const colorObj = useSelector((state:StateType)=>state.commonColorBox);
    const handleLoadColor = useCallback(()=>{
        (async()=>{
            //dispatch(commonColor_setColor());
        })();
    },[colorObj])
    return(
        <>
            <OtherStdButton name="load color" />
        </>
    )
}