(function(){
    var select = app.activeDocument.selection[0];
    var cmyk = {
        cyan:select.fillColor.cyan,
        magenta:select.fillColor.magenta,
        yellow:select.fillColor.yellow,
        black:select.fillColor.black
    }
    var average = (cmyk.cyan + cmyk.magenta + cmyk.yellow)/3; 
    $.writeln(average);
    function isAverage(cmy,average){
        return {
            cyan:cmy.cyan/average,
            magenta:cmy.magenta/average,
            yellow:cmy.yellow/average
        }
    }

    function addValue(value,ratio,amount,average){
        var add = ratio * amount;
        var gap = (value * ratio) - value;
        var sum = value + (gap * amount);
        if(ratio < 1 && sum > average) return average;
        if(ratio > 1 && sum < average) return average;
        if(sum < 0)return 0;
        if(sum > 100)return 100;
        return sum;
    }

    var ratio = isAverage(cmyk,average);
    var newCMYK = new CMYKColor();
    $.writeln(ratio.yellow);
    var amount = 0.1;
    newCMYK.cyan = addValue(cmyk.cyan , ratio.cyan,amount,average);
    newCMYK.magenta = addValue(cmyk.magenta , ratio.magenta, amount,average);
    newCMYK.yellow = addValue(cmyk.yellow , ratio.yellow , amount,average);
    newCMYK.black = cmyk.black;
    select.fillColor = newCMYK;
})();