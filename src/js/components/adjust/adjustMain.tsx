import * as React from "react";
import {useCallback} from "react";
import {Props} from "../../redux/propsType";
import {mapStateProps} from "../../redux/actions/mapStateProps";
import {dispatchProps} from "../../redux/actions/mapDispatchProps";
import {connect} from "react-redux";

import {ColorNumberBox} from "../parts/textBox";
import {ColorTypeBtn} from "../parts/button";
import {HostScriptButton} from "../parts/JsxButton";

const AdjustColor = (props:Props) =>{

    const handleNumberForm = useCallback((e,type,name)=>{
        const color = {...props.state.colorValues.color};
        color[type][name] =  e.target.value;
        props.set_ColorValue(type,color[type]);
    },[props.state.colorValues]);
    const handleColorType = useCallback((name)=>props.set_ColorType(name === "RGB" ? "CMYK" : "RGB"),[props.state.colorValues]);
    const RGBFObj = Object.entries(props.state.colorValues.color.RGB).map(([key,value])=>({key:key,value:value}));
    const RGBForm = RGBFObj.map(obj=><li key={obj.key}><ColorNumberBox name={obj.key} value={obj.value} type="RGB" func={handleNumberForm}/></li>);
    const CMYKObj = Object.entries(props.state.colorValues.color.CMYK).map(([key,value])=>({key:key,value:value}));
    const CMYKForm = CMYKObj.map(obj=><li key={obj.key}><ColorNumberBox name={obj.key} value={obj.value} type="CMYK" func={handleNumberForm}/></li>);
    return(
        <main className="adjustColors" >
            <ul className={"adjustList adjustColors__RGB " + (props.state.colorValues.type === "RGB" ? "" : "unbisible")}>
                {RGBForm}
            </ul>
            <ul className={"adjustList adjustColors__CMYK " + (props.state.colorValues.type === "CMYK" ? "" : "unbisible")}>
                {CMYKForm}
            </ul>
            <ColorTypeBtn func={handleColorType} name={props.state.colorValues.type}/>
            <HostScriptButton name="adjust" object={{type:"adjust",color:props.state.colorValues}}/>
        </main>
    )
}

export default connect(mapStateProps,dispatchProps)(AdjustColor);