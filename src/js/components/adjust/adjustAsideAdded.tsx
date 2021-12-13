import React,{useCallback} from "react";
import styled,{css} from "styled-components";

import { AmountBox } from "../../parts/colorBox/commonColorBox";
import { shineSVG } from "../../styles/mixin";

const MiniButtonWrapper = styled.div`
    width: 100%;
    height: 25px;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    gap:10px;
`;

const AdjustAddedElm = () =>{
    return(
        <>
            <AmountBox />
        </>
    )
}

export default AdjustAddedElm;