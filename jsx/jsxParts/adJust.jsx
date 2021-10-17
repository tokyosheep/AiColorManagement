function adjustColor(obj){
    var FillColor = function(item,color,type){
        this.item = item;
        this.color = color;
        this.max = type === "RGB" ? 255 : 100 ;
    }

    function setMaxMin(num,max){
        if(max<num)return max;
        if(1>num)return 0;
        return num;
    }

    FillColor.prototype.adjust = function(){
        for(var key in this.color){
            try{
                this.item.fillColor[key] = setMaxMin(parseFloat(this.item.fillColor[key]) + parseFloat(this.color[key]),this.max);
            }catch(e){
                continue;
            }
        }
        
    }

    function investItem(selects){
        for(var i=0;i<selects.length;i++){
            if(selects[i].pageItems&&selects[i].pageItems.length >0){
                investItem(selects[i].pageItems);
            }
            if(selects[i].typename === "CompoundPathItem" && selects[i].pathItems.length > 0){
                investItem(selects[i].pathItems);
            }
            if(selects[i].fillColor){
                setColor(selects[i]);
            }
        }
    }

    function setColor(targetItem){
        var fill = new FillColor(targetItem,color,type);
        fill.adjust();
    }

    var color = obj.type === "RGB" ? obj.color.RGB : obj.color.CMYK;
    var type = obj.type;
    if(!matchColorSpace(type)){
        alert("カラースペースが一致しません。");
        return false;
    }
    var selects = app.activeDocument.selection;
    investItem(selects);
    return true;
}