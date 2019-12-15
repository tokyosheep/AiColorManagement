"use strict";
const csInterface = new CSInterface();
const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
module.exports = class EventButton{
        constructor(btn,jsx){
            this.btn = btn;
            this.jsx = jsx;
            this.btn.addEventListener("click",this);
        }
        
        handleEvent(){}
        
        callHostScript(obj){
            return new Promise((resolve,reject)=>{
                csInterface.evalScript(`${this.jsx}(${JSON.stringify(obj)})`,(o)=>{
                    if(o === "false"){
                        reject(false);
                    }                
                    resolve(o);
                });
            });
        }
        
        callJsx(){
            return new Promise((resolve,reject)=>{
                csInterface.evalScript(`$.evalFile("${extensionRoot}${this.jsx}")`,(o)=>{
                    if(!o||o=="false")reject(false);
                    resolve(o);
                });
            });
        }
    
        getOptions(className,elm){
            const options = Array.from(document.getElementsByClassName(className));
            const opt = options.reduce((acc,current)=>{
                acc[current.id] = current[elm];
                return acc;
            },{});
            console.log(opt);
            return opt;
        }
}