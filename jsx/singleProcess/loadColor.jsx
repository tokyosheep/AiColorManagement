(function(){
    "use strict";
    var select = app.activeDocument.defaultFillColor;
    if(select.typename === "SpotColor"){
        return JSON.stringify(getfillColor(select.spot.color,
        true,
        select.spot.name));
    }else{
        return JSON.stringify(getfillColor(select,
        false,
        null));
    }
    
    function getfillColor(initialObj,flag,name){
        try{
            var newObj = {color:{}};
            if(name === undefined)name = null;
            newObj.name = name;
            for(var p in initialObj){
                if(p === "typename")continue;
                newObj.color[p] = initialObj[p].toFixed(2);
            }
            newObj.isSpot = flag;
            newObj.space = getColorSpace();
            return newObj.space === false ? false : newObj;
        }catch(e){
            alert(e);
            return false;
        }
    }

    function getColorSpace(){
        switch(app.activeDocument.documentColorSpace.toString()){
            case "DocumentColorSpace.CMYK":
            return "CMYK";

            case "DocumentColorSpace.RGB":
            return "RGB";

            default: 
            return false;
        }
    }
    
})();