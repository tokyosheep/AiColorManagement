/*
var obj = {"type":"CMYK","name":"color","color":
    {"cyan":30,"magenta":90,"yellow":0,"black":0}
}
pasteColor(obj);
*/

function pasteColor(colorObj){
    var mm = 2.834645;
    function isColorSpaceFit(space){
        var flag = (app.activeDocument.documentColorSpace.toString()==="DocumentColorSpace.CMYK"&&space==="CMYK")||
                    (app.activeDocument.documentColorSpace.toString()==="DocumentColorSpace.RGB"&&space==="RGB");
        return flag;            
    }

    var Square = function(obj,num,left){
        this.size = 50 * mm;
        this.item = activeDocument.activeLayer.pathItems.rectangle(
            /*item.top*/-(num*(this.size+70)),
            /*item.left*/left,
            this.size,
            this.size);
        this.item.filled = true;
        this.item.stroked = false;
        this.obj = obj.color;
        this.name = obj.name;
        this.type = obj.type;
        this.item.fillColor = this.setColor();
    }

    Square.prototype.setColor = function(){
        switch(this.type){
            case "CMYK":
            return setCMYK(this.obj);
            case "RGB":
            return setRGB(this.obj);
            case "Gray":
            return setGray(this.obj);
            default:
            return setGray({gray:0});//何も該当しなければ無地のグレーを返す
        }
    }

    Square.prototype.makeSpotColor = function(){
        try{//既に該当の特色がある場合は既存の特色を返す
            var flag = app.activeDocument.swatches.getByName(this.name).color;
            return app.activeDocument.swatches.getByName(this.name).color;
        }catch(e){
            //カラーが登録されていなかったら登録する
            var spObj = activeDocument.spots.add();
            spObj.name = this.name;
            spObj.colorType = ColorModel.SPOT;
            spObj.color = this.setColor();
            var theColor = new SpotColor();
            theColor.spot = spObj;
            theColor.tint = 100; 
            return theColor;
        }
    }
    if(!isColorSpaceFit(colorObj.type/*space*/)){
        alert("please check the color space");
        return false;
    }
    var colors = [];
    var newLayer = app.activeDocument.layers.add();//置き換えた色のレイヤーを作成
    newLayer.name = "fill :"+colorObj.name;
    colors.push(new Square(colorObj,0,0));
    colors[0].item.move(newLayer, ElementPlacement.PLACEATBEGINNING);
    for(var i=0;i<colors.length;i++){
        colors[i].item.top = 100 * mm;
        colors[i].item.left = -100 * mm;
    }
    return true;
}