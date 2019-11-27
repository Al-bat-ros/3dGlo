window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Timer
    const countTimer = (deadline) => {
        let timerDay = document.querySelector('#timer-day'),
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24,
                day = Math.floor(timeRemaining / 60 / 60 / 24);


            const timeZero = (num) => {
                if (num >= 0 && num < 10) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            return {
                timeRemaining,
                'day': timeZero(day),
                'hours': timeZero(hours),
                'minutes': timeZero(minutes),
                'seconds': timeZero(seconds)
            };
        }
        const updateClock = () => {
            let timer = getTimeRemaining();
            timerDay.textContent = timer.day;
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;


        }

        const idInterval = setInterval(() => {
            let timer = getTimeRemaining();
            if (timer.timeRemaining > 0) {
                updateClock();
            } else {
                clearInterval(idInterval);
            }
        }, 1000);



    }

    countTimer('28 november 2019');

    //Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        //вариант 1
        // const handlerMenu = () => {
        //     if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        //         menu.style.transform = `translate(0)`;
        //     } else {
        //         menu.style.transform = `translate(-100%)`;
        //     }
        // };
        
        //Вариант 2
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popUpClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
              popup.style.display = 'block';
            });
        });

        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopUp();


    // body .active-menu {
    //     -webkit-transition: 1s;
    //     transition: 1s;
    //     -webkit-transform: translateX(100%);
    //     transform: translateX(100%)
    // }




});