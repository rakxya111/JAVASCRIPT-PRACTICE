function startTime(){
    let time = new Date();
    let hr = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let y = document.getElementById("displayclock").innerHTML= hr +":" + m + ":" + s;
   t = setTimeout("startTime()",1000);
}