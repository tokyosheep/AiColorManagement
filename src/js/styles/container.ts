import styled from "styled-components";
import { scrollStyle } from "./mixin";

export const containerSize = {
    width:600,
    height:550
};

export const MainContainer = {
    Container:styled.div`
    width: 100%;
    height: 550px;
        display: grid;
        grid-template-columns: 160px 1fr;
        grid-template-rows: 25px 1fr 95px;
        grid-template-areas: 
            "nav nav"
            "colorBox main"
            "strage strage"
        ;
        position: relative;
        margin: 0;
    `,
    NavContainer:styled.nav`
        display: flex;
        justify-content: flex-start;
        background: #13105D;
        grid-area:nav;
        gap:1px;
    `,
    ColorBoxContainer:styled.aside`
        padding: 10px;
        grid-area: colorBox;
        position: relative;
    `,
    CenterContainer:styled.main`
        grid-area:main;
        overflow: scroll;
        padding: 10px;
        ${scrollStyle};
    `,
    StrageContainer:styled.aside`
        grid-area:strage;
        background: #1C1C1C;
        overflow: scroll;
        display: flex;
        justify-content: flex-start;
        gap:10px;
        align-items: center;
        ${scrollStyle};
    `
}

export const StrageContainer = {
    Container:styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 25px 1fr;
        grid-template-areas: 
            "nav"
            "main"
            ;
    `,
    NavContainer:styled.nav`
        display: flex;
        justify-content: flex-start;
        background: #13105D;
        grid-area:nav;
        gap:1px;
    `,
    StrageMainContainer:styled.main`
        grid-area:main;
        overflow: scroll;
    `
}