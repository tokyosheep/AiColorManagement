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

var Square = function(item,num,mm){
    this.size = 50 * mm;
    this.item = activeDocument.activeLayer.pathItems.rectangle(
        /*item.top*/item.top,
        /*item.left*/item.left,
        this.size,
        this.size);
    this.filled = true;
    this.stroke = false;
}

Square.prototype.setColor = function(item,Xnum,Ynum,Xcolor,Ycolor){
    try{
        this.item.fillColor[Xcolor] = MaxAndMin(parseFloat(item.fillColor[Xcolor]) + Xnum);
        this.item.fillColor[Ycolor] = MaxAndMin(parseFloat(item.fillColor[Ycolor]) + Ynum);
    }catch(e){
        $.writeln(e);
    }
    function MaxAndMin(num){
        if(num > 100)num = 100;
        if(num < 1)num = 1;
        return num;
    }
}

function createPattern(obj){
    var point = 0.352778;
    var mm = 2.834645;
    var select = app.activeDocument.selection[0];
    if(!select)return false;
    var range = 13;
    var step = 55*mm;
    var cStep = obj.step;
    for(var x=-1*range;x<range;x++){
        //var sq = new Square(select,x,mm);
        //sq.setColor(select,x*cStep,obj.XColor);
        //sq.item.left = parseFloat(select.left)+(x*step);
        for(var y=-1*range;y<range;y++){
            var sqt = new Square(select,y,mm);
            sqt.setColor(select,x*cStep,y*cStep,obj.XColor,obj.YColor);
            sqt.item.top = parseFloat(select.top)+(y*step);
            sqt.item.left = parseFloat(select.left)+(x*step);
        }
    }
    return true;
}