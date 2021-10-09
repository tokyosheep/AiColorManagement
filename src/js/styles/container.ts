import styled from "styled-components";

export const containerSize = {
    width:600,
    height:550
};

export const MainContainer = {
    Container:styled.div`
        display: grid;
        grid-template-columns: 160px 1fr;
        grid-template-rows: 25px 1fr 95px;
        grid-template-areas: 
            "nav nav"
            "colorBox main"
            "strage strage"
        ;
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
        grid-area: colorbox;
    `,
    CenterContainer:styled.main`
        grid-area:main;
        overflow: scroll;
    `,
    StrageContainer:styled.aside`
        grid-area:strage;
        background: #1C1C1C;
        overflow: scroll;
        display: flex;
        justify-content: flex-start;
        gap:10px;
        align-items: center;
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
    StrageMain:styled.main`
        grid-area:main;
        overflow: scroll;
    `
}