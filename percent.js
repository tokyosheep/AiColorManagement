(()=>{
    /*
    const max = 950;
    const num = 90;
    const percent = (num,max) => parseInt(num / max * 10000) / 100;
    console.log(percent(num,max));
    */

    const num = 60;
    const percent = 5;
    const getPercent = (num,percent)=>{
        console.log((num*percent)/100);
    }
    getPercent(num,percent);
})();