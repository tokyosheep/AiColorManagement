function investItem(selects){
    for(var i=0;i<selects.length;i++){
        if(selects[i].pageItems&&selects[i].pageItems.length >0){
            investItem(selects[i].pageItems);
        }
        if(selects[i].typename === "CompoundPathItem" && selects[i].pathItems.length > 0){
            investItem(selects[i].pathItems);
        }
        if(selects[i].fillColor){
            setColor(selects[i]);
        }
    }
}