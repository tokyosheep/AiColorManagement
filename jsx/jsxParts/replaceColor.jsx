
/*
{
    color:{
        cmyk:{...initCMYK},
        rgb:{...initRGB},
        profile:"CMYK",
        name:"color"
    }|{
        amount:number
    },
    fill:key||fill||both,
    type:"sturation"||"brightness"||"replace"||"additional"||"AddRatio"
}
*/
/*
#include "../partial/matchColorSpace.jsx";
#include "./setColors.jsx";

var obj = {
    "colorObj": {
        "rgb": {
            "red": 0,
            "blue": 100,
            "green": 250
        },
        "cmyk": {
            "cyan": 0,
            "magenta": 0,
            "yellow": 0,
            "black": 0
        },
        "profile": "RGB",
        "fill": "both"
    },
    "type": "replace"
};
replaceColor(obj);
*/
function turnFillName(fill){
    switch(fill){
        case "flat":
        return "fillColor";

        case "key":
        return "strokeColor";

        default:
        return "both";
    }
}
function replaceColor(obj){
    var FillColor = function(obj){
        if(obj.type==="sturation"||obj.type==="brightness"){
            this.color = parseFloat(obj.colorObj.amount);
        }else{
            this.color = obj.colorObj[obj.colorObj.profile.toLowerCase()];
        }
        this.max = obj.colorObj.profile === "RGB" ? 255 : 100 ;
        this.profile = obj.colorObj.profile;
        this.fill = turnFillName(obj.colorObj.fill)//strokeColor or fillColor
        this.processType = obj.type;
        this.includeBlack = obj.colorObj.includeBlack !== undefined ? obj.colorObj.includeBlack : false;
    }

    function getRatio(num,percent){
        return parseInt(num*percent)/100;
    }

    function addRatio(num,percent,max){
        return setMaxMin(num + getRatio(num,percent,max));
    }

    FillColor.prototype.replace = function(targetItem){
        var color = this.profile === "RGB" ? setRGB(this.color) : setCMYK(this.color) ;
        if(this.fill!=="both"){
            targetItem[this.fill] = color;
        }else{
            targetItem.fillColor = color;
            targetItem.strokeColor = color;
        }
    }

    FillColor.prototype.addPercent = function(targetItem){
        for(var key in this.color){
            if(this.fill!=="both"){
                targetItem[this.fill][key] = addRatio(parseFloat(this.item[this.fill][key]),parseFloat(this.color[key]),this.max);
            }else{
                targetItem.strokeColor[key] = addRatio(parseFloat(this.item.strokeColor[key]),parseFloat(this.color[key]),this.max);
                targetItem.fillColor[key] = addRatio(parseFloat(this.item.fillColor[key]),parseFloat(this.color[key]),this.max);
            }
        }
    }

    FillColor.prototype.brightness = function(targetItem){
        for(var key in this.color){
            if( key==="black" && !this.includeBlack)return;
            if(this.fill!=="both"){
                targetItem[this.fill][key] = addRatio(parseFloat(this.item[this.fill][key]),parseFloat(this.color),this.max);
            }else{
                targetItem.strokeColor[key] = addRatio(parseFloat(this.item.strokeColor[key]),parseFloat(this.color),this.max);
                targetItem.fillColor[key] = addRatio(parseFloat(this.item.fillColor[key]),parseFloat(this.color),this.max);
            }
        }
    }

    FillColor.prototype.Saturation = function(targetItem){
        for(var key in this.color){
            if(this.fill!=="both"){
                
            }else{

            }
        }
    }
    
    FillColor.prototype.additional = function(targetItem){
        for(var key in this.color){
            try{
                if(this.fill!=="both"){
                    targetItem[this.fill][key] = setMaxMin(parseFloat(this.item[this.fill][key]) + parseFloat(this.color[key]),this.max);
                }else{
                    targetItem.strokeColor[key] = setMaxMin(parseFloat(this.item.strokeColor[key]) + parseFloat(this.color[key]),this.max);
                    targetItem.fillColor[key] = setMaxMin(parseFloat(this.item.fillColor[key]) + parseFloat(this.color[key]),this.max);
                }
            }catch(e){
                continue;
            }
        }
    }

    FillColor.prototype.setColor = function(targetItem){
        switch(this.processType){
            case "replace":
                this.replace(targetItem);
                break;

            case "additional":
                this.additional(targetItem);
                break;

            case "AddRatio":
                this.addPercent(targetItem);
                break;

            case "brightness":
                this.brightness(targetItem);
                break;

            case "sturation":
                break;

            default:
                break;
        }
    }

    var fill = new FillColor(obj);

    function investItem(selects,fill){
        for(var i=0;i<selects.length;i++){
            if(selects[i].pageItems&&selects[i].pageItems.length >0){
                investItem(selects[i].pageItems);
            }
            if(selects[i].typename === "CompoundPathItem" && selects[i].pathItems.length > 0){
                investItem(selects[i].pathItems);
            }
            if(selects[i].fillColor){
                fill.setColor(selects[i]);
            }
        }
    }

    function setMaxMin(num,max){
        if(max<num)return max;
        if(1>num)return 0;
        return num;
    }

    var color = obj.colorObj.profile === "RGB" ? obj.colorObj.rgb : obj.colorObj.cmyk;
    var type = obj.colorObj.profile;
    
    if(!matchColorSpace(type)){
        alert("カラースペースが一致しません。");
        return false;
    }
    var selects = app.activeDocument.selection;
    investItem(selects,fill);
    return true;
}