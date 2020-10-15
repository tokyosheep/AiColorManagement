import * as React from "react";
import {useCallback} from "react";
import {Props} from "../../redux/propsType";
import {mapStateProps} from "../../redux/actions/mapStateProps";
import {dispatchProps} from "../../redux/actions/mapDispatchProps";
import {connect} from "react-redux";

import {SaveStrage} from "../../redux/reducer/type";
import {ColorNumberBox} from "../parts/textBox";
import {StdTextBox} from "../parts/textBox";
import {StdButton} from "../parts/button";
import {SendHostScript} from "../../fileSystem/connectJsx";
import {debugWriteFile} from "../../fileSystem/init";
import {showLoading,hideLoading} from "../../fileSystem/switchLoad";
type CallBackNumber = {
    index:number,
}

const ColorContainer = ({color,index,numFunc,textFunc,loadFunc,switchFunc}:{color:SaveStrage,index:number,numFunc:(e,type:string,name:string,arg)=>void,textFunc:(e,arg)=>void,loadFunc:(e,arg)=>void,switchFunc:(e,arg)=>void}) =>{
    
    const pasteOnDocument = async(a,arg) =>{
        showLoading();
        try{
            const host = new SendHostScript();
            const result = host.callHostScript({type:"pasteColor",colorObj:arg});
            console.log(result);
        }catch(e){

        }finally{
            hideLoading();
        }
    }   

    const colorList = Object.entries(color.color).map(([key,value])=>{
        return (<li key={key}><ColorNumberBox name={key} value={value} func={numFunc} type={color.type} arg={{index:index}}/></li>);
    });
    return(
        <div className="colorContainer">
            <StdTextBox name="name" value={color.name} func={textFunc} arg={{index:index}}/>
            <ul className="colorContainer__colors">
                {colorList}
            </ul>   
            <ul className="colorContainer__buttons">
                <li>
                    <StdButton name="paste" func={pasteOnDocument} arg={color} addClass="deepblue"/>
                </li>
                <li>
                    <StdButton name="load color" func={loadFunc} arg={{index:index}} />
                </li>
                <li>
                    <StdButton name={color.type} func={switchFunc} arg={{index:index,type:color.type}} addClass={color.type}/>
                </li>
            </ul>
        </div>
    )
}

const SaveColorMain = (props:Props) =>{
    const handleNumber = useCallback((e,type:string,name:string,arg:CallBackNumber)=>{
        const colors = [...props.state.saveStrage];
        console.log(colors[arg.index]);
        console.log(name);
        colors[arg.index].color[name] = e.target.value;
        props.set_StarageColor(arg.index,colors[arg.index]);
    },[props.state.saveStrage]);

    const handleText = useCallback((e,arg:CallBackNumber)=>{
        const colors = [...props.state.saveStrage];
        colors[arg.index]["name"] = e.target.value;
        props.set_StarageColor(arg.index,colors[arg.index]);
    },[props.state.saveStrage]);

    const loadDefaultColor = useCallback((e,arg)=>{
        (async()=>{
            showLoading();
            try{
                const colorObj = new SendHostScript(`singleProcess/loadColor.jsx`);
                const result = await colorObj.callJsx();
                if(typeof result === "boolean")return;
                const color = JSON.parse(result);
                console.log(color);
                const colors = [...props.state.saveStrage];
                colors[arg.index].color = color.color;
                props.set_StarageColor(arg.index,colors[arg.index]);
            }catch(e){
                console.log(e);
            }finally{
                hideLoading();
            }
        })();
    },[props.state.saveStrage]);

    const switchColorType = useCallback((e,arg)=>{
        props.set_StrageColorType(arg.index,arg.type === "CMYK" ? "RGB" : "CMYK")
    },[props.state.saveStrage]);

    const StrageList = props.state.saveStrage.map((obj,index)=>{
        return(<li key={index}><ColorContainer color={obj} index={index} numFunc={handleNumber} textFunc={handleText} loadFunc={loadDefaultColor} switchFunc={switchColorType}/></li>)
    });
    return(
        <main className="saveColorMain">
            <ul className="saveColorMain__colorList">
                {StrageList}
            </ul>
        </main>
    )
}

export default connect(mapStateProps,dispatchProps)(SaveColorMain);