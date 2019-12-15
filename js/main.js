window.onload = () =>{
    "use strict";
    const csInterface = new CSInterface();
    themeManager.init();

    const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    const json_path = extensionRoot + "data.json";
    const ButtonEvent = require(`${__dirname}/js/import/ButtonEvent`);

    const createSample = document.getElementById("createSample");
    const colorSpace = document.getElementById("colorSpace");
    const events = ["documentAfterDeactivate","com.adobe.csxs.events.WindowVisibilityChanged"];
    const RGB = document.getElementById("RGB");
    const CMYK = document.getElementById("CMYK");
    const adjust = document.getElementById("adjust");
    const createPattern = document.getElementById("createPattern");

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
    })
}
