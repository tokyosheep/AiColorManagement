function writeColordata(type){
    "use strict";
    var doc = app.activeDocument;
    doc.rulerOrigin = [0, doc.height];//座標の原点をアートボードの左上に設定
    var selects = app.selection;
    
    var WriteColorData = function(select,type){   
        this.type = type;//strokeColor or fillColor
        this.select = select;
        this.colorSpace = app.activeDocument.documentColorSpace;//get active document color space
        this.textObj = activeDocument.textFrames.add();
        this.strong = 0;
        this.color = this.setColor();
        if(!this.color) return false;
        this.textFillColor = this.readObjColor();
    }

    WriteColorData.prototype.setColor = function(){
            var itemColor;
            if(this.select[this.type] === undefined)return;
            if(this.select[this.type].typename === "SpotColor"){
                itemColor = this.select[this.type].spot.color;
            }else if(this.select[this.type].typename === "RGBColor"||this.select[this.type].typename  === "CMYKColor"){
                itemColor = this.select[this.type];
            }else{
                return false;
            }
            var color = {};
            for(var key in itemColor){
                color[key] = itemColor[key];
                var num = parseFloat(itemColor[key]);
                if(key == "black"){
                    this.strong += num*2;
                }else if(isNaN(num)){
                    continue
                }else{
                    this.strong += num;
                }
            }
            return color;
    }

    WriteColorData.prototype.readObjColor = function(){
        if(this.colorSpace == "DocumentColorSpace.CMYK" && this.type === "fillColor" && this.strong > 200){
            return "white";
        }
        if(this.colorSpace == "DocumentColorSpace.RGB" && this.type === "fillColor" && this.strong < 370){
            return "white";
        }
        return "black;"
    }

    WriteColorData.prototype.setTextColor = function(keyColor){
        var obj = {
            red:0,
            blue:0,
            green:0,
            cyan:0,
            magenta:0,
            yellow:0,
            black:0,
            setColor:function(num){
                for(var p in this){
                    this[p] = num;
                }
            }
        }
        var num = 0;
        if(this.colorSpace ==  "DocumentColorSpace.CMYK"){
            num = keyColor === "white" ? 0 : 100;
            obj.setColor(num);
            return setCMYKColor(obj);
        }
        if(this.colorSpace == "DocumentColorSpace.RGB"){
            num = keyColor === "white" ? 255 : 0;
            obj.setColor(num);
            return setRGBColor(obj);
        }

        function setCMYKColor(obj){
            var CMYK = new CMYKColor();
            CMYK.cyan = obj.cyan;
            CMYK.magenta = obj.magenta;
            CMYK.yellow = obj.yellow;
            CMYK.black = obj.black;
            return CMYK;
        }
        
        function setRGBColor(obj){
            var RGB = new RGBColor();
            RGB.red = obj.red;
            RGB.green = obj.green;
            RGB.blue = obj.blue;
            return RGB;
        }
    }

    WriteColorData.prototype.constructText = function(){
        var content = "";
        for(var key in this.color){
            this.color[key] = parseFloat(this.color[key]);
            if(!isNaN(this.color[key])){
                this.color[key] = this.color[key].toFixed(2);
            }else{
                continue;
            }
            content += key.toUpperCase() +":"+this.color[key]+"\n";
        }    
        return content;
    }

    WriteColorData.prototype.writeDown = function(){
        if(!this.color) return false;
        this.textObj.contents = this.constructText();
        var colorObj = this.setTextColor(this.textFillColor);

        for(var i=0;i<this.textObj.characters.length;i++){
            this.textObj.characters[i].size = 15;
            this.textObj.characters[i].fillColor = colorObj;
        }
        this.textObj.left = this.select.left;
        this.textObj.top = this.select.top - this.select.height + this.textObj.height;
        this.textObj.move(lay, ElementPlacement.PLACEATBEGINNING);
    }
    var lay = app.activeDocument.layers.add();
    lay.name = "color data";
    writeColorProps(activeDocument.selection,type);
    function writeColorProps(selects,type){
        for(var n=0;n<selects.length;n++){
            if(selects[n].typename === "PathItem"){
                var writeData = new WriteColorData(selects[n],type);
                writeData.writeDown();
            }
            if(selects[n].typename === "GroupItem" && selects[n].pageItems){
                writeColorProps(selects[n].pageItems);
            }
        }
    }
    
    return true;
};