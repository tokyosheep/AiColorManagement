import * as React from "react";
import {useCallback} from "react";
import {Props} from "../../redux/propsType";
import {mapStateProps} from "../../redux/actions/mapStateProps";
import {dispatchProps} from "../../redux/actions/mapDispatchProps";
import {connect} from "react-redux";
import {Axe,ColorType,PatterCMYK,PatternRGB,CreatePattern} from "../../redux/reducer/type";

import CreateOptions from "./createOptions";
import {ColorTypeCheck} from "../parts/checkBox";
import {StdNumberBox} from "../parts/textBox";
import {ColorTypeBtn} from "../parts/button";
import {HostScriptButton} from "../parts/JsxButton";

type AxeProp = {
    axe:"Xaxe"|"Yaxe"|"Zaxe",
    colorType:ColorType,
    name:string
}

const initCMYK = {
    cyan:0,
    magenta:0,
    yellow:0,
    black:0
}

const initRGB = {
    red:0,
    green:0,
    blue:0
}

type HandleNumber = (e:React.ChangeEvent,arg:AxeProp)=>void;

const ColorButtonForms = ({axe,axeName,colorType,radioFunc,numberFunc}:
    {axe:Axe,colorType:ColorType,axeName:string,radioFunc:HandleNumber,numberFunc:HandleNumber}) =>{
        
    const checkButtons = Object.entries(axe[colorType]).map(([key,value])=>{
        return(<li key={key}><ColorTypeCheck name={key} func={radioFunc} checked={value} arg={{name:key,colorType:colorType,axe:axeName}}/></li>);
    });
    return(
        <div className="axeRange">
            <h3 className="head-small">{axeName}</h3>
            <ul className="axeRange__list">
                {checkButtons}
            </ul>
            <ul className="axeRange__numbers">
                <li><StdNumberBox name="number" value={axe.number} max={20} min={0} step={1} func={numberFunc} arg={{name:"number",colorType:colorType,axe:axeName}}/></li>
                <li><StdNumberBox name="step" value={axe.step} max={20} min={1} step={1} func={numberFunc} arg={{name:"step",colorType:colorType,axe:axeName}}/></li>
            </ul>
        </div>
    )
}

const CreateMain = (props:Props) =>{
    
    const handleColorRadio = useCallback((e,arg:AxeProp)=>{
        const colorObj = {...props.state.createPattern};
        colorObj[arg.axe][arg.colorType][arg.name] = e.target.checked;
        props.set_Pattern(arg.axe,colorObj[arg.axe]);
    },[props.state.createPattern]);

    const handleNumberForm = useCallback((e,arg:AxeProp)=>{
        const colorObj = {...props.state.createPattern};
        colorObj[arg.axe][arg.name] = e.target.value;
        props.set_Pattern(arg.axe,colorObj[arg.axe]);
    },[props.state.createPattern]);

    const handleColorType = useCallback((name)=>{
        props.set_PetternType(name === "RGB" ? "CMYK" : "RGB");
        props.set_StartPoint(name === "RGB" ? initCMYK : initRGB);
    },[props.state.createPattern.type,props.state.createPattern.type]);
    const create:CreatePattern = props.state.createPattern;
    const axeType:ColorType = props.state.createPattern.type;
    const colorList = Object.entries(create).map(([key,value])=>{
        if(typeof value !== "string"){
            return (<li key={key}><ColorButtonForms axe={value} colorType={axeType} axeName={key} radioFunc={handleColorRadio} numberFunc={handleNumberForm}/></li>);
        }
    })
    return(
        <main className="createMainForm">
            <ul className="createMainForm__list">
                {colorList}
            </ul>
            <CreateOptions colorType={props.state.createPattern.type}/>
            <div className="createMainForm__buttons">
                <ColorTypeBtn name={props.state.createPattern.type} func={handleColorType}/>
                <HostScriptButton name="createPattern" object={{type:"createPattern",color:{data:props.state.createPattern,option:props.state.patternPoint}}}/>
            </div>
        </main>
    )
}

export default connect(mapStateProps,dispatchProps)(CreateMain);