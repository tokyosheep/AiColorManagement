function setCMYK(obj){
    var CMYK = new CMYKColor();
        CMYK.cyan = obj.cyan;
        CMYK.magenta = obj.magenta;
        CMYK.yellow = obj.yellow;
        CMYK.black = obj.black;
        return CMYK;
}

function setRGB(obj){
    var RGB = new RGBColor();
        RGB.red = obj.red;
        RGB.green = obj.green;
        RGB.blue = obj.blue;
        return RGB;
}

function setGray(obj){
    var Gray = new GrayColor();
    Gray.gray = obj.gray;
    return Gray;
}