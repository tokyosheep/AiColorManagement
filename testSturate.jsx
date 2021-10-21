/*https://www.standardabweichung.de/code/javascript/rgb-cmyk-conversion-javascript*/
var rgb2cmyk = function(r, g, b, normalized){
    var c = 1 - (r / 255);
    var m = 1 - (g / 255);
    var y = 1 - (b / 255);
    var k = Math.min(c, Math.min(m, y));
    
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    
    if(!normalized){
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }
    
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    
    return {
        cyan: c,
        magenta: m,
        yellow: y,
        black: k
    }
}

var cmyk2rgb = function(c, m, y, k, normalized){
    c = (c / 100);
    m = (m / 100);
    y = (y / 100);
    k = (k / 100);
    
    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;
    
    var r = 1 - c;
    var g = 1 - m;
    var b = 1 - y;
    
    if(!normalized){
        r = Math.round(255 * r);
        g = Math.round(255 * g);
        b = Math.round(255 * b);
    }
    
    return {
        red: r,
        green: g,
        blue: b
    }
}

/**
 * 10進数RGBからHSLへ変換
 * @param {number} red 10進数の赤
 * @param {number} green 10進数の緑
 * @param {number} blue 10進数の青
 * @return {boolean|{hue:number,saturation:number,lightness:number}} HSLへ変換された値を返す
 */


var setMaxAndMin = function(num){
    if(num < 0)return 0;
    if(num > 100)return 100;
    return num;
}

/*
function are quoted from https://shanabrian.com/web/javascript/color-code-convert-hsl-to-10rgb.php
*/

var rgb10ToHsl = function(red, green, blue) {
    if (!String(red).match(/^[0-9]{1,3}$/))   return false;
    if (!String(green).match(/^[0-9]{1,3}$/)) return false;
    if (!String(blue).match(/^[0-9]{1,3}$/))  return false;
 
    if (red < 0   || red > 255)   return false;
    if (green < 0 || green > 255) return false;
    if (blue < 0  || blue > 255)  return false;
 
    var hue = 0, saturation = 0, lightness = 0,
        max = 0, min = 0, diff = 0;
 
    red       = Number(red)   / 255;
    green     = Number(green) / 255;
    blue      = Number(blue)  / 255;
    max       = Math.max(red, green, blue);
    min       = Math.min(red, green, blue);
    lightness = (max + min) / 2;
 
    if (max !== min) {
        diff = max - min;
 
        saturation = diff / (lightness > 0.5 ? 2 - max - min : diff / max + min);
 
        if (max === red) {
            hue = (green - blue) / diff;
        } else if (max === green) {
            hue = 2 + (blue - red) / diff;
        } else {
            hue = 4 + (red - green) / diff;
        }
 
        hue /= 6;
    }
 
    return {
        hue        : Math.round(hue        * 360),
        saturation : Math.round(saturation * 100),
        lightness  : Math.round(lightness  * 100)
    };
};

var hslToRgb10 = function(hue, saturation, lightness) {
    var result = false;
 
    if (((hue || hue === 0) && hue <= 360) && ((saturation || saturation === 0) && saturation <= 100) && ((lightness || lightness === 0) && lightness <= 100)) {
        var red   = 0,
            green = 0,
            blue  = 0,
            q     = 0,
            p     = 0;
 
        hue        = Number(hue)        / 360;
        saturation = Number(saturation) / 100;
        lightness  = Number(lightness)  / 100;
 
        if (saturation === 0) {
            red   = lightness;
            green = lightness;
            blue  = lightness;
        } else {
            var hueToRgb = function(p, q, t) {
                if (t < 0) {
                    t += 1;
                }
 
                if (t > 1) {
                    t -= 1;
                }
 
                if (t < 1 / 6) {
                    p = p + (q - p) * 6 * t;
                } else if (t < 1 / 2) {
                    p = q;
                } else if (t < 2 / 3) {
                    p = p + (q - p) * (2 / 3 - t) * 6;
                }
 
                return p;
            };
 
            if (lightness < 0.5) {
                q = lightness * (1 + saturation);
            } else {
                q = lightness + saturation - lightness * saturation;
            }
            p = 2 * lightness - q;
 
            red   = hueToRgb(p, q, hue + 1 / 3);
            green = hueToRgb(p, q, hue);
            blue  = hueToRgb(p, q, hue - 1 / 3);
        }
 
        result = {
            red   : Math.round(red   * 255),
            green : Math.round(green * 255),
            blue  : Math.round(blue  * 255)
        };
    }
 
    return result;
};


(function(){
    var select = app.activeDocument.selection[0];
    var c = select.fillColor;
    $.writeln(select.fillColor.cyan);
    var fillRgb = cmyk2rgb(c.cyan,c.magenta,c.yellow,c.black,false);
    $.writeln(fillRgb.blue);
    var hsl = rgb10ToHsl(fillRgb.red,fillRgb.green,fillRgb.blue);
    $.writeln(hsl.saturation);
    var rgb = hslToRgb10(hsl.hue,hsl.saturation ,hsl.lightness);
    var cmyk = rgb2cmyk(rgb.red,rgb.green,rgb.blue,false);
    $.writeln(cmyk.cyan);
    /*
    var newRGBColor = new RGBColor();
    newRGBColor.red = rgb.red;
    newRGBColor.green = rgb.green;
    newRGBColor.blue = rgb.blue;

    //select.fillColor = newRGBColor;
    */

    var newCMYKColor = new CMYKColor();
    newCMYKColor.black = cmyk.black;
    newCMYKColor.cyan = cmyk.cyan;
    newCMYKColor.magenta = cmyk.magenta;
    newCMYKColor.yellow = cmyk.yellow;
    select.fillColor = newCMYKColor;
})();
