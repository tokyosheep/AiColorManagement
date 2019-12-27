window.onload = () =>{
    "use strict";
    const csInterface = new CSInterface();
    themeManager.init();

    const fs = require("fs");

    const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    const json_path = extensionRoot + "data.json";
    const ButtonEvent = require(`${__dirname}/js/import/ButtonEvent`);
    const SwitchButton = require(`${__dirname}/js/import/switchButton`);

    const createSample = document.getElementById("createSample");
    const colorSpace = document.getElementById("colorSpace");
    const events = ["documentAfterDeactivate","com.adobe.csxs.events.WindowVisibilityChanged"];
    const RGB = document.getElementById("RGB");
    const CMYK = document.getElementById("CMYK");
    const adjust = document.getElementById("adjust");
    const createPattern = document.getElementById("createPattern");
    const switchCMYK = document.getElementById("switchCMYK");
    const switchRGB = document.getElementById("switchRGB");

    const switchTypeCMYK = new SwitchButton(switchCMYK,Array.from(document.getElementsByClassName("cList")));
    const switchTypeRGB = new SwitchButton(switchRGB,Array.from(document.getElementsByClassName("cList")));

    events.forEach(event=>{
        csInterface.addEventListener(event,(e)=>{
            console.log(e);
            getSpace();
        });
    });

    function getSpace(){
        csInterface.evalScript(`$.evalFile("${extensionRoot}getColorSpace.jsx")`,(o)=>{
            colorSpace.textContent = o;
            if(o === "DocumentColorSpace.CMYK")CMYK.checked = true;
            if(o === "DocumentColorSpace.RGB")RGB.checked = true;
        });
    }

    /*
    class CreateColors extends ButtonEvent{
        constructor(btn,jsx){
            super(btn,jsx);
        }

        async handleEvent(){
            const object = [Array.from(document.getElementsByClassName("XColor")),
                            Array.from(document.getElementsByClassName("YColor"))].reduce((acc,current)=>{
                                const elm = current.find(v=>{
                                    return v.checked === true;
                                });
                                acc[elm.name] = elm.value;
                                return acc;
                            },{});
            object.step = document.getElementById("pStep").value;                
            console.log(object);                
            const res = await this.callHostScript(object);
            console.log(res);
        }
    }
    */
    class ColorAxes{
        constructor(className,step,num){
            this.class = Array.from(className);
            this.step = step;
            this.num = num;
        }

        getColorData(){
            const elm = this.class.find(radio=> radio.checked === true);
            const obj = {};
            obj[elm.name] = elm.value;
            obj.num = this.num.value;
            obj.step = this.step.value;
            return obj;
        }
    }

    class PetternLists{
        constructor(className){
            this.class = Array.from(document.getElementsByClassName(className));
        }

        getColorList(){
            console.log(this.class);
            const lists = this.class.reduce((acc,current)=>{
                const step = current.getElementsByClassName("step")[0];
                const num = current.getElementsByClassName("num")[0];
                const data = new ColorAxes(current.getElementsByClassName("patternForm-axes"),step,num);
                acc[current.getElementsByTagName("h3")[0].textContent] = data.getColorData();
                return acc;
            },{});
            console.log(lists);
            return lists;
        }
    }

    class CreateColors extends ButtonEvent{
         constructor(btn,jsx){
             super(btn,jsx);
         }
 
         async handleEvent(){
            console.log(document.forms.ColorType.patternSwitch.value);
            this.lists = new PetternLists(document.forms.ColorType.patternSwitch.value);
            const options = this.lists.getColorList();
            options.type = returnType(document.forms.ColorType.patternSwitch.value);
            await writeJSON(options).catch(err => console.log(err));
            const res = await this.callHostScript(options);
            console.log(res);
            function returnType(value){
                if(value==="patternForm-CMYKList")return "CMYK";
                if(value==="patternForm-RGBList")return "RGB";
                return false;
            }
         }
    }

    const cc = new  CreateColors(createPattern,"createPattern");

    class AdjustColors extends ButtonEvent{
        constructor(btn,jsx){
            super(btn,jsx);
        }

        async handleEvent(){
            const type = this.getColorType(colorSpace.textContent);
            if(!type) return;
            const options = this.getOptions(type,"value");
            console.log(options);
            const res = await this.callHostScript(options);
            console.log(res);
        }

        getColorType(space){
            if(space === "DocumentColorSpace.CMYK")return "CMYK";
            if(space === "DocumentColorSpace.RGB") return "RGB";
            return false;
        }
    }

    const callAdjust = new AdjustColors(adjust,"adjustColor");

    Array.from(document.getElementsByClassName("switch")).forEach(elm=>{
        elm.addEventListener("click",function(){
            console.log(this);
            if(this.checked){
                if(this.value === "createSample"){
                    createSample.classList.remove("hide");
                    adjustColor.classList.add("hide");
                }else{
                    createSample.classList.add("hide");
                    adjustColor.classList.remove("hide");
                }
            }
        });
    });

    function writeJSON(obj){
        return new Promise((resolve,reject)=>{
            fs.writeFile(json_path,JSON.stringify(obj,null,4),(err)=>{//デバッグ用にjson書き出し
                if(err){
                    reject(err);
                }
                resolve(true);
            });
        });
    }
}
