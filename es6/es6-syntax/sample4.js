function getTime(){   
    console.log( new Date().toLocaleString())
}

setInterval(getTime,3000);

setTimeout(getTime,3000)