import React,{useCallback} from "react";
import styled,{css} from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import { FiPercent , FiPlus } from "react-icons/fi";

import { AmountBox } from "../../parts/colorBox/commonColorBox";
import { shineSVG } from "../../styles/mixin";
import { commonBlue } from "../../styles/commonColor";
import { lighten } from "polished";

const MiniButtonWrapper = styled.div`
    width: 100%;
    height: 25px;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    gap:10px;
`;

const miniButtonStyle = css`
    ${shineSVG};
    width: 23px;
    height: 23px;
    background: linear-gradient(#333,#111);
    border-radius: 3px;
`;

const PercentBtn = styled(FiPercent)`
    ${miniButtonStyle};
`;

const PlusButton = styled(FiPlus)`
    ${miniButtonStyle};
`;

const AdjustAddedElm = () =>{
    return(
        <>
            <AmountBox />
            {/*<MiniButtonWrapper>
                <PercentBtn color={lighten(0.2,commonBlue)}></PercentBtn>
                <PlusButton color={lighten(0.2,commonBlue)}></PlusButton>
            </MiniButtonWrapper>*/}
        </>
    )
}

export default AdjustAddedElm;