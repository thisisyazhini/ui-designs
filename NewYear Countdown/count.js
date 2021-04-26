function timeToNewYear() {
    const newYear = new Date("2022-01-01");
    const days = Math.floor((newYear - new Date()) / (24 * 60 * 60 * 1000));
    //console.log(days);
    const hoursInMilliseconds = (newYear - new Date()) % (24 * 60 * 60 * 1000);
    const hours = Math.floor(hoursInMilliseconds / (60 * 60 * 1000));
    //console.log(hours);
    const minsInMilliseconds = hoursInMilliseconds % (60 * 60 * 1000);
    const mins = Math.floor(minsInMilliseconds / (60 * 1000));
    //console.log(mins);
    const seconds = Math.round((minsInMilliseconds % (60 * 1000)) / 1000);
    //console.log(seconds);
    return { days, hours, mins, seconds };
  }
  setInterval(function(){
  const {
    days, hours, mins, seconds
  } = timeToNewYear();
  document.getElementById('days').innerText=days;
  document.getElementById('hours').innerText=hours;
  document.getElementById('mins').innerText=mins;
  document.getElementById('seconds').innerText=seconds;
  },1000);