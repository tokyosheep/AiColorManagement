function hostScript(obj){
    switch(obj.type){
        case"pasteColor":
            pasteColor(obj.colorObj);
            break;

        case"createPattern":
            createPattern(obj.color.data,obj.color.option);
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