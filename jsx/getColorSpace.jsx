(function(){
    try{
        return app.activeDocument.documentColorSpace;
    }catch(e){
        return null;
    }
})();