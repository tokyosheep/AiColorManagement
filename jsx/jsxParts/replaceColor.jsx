
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
    "type": "Additional",
    "colorObj": {
        "rgb": {
            "red": 0,
            "blue": 0,
            "green": 0
        },
        "cmyk": {
            "cyan": 4,
            "magenta": 3,
            "yellow": 2,
            "black": 3
        },
        "profile": "CMYK",
        "fill": "flat",
        "includeBlack": false
    }
}
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

function isAmountableProcess(type){
    return type==="Saturation"||type==="Brightness";
}

function isAdjustableColor(targetItem,fillType){
    var typename = targetItem[fillType].typename;
    return typename === "CMYKColor" || typename === "RGBColor";
}

function replaceColor(obj){
    var FillColor = function(obj){
        if(isAmountableProcess(obj.type)){
            this.amount = obj.type === "Saturation" ? parseFloat(obj.colorObj.amount)/100 : parseFloat(obj.colorObj.amount);//amount
        }else{
            this.color = obj.colorObj[obj.colorObj.profile.toLowerCase()];
        }
        this.profile = isAmountableProcess(obj.type) ?  getColorSpace() : obj.colorObj.profile;
        this.max = this.profile === "RGB" ? 255 : 100 ;
        this.fill = turnFillName(obj.colorObj.fill)//strokeColor or fillColor
        this.processType = obj.type;
        this.includeBlack = obj.colorObj.includeBlack !== undefined ? obj.colorObj.includeBlack : false;
        this.func = function(){};
        if(obj.type === "Brightness" && this.profile === "CMYK")this.amount *= -1;//cmykとRGBで値が逆
    }

    FillColor.prototype.isColoredItem = function(targetItem,fillType){
        return targetItem[fillType === "strokeColor" ? "stroked" : "filled"]
        &&
        isAdjustableColor(targetItem,fillType); 
        ;
    }

    function getRatio(num,percent){
        return parseInt(num*percent)/100;
    }

    function addRatio(num,percent,max){
        return setMaxMin(num + getRatio(num,percent),max);
    }

    FillColor.prototype.replace = function(targetItem,fillType){
        var color = this.profile === "RGB" ? setRGB(this.color) : setCMYK(this.color) ;
        targetItem[fillType] = color;
    }

    FillColor.prototype.addPercent = function(targetItem,fillType){
        for(var key in this.color){
            targetItem[fillType][key] = addRatio(parseFloat(targetItem[fillType][key]),parseFloat(this.color[key]),this.max);
        }
    }

    FillColor.prototype.brightness = function(targetItem,fillType){
        if(!this.isColoredItem(targetItem,fillType))return;
        for(var key in targetItem[fillType]){
            if( key==="typename" || (key==="black" && !this.includeBlack))continue;
            targetItem[fillType][key] = addRatio(parseFloat(targetItem[fillType][key]),parseFloat(this.amount),this.max);
        }
    }
    function setRatio(color,average,includeBlack){
        var obj = {}
        for(var p in color){
            if(p === "typename" || !includeBlack && p === "black")continue;
            obj[p] = color[p]/average;
        }
        return obj;
    }

    FillColor.prototype.addValue = function(value,ratio,average){
        var add = ratio * this.amount;
        var gap = (value * ratio) - value;//平均値と数値の間の差
        var sum = value + (gap * this.amount);//彩度を動かす量
        if(ratio < 1 && sum > average) return average;//彩度を落とした時に全ての数値を揃えて
        if(ratio > 1 && sum < average) return average;//グレーになるようにする
        if(sum < 0)return 0;
        if(sum > this.max)return this.max;
        return sum;
    }

    FillColor.prototype.adjustChroma = function(targetItem,fillType){
        var average = 0;//平均値の変数
        var propNum = 0;//数値の種類の数
        for( var p in targetItem[fillType]){
            if(p === "typename"|| (!this.includeBlack && p === "black") )continue;
            average += targetItem[fillType][p];
            propNum++
        }
        average = average/propNum;
        var ratio = setRatio(targetItem[fillType],average,this.includeBlack);
        var newColor = this.profile === "CMYK" ? new CMYKColor() : new RGBColor() ; 
        for( var p in ratio){
            newColor[p] = this.addValue(targetItem[fillType][p], ratio[p], average);
        }
        if(this.profile === "CMYK" && !this.includeBlack)newColor.black = targetItem[fillType].black;
        try{
            targetItem[fillType] = newColor;//選択したアイテムの色を置き換える
        }catch(e){
            /*
                CMYKの値が 0 0 0 100だとエラーになる
            */
        }
    }
    
    FillColor.prototype.additional = function(targetItem,fillType){
        for(var key in this.color){
            try{
                targetItem[fillType][key] = setMaxMin(parseFloat(targetItem[fillType][key]) + parseFloat(this.color[key]),this.max);
            }catch(e){
                continue;
            }
        }
    }

    FillColor.prototype.fillColorOnItem = function(targetItem){
        if(this.fill!=="both"){
            if(!this.isColoredItem(targetItem,this.fill))return;
            this.func(targetItem, this.fill);
        }else{
            if(this.isColoredItem(targetItem,"fillColor"))this.func(targetItem, "fillColor");
            if(this.isColoredItem(targetItem,"strokeColor"))this.func(targetItem, "strokeColor");
        }
    }

    FillColor.prototype.setColor = function(targetItem){
        switch(this.processType){
            case "replace":
                this.func = this.replace;
                this.fillColorOnItem(targetItem);
                break;

            case "Additional":
                this.func = this.additional;
                this.fillColorOnItem(targetItem);
                break;

            case "AddRatio":
                this.func = this.addPercent;
                this.fillColorOnItem(targetItem);
                break;

            case "Brightness":
                this.func = this.brightness;
                this.fillColorOnItem(targetItem);
                break;

            case "Saturation":
                this.func = this.adjustChroma;
                this.fillColorOnItem(targetItem);
                break;

            default:
                break;
        }
    }

    var fill = new FillColor(obj);
    
    function investItem(selects,fill){
        for(var i=0;i<selects.length;i++){
            if(selects[i].pageItems&&selects[i].pageItems.length >0){
                investItem(selects[i].pageItems,fill);
            }
            if(selects[i].typename === "CompoundPathItem" && selects[i].pathItems.length > 0){
                investItem(selects[i].pathItems,fill);
            }
            if(selects[i].fillColor || selects[i].strokeColor){
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
    if(!isAmountableProcess(obj.type)&&!matchColorSpace(type)){
        alert("current color space doesn't match this");
        return false;
    }
    var selects = app.activeDocument.selection;
    investItem(selects,fill);
    return true;
}