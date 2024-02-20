function showTime(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let session = "AM";

    if(hrs == 0){
        hrs = 12;
    }
    
    if(hrs > 12){
        hrs = hrs - 12;
        session = "PM"
    }
    
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    let time = hrs + ":" + mins + ":" + secs + " " + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
