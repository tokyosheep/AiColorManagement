import * as React from "react";
import {SendHostScript} from "../../fileSystem/connectJsx";

import {debugWriteFile} from "../../fileSystem/init";
import {showLoading,hideLoading} from "../../fileSystem/switchLoad";

export const HostScriptButton = ({name,object}:{name:string,object:Object}) =>{
    const hostProcess = async(obj) =>{
        showLoading();
        try{
            const hostScript = new SendHostScript();
            const result = await hostScript.callHostScript(obj);
            debugWriteFile("option.json",obj);
            console.log(result);
        }catch(e){
            console.log(e);
        }finally{
            hideLoading();
        }
    }
    return(
        <button className="jsxButton hostScript" onClick={()=>hostProcess(object)}>{name}</button>
    )
}

export const SingleProcessButton = ({name,func}:{name:string,func:string}) =>{
    const singleProcess = async(func:string) =>{
        showLoading();
        try{
            const hostScript = new SendHostScript(`singleProcess/${func}.jsx`);
            const result = await hostScript.callJsx();
            console.log(result);
        }catch(e){
            console.log(e);
        }finally{
            hideLoading();
        }
    }
    return(
        <button className="jsxButton single" onClick={()=>singleProcess(func)}>{name}</button>
    )
}