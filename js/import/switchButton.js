"use strict";

module.exports = class Switch{
    constructor(btn,forms){
        this.btn = btn;
        this.btn.addEventListener("click",this);
        this.forms = forms;
    }

    handleEvent(){
        this.forms.forEach(form=>{
            form.classList.toggle("hide");
        });
    }
}