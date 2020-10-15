function matchColorSpace(type){
    var docSpace = app.activeDocument.documentColorSpace.toString();
    var space = docSpace.match(/(cmyk|rgb)/i);
    return (space[0].toUpperCase() === type)||(space[0].toUpperCase()=== type);
}