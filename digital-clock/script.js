function displayTime(){
    let d = new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();

    // create session
    let session =(h>=12) ? 'PM' : 'AM';

    // Converting 0 to 12 for 12- hour Format
    h=(h%12) || 12;

    // Add Leading zeros if necessary 
    h=(h<10) ? '0'+h :h;
    m=(m<10) ? '0'+m :m;
    s=(s<10) ? '0'+s :s;

    let time = `${h} : ${m} : ${s} ${session}`;
    document.getElementById('display').innerHTML=time;
    setTimeout(displayTime,1000);

}