(function(){
    function investigate(select){
        for(var p in select){
            try{
                $.writeln("key :" + p);
                $.writeln(select[n][p]);
            }catch(e){
                $.writeln(e);
            }
        }
    }
    function setCMYK(obj){
        var CMYK = new CMYKColor();
            CMYK.cyan = obj.cyan;
            CMYK.magenta = obj.magenta;
            CMYK.yellow = obj.yellow;
            CMYK.black = obj.black;
            return CMYK;
    }
    function comPoundItems(items){
        for(var i=0;i<items.length;i++){
            $.writeln(items[i]);
            $.writeln(items[i].fillColor);
        }
    }

    function writeColorProps(selects){
        for(var n=0;n<selects.length;n++){
            $.writeln(selects[n].typename);
            $.writeln(selects[n].fillColor);
            if(selects[n].typename === "PathItem"){
                selects[n].fillColor = setCMYK({cyan:20,magenta:100,yellow:10,black:10});
            }
            if(selects[n].typename === "GroupItem" && selects[n].pageItems){
                writeColorProps(selects[n].pageItems);
            }
            
            if(selects[n].typename === "CompoundPathItem"){
                $.writeln("compound");
                if(selects[n].pathItems){
                    writeColorProps(selects[n].pathItems);
                }
                
                //comPoundItems(selects[n].compoundPathItems);
            }
            
        }
    }
    writeColorProps(app.activeDocument.selection);
})();