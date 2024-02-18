let ampm = document.getElementById('ampm');

function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());
    let dy = dateTime.getDay();
    let dt = dateTime.getDate();
    let mth = dateTime.getMonth()+1;
    let yr=dateTime.getFullYear();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[dy];
    
    if (hr > 12) {
        hr = hr - 12;
        ampm.innerHTML = 'PM';
    } else {
        ampm.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = padZero(hr);
    document.getElementById('mins').innerHTML = padZero(min);
    document.getElementById('seconds').innerHTML = padZero(sec);
    document.getElementById('day').innerHTML = dayName;
    document.getElementById('date').innerHTML = dt;
    document.getElementById('month').innerHTML = mth;
    document.getElementById('year').innerHTML=yr;
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 500);
