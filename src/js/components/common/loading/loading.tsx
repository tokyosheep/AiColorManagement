import React,{FC, useState} from "react";
import styled,{keyframes} from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { CenterPlace , XAxe } from "../../../styles/mixin";
import { StateType } from "../../../redux/stateType";

const fading = keyframes`
    0%{
        opacity: 0.2;
    }

    50%{
        opacity: 1;
    }

    100%{
        opacity: 0.2;
    }
`;

const stretching = keyframes`
    0%{
        transform: scaleY(0.2);
    }

    50%{
        transform: scaleY(1);
    }

    100%{
        transform: scaleY(0.2);
    }
`;

const OverLayer = styled.div<{isLoad:boolean}>`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: ${props=>props.isLoad ? "bloack" : "none"};
    margin: 0;
`;

const BarWrapper = styled.ul`
    list-style:none;
    padding: 0;
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    ${CenterPlace};
`;

const Bar = styled.li<{lag:number}>`
    width: 10px;
    height: 100%;
    background: #fff;
    transform: scaleY(0.2);
    animation: ${stretching} .6s ${props=>props.lag/10}s infinite ease;
`;

const LoadingText = styled.div`
    font-size: 25px;
    ${XAxe};
    top: 70%;
    color: #fff;
    font-weight: 300;
    animation: ${fading} .9s  infinite linear;
`;

const LoadingPanel = () =>{
    const isLoad = useSelector((state:StateType)=>state.isLoading);
    const bars = new Array(6).fill(null);
    const batList = bars.map((n,i)=><Bar lag={i} key={i}></Bar>);
    return(
        <OverLayer isLoad={isLoad}>
            <BarWrapper>
                {batList}
            </BarWrapper>
            <LoadingText>Loading...</LoadingText>
        </OverLayer>
    )
}

export default LoadingPanel;