window.onload =() =>{
    document.querySelector("#calculate").onclick=calculate;
    document.querySelector("#reset").onclick=reset;}

    function calculate(){
        const date = document.querySelector("#date").value;
        const time = document.querySelector("#time").value;

        const endTime = new Date(date+" "+time);
        calculateTime(endTime);
        const interval = setInterval(()=> calculateTime(endTime),1000);

        const stop = document.querySelector("#stop");
        stop.addEventListener('click',()=>{
            clearInterval(interval);
        });
    }

    function calculateTime(endTime){
        const currentTime = new Date();
        const d = document.querySelector('#count-days');
        const h = document.querySelector('#count-hours');
        const m = document.querySelector('#count-minutes');
        const s = document.querySelector('#count-seconds');

        if(endTime>currentTime){
            const timeLeft = (endTime-currentTime)/1000;
            d.innerHTML=Math.floor(timeLeft/(24*60*60));
            m.innerHTML=Math.floor((timeLeft)/(60*60))%24;
            m.innerHTML=Math.floor((timeLeft/60)%60);
            s.innerHTML=Math.floor(timeLeft%60);

        }else{
            d.innerHTML=0;
            h.innerHTML=0;
            m.innerHTML=0;
            s.innerHTML=0;
        }

    }
    function reset (){
        document.querySelector("#count-days").innerHTML=0;
        document.querySelector("#count-hours").innerHTML=0;
        document.querySelector("#count-minutes").innerHTML=0;
        document.querySelector("#count-seconds").innerHTML=0;
    }