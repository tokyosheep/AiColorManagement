import * as React from "react";
import {useCallback} from "react";
import {Props} from "../../redux/propsType";
import {mapStateProps} from "../../redux/actions/mapStateProps";
import {dispatchProps} from "../../redux/actions/mapDispatchProps";
import {connect} from "react-redux";

import {StdRadioButton} from "../parts/radio";
import {ColorNumberBox} from "../parts/textBox";

const CreateOptions = (props:Props) =>{

    const handleRadioButton = useCallback((e,arg)=>{
        props.set_StartType(arg.prop,e.target.checked);
    },[props.state.patternPoint]);

    const radios = Object.entries(props.state.patternPoint.start).map(([key,value])=>{
        return(<li key={key}><StdRadioButton func={handleRadioButton} name={key} checked={value} arg={{prop:key}}/></li>);
    });

    const handleNumberBox = useCallback((e,type,name,arg)=>{
        const color = {...props.state.patternPoint.color};
        color[arg.prop] = e.target.value;
        props.set_StartPoint(color);
    },[props.state.patternPoint]);

    const colorForms = Object.entries(props.state.patternPoint.color).map(([key,value])=>{
        return(<li key={key}><ColorNumberBox name={key} func={handleNumberBox} value={value} arg={{prop:key}} type={props.state.createPattern.type}/></li>);
    },[props.state.patternPoint,props.state.createPattern.type]);
    return(
        <div className="createOptions">
            <h3 className="head-smal">options</h3>
            <ul className="createOptions__startpoint">
                {radios}
            </ul>
            <ul className="cleretaOptios__pattern">
                {colorForms}
            </ul>
        </div>
    )
}

export default connect(mapStateProps,dispatchProps)(CreateOptions);