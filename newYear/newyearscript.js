window.addEventListener('DOMContentLoaded', function(){
 'use strict';

 function calendar (){
     let goodDay = document.querySelector('#good_day'),
         today = document.querySelector('#Today'),
         currentTime = document.querySelector('#current_time'),
         newYear = document.querySelector('#new_Year');

         function getTimeRemaining(){
            let date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();

         //Добрый день
         function partDay (){
             let arrDay = ['утро', 'ден', 'вечер', 'ночи'];
             if (hours >= 4 && hours < 9){
                goodDay.textContent = arrDay[0];
             }else if (hours >= 9 && hours < 15){
                goodDay.textContent = arrDay[1];
             }else if (hours >= 15 && hours < 20){
                goodDay.textContent = arrDay[2];
             }else if (hours >= 20 || hours >=0 || hours < 4){
                goodDay.textContent = arrDay[3];
             }

         }
         partDay();
         
        
        //День недели
        function dayWeek(){
            let arr = ['Воскресение', 'Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота'];
            let day =  date.getDay();
            today.textContent = arr[day];
        }
        dayWeek();

        //Текущее время
        function currTime (){
            date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            currentTime.textContent = `${timeZero(hours)} : ${timeZero(minutes)} : ${timeZero(seconds)}`;
            setTimeout(currTime, 1000);   
        }
        currTime();

        //00:00:00
        function timeZero (num){
            if (num >= 0 && num < 10){
                return '0' + num;
            }else{
                return num;
            }
        }
        // дней до нового года
        function newYearFunc(){
          let dateStop = new Date('1 january 2020').getTime(),
              dateNew = new Date().getTime(),
              timeRemaining = (dateStop - dateNew) / 1000,
              day = Math.floor(timeRemaining / 60 / 60 / 24);
              newYear.textContent = day;
              setTimeout(newYearFunc, 1000);
        }
        newYearFunc();
    }
    getTimeRemaining();
       
 }
 calendar();


});