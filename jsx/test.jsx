(function(){
    /*
    var select = app.activeDocument.selection[0];
    var color = select.fillColor;
    for(var p in color){
        $.writeln(p +" :"+ color[p]);
    }
    color.red = color.red + 14; 
    */
    var space = app.activeDocument.documentColorSpace.toString();
    var color = space.match(/(cmyk|rgb)/i);
    $.writeln(color[0].toUpperCase());
})();