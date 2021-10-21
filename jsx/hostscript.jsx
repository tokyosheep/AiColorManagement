/*
    export type ProcessType = {
    "Additional":boolean,
    "Saturation":boolean,
    "Brightness":boolean,
    "AddRatio":boolean,
    "replace"
    };
*/

function hostScript(obj){
    switch(obj.type){

        case "Additional":
        case "Saturation":
        case "Brightness":
        case "AddRatio":
        case "replace":
            replaceColor(obj);
            break;

        case "writeFlatData":
            writeColordata(obj.fill);
            break;

        case "writeKeyData":
            writeColordata(obj.fill);
            break;

        case"pasteColor":
            pasteColor(obj.colorObj);
            break;

        case"createPattern":
            createPattern(obj.color,obj.option);
            break;

        case"adjust":
            adjustColor(obj.color);
            break;

        default:
            alert("nothing any type of function");
            break;
    }

    return true;
}