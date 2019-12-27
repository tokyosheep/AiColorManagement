var FillColor = function(item,color){
    this.item = item;
    this.color = color;
}

FillColor.prototype.adjust = function(){
    for(var key in this.color){
        try{
            this.item.fillColor[key] = parseFloat(this.item.fillColor[key]) + parseFloat(this.color[key]);
        }catch(e){
            return;
        }
    }
}

function adjustColor(color){
    var selects = app.activeDocument.selection;
    for(var i=0;i<selects.length;i++){
        var fill = new FillColor(selects[i],color);
        fill.adjust();
    }
    return true;
}
/*==================================================*/

var Square = function(select,num,mm){
    this.select = select
    this.size = 50 * mm;
    this.item = activeDocument.activeLayer.pathItems.rectangle(
        /*item.top*/select.top,
        /*item.left*/select.left,
        this.size,
        this.size);
    this.item.filled = true;
    $.writeln(this.item.fillColor.typename);
    this.item.stroke = false;
}

Square.prototype.setColor = function(Xnum,Ynum,Znum,Xcolor,Ycolor,Zcolor,type){
    var max = 100;
    $.writeln(Xcolor);
    if(type==="RGB")max = 255;
    if(type==="CMYK")max = 100;
    try{
        this.item.fillColor[Xcolor] = MaxAndMin(parseFloat(this.select.fillColor[Xcolor]) + Xnum,max);
        this.item.fillColor[Ycolor] = MaxAndMin(parseFloat(this.select.fillColor[Ycolor]) + Ynum,max);
        this.item.fillColor[Zcolor] = MaxAndMin(parseFloat(this.select.fillColor[Zcolor]) + Znum,max);
    }catch(e){
        //$.writeln(e);
    }
    function MaxAndMin(num,max){
        if(num > max)num = max;
        if(num < 1)num = 1;
        return num;
    }
}

Square.prototype.setPosition = function(y,x,z,step){
    this.item.top = parseFloat(this.select.top)+((z+y)*step);
    this.item.left = parseFloat(this.select.left)+((z+x)*step);
}


var SetAxes = function (obj,select){
    this.mm = 2.834645;
    this.obj = obj;
    this.step = 55*this.mm;
    this.select = select;
    this.layers = [];
}

SetAxes.prototype.ZAxes = function(){
    for(var z=-1*this.obj.Zaxes.num+1;z<this.obj.Zaxes.num;z++){
        this.layers.push(app.activeDocument.layers.add());
        this.YAxes(z);
    }
}

SetAxes.prototype.YAxes = function(z){
    for(var y=-1*this.obj.Yaxes.num+1;y<this.obj.Yaxes.num;y++){
         this.XAxes(y,z);
    }
}

SetAxes.prototype.XAxes = function(y,z){
    for(var x=-1*this.obj.Xaxes.num+1;x<this.obj.Xaxes.num;x++){
        var sqt = new Square(this.select,y,this.mm);

        sqt.setColor(x*this.obj.Xaxes.step,
        y*this.obj.Yaxes.step,
        z*this.obj.Zaxes.step,
        this.obj.Xaxes.XColor,
        this.obj.Yaxes.YColor,
        this.obj.Zaxes.ZColor,
        this.obj.type
        );

        sqt.setPosition(y,x,(z*1.5),this.step);
    }
}

function createPattern(obj){
    if(!matchColorSpace(obj.type)){
        alert("you should match color space");
        return false;
    }
    var select = app.activeDocument.selection[0];
    if(!select){
        alert("you should select an item");
        return false;
    }
    var setPattern = new SetAxes(obj,select);
    setPattern.ZAxes();
    return true;
}

function matchColorSpace(type){
    var docSpace = app.activeDocument.documentColorSpace.toString();
    var space = docSpace.match(/(cmyk|rgb)/i);
    if((space[0].toUpperCase() === type)||space[0].toUpperCase()=== type){
        return true;
    }else{
        return false;
    }

}
/*
var obj = {
    "Xaxes": {
        "Xcolor": "red",
        "num": "5",
        "step": "36"
    },
    "Yaxes": {
        "Ycolor": "green",
        "num": "5",
        "step": "36"
    },
    "Zaxes": {
        "Zcolor": "blue",
        "num": "2",
        "step": "7"
    },
    "type": "RGB"
}
createPattern(obj);
*/
