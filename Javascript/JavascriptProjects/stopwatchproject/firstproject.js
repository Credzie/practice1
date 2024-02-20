window.onload = function(){
    let seconds = '00';
    let mins = '00';
    let appendMins = document.getElementById('mins');
    let appendSeconds = document.getElementById('seconds');
    let buttonStart = document.getElementById('start');
    let buttonStop = document.getElementById('stop');
    let buttonReset = document.getElementById('reset');

    let interval ;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function(){
        clearInterval(interval);
    }
    buttonReset.onclick = function(){
        clearInterval(interval);
        mins = '00';
        seconds = '00';
        appendMins.innerHTML = mins;
        appendSeconds.innerHTML = seconds;
    }
    function startTimer(){
        mins++;
        if(mins <= 9 ){
            appendMins.innerHTML = '0' + mins;
        }
        if(mins > 9){
            appendMins.innerHTML = mins;
        }
        if(mins > 99){
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            mins=0;
            appendMins.innerHTML = '0'+ 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}

