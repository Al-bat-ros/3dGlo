window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Timer
function countTimer(deadline){
  let timerDay = document.querySelector('#timer-day'),
      timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

   function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60) % 24,
            day = Math.floor(timeRemaining / 60 / 60 / 24);

        
            function timeZero(num){
              if (num >= 0 && num < 10){
                  return '0' + num; 
              }else{
                  return num;
              }
            }
            return {
                timeRemaining,
                'day':timeZero(day), 
                'hours':timeZero(hours), 
                'minutes':timeZero(minutes), 
                'seconds':timeZero(seconds)
            };
   }
    function updateClock(){
        let timer = getTimeRemaining();
        timerDay.textContent = timer.day;
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

        
    }
    
      const idInterval = setInterval(() => {
        let timer = getTimeRemaining();
          if (timer.timeRemaining > 0){
              updateClock();
          } else {
              clearInterval(idInterval);
          }
        }, 1000);
    
    
}

 countTimer('27 november 2019');










});