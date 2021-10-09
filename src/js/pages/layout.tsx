import React from "react";
import styled,{createGlobalStyle} from "styled-components";

import useWindow from "./customHooks/windowMode";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
        background: #fff;
    }
`;

const Layout = () =>{
    const [window,setWindow] = useWindow();
    return(
        <>
            <GlobalStyle />
        </>
    )
}

export default Layout;