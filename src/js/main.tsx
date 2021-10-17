import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createGlobalStyle} from "styled-components";
import configStore from "./redux/store/store";
import Layout from "./pages/layout";

const store = configStore();

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
        background: #464646;
    }   
`;

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <Layout />
    </Provider>,
    document.getElementById("root")
);