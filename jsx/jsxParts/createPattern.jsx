/*
#include "../partial/matchColorSpace.jsx";

var obj = {
    "type": "createPattern",
    "color": {
        "cmyk": {
            "Xaxe": {
                "cyan": true,
                "magenta": false,
                "yellow": true,
                "black": false,
                "number": 13,
                "step": 3
            },
            "Yaxe": {
                "cyan": false,
                "magenta": true,
                "yellow": false,
                "black": false,
                "number": 2,
                "step": 6
            },
            "Zaxe": {
                "cyan": false,
                "magenta": false,
                "yellow": true,
                "black": false,
                "number": 1,
                "step": 8
            }
        },
        "rgb": {
            "Xaxe": {
                "red": false,
                "green": false,
                "blue": false,
                "number": 0,
                "step": 1
            },
            "Yaxe": {
                "red": false,
                "green": false,
                "blue": false,
                "number": 0,
                "step": 1
            },
            "Zaxe": {
                "red": false,
                "green": false,
                "blue": false,
                "number": 0,
                "step": 1
            }
        },
        "space": "CMYK"
    },
    "option": {
        "centerPoint": false,
        "start": "selected",
        "color": {
            "cyan": 60,
            "magenta": 50,
            "yellow": 0,
            "black": 0
        }
    }
}

*/


var Square = function(select,mm){
    this.select = select
    this.size = 50 * mm;
    this.item = activeDocument.activeLayer.pathItems.rectangle(
        /*item.top*/select.top,
        /*item.left*/select.left,
        this.size,
        this.size);
    this.item.filled = true;
    this.item.stroked = false;
}

function MaxAndMin(num,max){
    if(num > max)num = max;
    if(num < 1)num = 0;1
    return num;
}

Square.prototype.setColor = function(/*Xnum,Ynum,Znum,Xcolor,Ycolor,Zcolor,*/axes,type){
    var max = 100;
    if(type==="RGB")max = 255;
    if(type==="CMYK")max = 100;
    try{
        var step = 0;
        for(var i=0;i<axes.length;i++){
            this.setFillColor(axes[i],type,max);
        }
    }catch(e){
        //$.writeln(e);
    }
}

Square.prototype.setFillColor = function(obj,type,max){
    var n = 0;
    for(var p in this.item.fillColor){
        try{
            if(p === "typename")continue;
            if(obj.axe[p]){
                this.item.fillColor[p] = MaxAndMin(
                    n === 0 ? 
                        parseFloat(this.select.fillColor[p]) + obj.step 
                    :
                        parseFloat( this.item.fillColor[p]) + obj.step 
                    ,
                    max);
            }
            n++
        }catch(e){
            continue;
        }
    }
}

Square.prototype.setPosition = function(y,x,z,step){
    this.item.top = parseFloat(this.select.top)+((z+y)*step);
    this.item.left = parseFloat(this.select.left)+((z+x)*step);
}


var SetAxes = function (obj,select,space,center){
    this.mm = 2.834645;
    this.obj = obj;
    this.step = 55*this.mm;
    this.select = select;
    this.layers = [];
    this.space = space;
    this.isCenter = center;
}

SetAxes.prototype.centerPoint = function(num){
    return this.isCenter ? -1*num : 0 ;
}

SetAxes.prototype.Zaxe = function(){
    var baseLayer = app.activeDocument.layers.add();
    baseLayer.name = "colors";
    for(var z = this.centerPoint(this.obj.Zaxe.number);z<=this.obj.Zaxe.number;z++){
        var newLayer = baseLayer.layers.add();
        newLayer.name = "pattern"+z;
        this.layers.push(newLayer);
        this.Yaxe(z);
    }
}

SetAxes.prototype.Yaxe = function(z){
    for(var y= this.centerPoint(this.obj.Yaxe.number);y<=this.obj.Yaxe.number;y++){
        this.Xaxe(y,z);
    }
}

SetAxes.prototype.Xaxe = function(y,z){
    for(var x= this.centerPoint(this.obj.Xaxe.number);x<=this.obj.Xaxe.number;x++){
        var sqt = new Square(this.select,this.mm);
        sqt.setColor(
            [
                {step:x*this.obj.Xaxe.step,axe:this.obj.Xaxe},
                {step:y*this.obj.Yaxe.step,axe:this.obj.Yaxe},
                {step:z*this.obj.Zaxe.step,axe:this.obj.Zaxe}
            ],
            this.space
        );
        sqt.setPosition(y,x,(z*1.5),this.step);
    }
}

var BasicSq = function(){
    this.select = activeDocument.activeLayer.pathItems.rectangle(
    /*item.top*/0,
    /*item.left*/0,
    50 * 2.834645,
    50 * 2.834645);
    this.select.filled = true;
    this.select.stroked = false;
}

BasicSq.prototype.fillColor = function(color){
    for(var p in this.select.fillColor){
        try{
            if(p === "typename")continue;
            this.select.fillColor[p] = color[p];
        }catch(e){
            continue;
        }
    }
}

function isUsableColor(item){
    var space = getColorSpace();
    return item.fillColor.typename === space+"Color";
}

function createPattern(obj,option){
    if(!matchColorSpace(obj.space)){
        alert("you should match color space");
        return false;
    }
    var select;
    if(option.start === "selected"){
        select = app.activeDocument.selection[0];
        if(!select && !isUsableColor(select)){
            alert("you should select an item correctly");
            return false;
        }
    }else{
        var basic = new BasicSq();
        basic.fillColor(option.color);
        select = basic.select;
    }
    var setPattern = new SetAxes(obj.space === "CMYK" ? obj.cmyk : obj.rgb ,select,obj.space,option.centerPoint);
    setPattern.Zaxe();
    return true;
}

//createPattern(obj.color,obj.option);

