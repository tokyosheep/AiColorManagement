import React,{ FC , useCallback } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";

import CommonColorBox,{ColorSetFunc} from "../../../parts/colorBox/commonColorBox";
import { OtherStdButton , ButtonFunc } from "../../../parts/button/buttons";
import { StdTextBox } from "../../../parts/textbox/textBox";
import { StrageColorBox } from "../../../redux/reducer/strage";
import { Profile } from "../../../redux/commonType";
import { StateType } from "../../../redux/stateType";
import { tempStrage_setName , tempStrage_setColor , tempStrage_setProfile } from "../../../redux/actions/strageActions";

import { SendHostScript } from "../../../fileSystem/connext";
import { alertFromJSX } from "../../../fileSystem/init";
import { ExportedObjType } from "../../../redux/commonType";

const BoxWrapper = styled.div`
    width: 170px;
    padding: 10px;
    height: 400px;
    background: #262525;
    margin-bottom: 5px;
    & > *{
        margin-bottom: 5px;
    }
`;

export type StrageBoxProps = StrageColorBox & {index:number};

const StrageColorDataBox:FC<StrageBoxProps> = (props) =>{
    const dispatch = useDispatch();
    const stageColors = useSelector((state:StateType)=>state.tempStrage);
    const handleNameValue = useCallback((e:React.ChangeEvent<HTMLInputElement>,name:string)=>{
        dispatch(tempStrage_setName(props.index,e.target.value));
    },[props.name]);

    const handleColorObj:ColorSetFunc = useCallback((e,index,key)=>{
        const color = props.profile === "CMYK" ? props.cmyk : props.rgb;
        color[key] = parseFloat(e.target.value);
        dispatch(tempStrage_setColor(index,props.profile,{...color}));
    },[props]);

    const handleProfile:ButtonFunc = useCallback((e,profile:Profile)=>{
        dispatch(tempStrage_setProfile(props.index,profile==="CMYK" ? "RGB" : "CMYK"));
    },[props]);

    const handleLoadColor = useCallback(()=>{
        (async()=>{
            try{
                const host = new SendHostScript("loadColor.jsx");
                const o = await host.callJsx();
                if(typeof o ==="boolean")return;
                const obj:ExportedObjType = JSON.parse(o);
                dispatch(tempStrage_setColor(props.index,obj.space,obj.color));
                dispatch(tempStrage_setProfile(props.index,obj.space));
                if(typeof obj.name === "string")dispatch(tempStrage_setName(props.index,obj.name));
            }catch(e){
                await alertFromJSX(e);
            }
        })();
    },[props]);

    const pasteColor = async() =>{
        const connect = new SendHostScript();
        const r = await connect.callHostScript({type:"pasteColor",
            colorObj:{
                color:{...stageColors[props.index][stageColors[props.index].profile.toLowerCase()]},
                type:props.profile,
                name:stageColors[props.index].name
            }
        });
        console.log(r);
        /*
        var obj = {type:pasteColor,colorObj:{"type":"CMYK","name":"color","color":
            {"cyan":30,"magenta":90,"yellow":0,"black":0}
        }}
        pasteColor(obj);
        */
    }
    return(
        <BoxWrapper>
            <StdTextBox name="name" value={props.name} func={handleNameValue} />
            <CommonColorBox {...props} colorIndex={props.index} func={handleColorObj} />
            <OtherStdButton name={props.profile} func={(e)=>handleProfile(e,props.profile)}/>
            <OtherStdButton name="Load color" func={handleLoadColor} />
            <OtherStdButton name="Paste" func={pasteColor} />
        </BoxWrapper>
    )
}

export default StrageColorDataBox;