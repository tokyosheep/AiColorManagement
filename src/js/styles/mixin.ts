import styled,{css} from "styled-components";
import { rgba , darken } from "polished";

export const CenterPlace = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const YAxe = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const XAxe = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const shineSVG = css<{color:string}>`
    filter: drop-shadow(0px 0px 3px 3px ${props=>rgba(props.color,0.4)});
    stroke:${props=> props.color};
    cursor: pointer;
    padding: 2px;
    margin-right:3px;
    transition: .3s linear;
    &:active{
        stroke:${props=> darken(0.2,props.color)};
    }
`;

export const scrollStyle = css`
    &::-webkit-scrollbar{
        width: 7px;
        height: 0px;
        background: #000;
    } 
    &::-webkit-scrollbar-track{
        background: #222;
    }
    &::-webkit-scrollbar-thumb {
        background: #777;
        border-radius: 5px;
        border: 1px solid #000;
    }
`;