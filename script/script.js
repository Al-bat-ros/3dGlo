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
            menuItems = menu.querySelectorAll('ul>li'),
            activeMenu = document.querySelector('.active-menu');
  

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
    
        menu.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('close-btn')){
                handlerMenu();
            }
            menuItems.forEach((elem) => {
                if(target.parentNode === elem){
                    handlerMenu();
                }
            });
        });

        btnMenu.addEventListener('click', handlerMenu);
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
              popup.style.display = 'block';
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if(!target){
                    popup.style.display = 'none';
                }
            }


        });

    };

    togglePopUp();

    // Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index) => {
                for(let i = 0; i < tabContent.length; i++){
                    if (index === i){
                        tab[i].classList.add('active');
                        tabContent[i].classList.remove('d-none');
                    } else {
                        tab[i].classList.remove('active');
                        tabContent[i].classList.add('d-none');
                    }
                }    
            };  

              tabHeader.addEventListener('click', (event) => {
                   let target = event.target;
                       target = target.closest('.service-header-tab');

                        if(target){
                            tab.forEach((item, i) => {
                                    if(item === target){
                                        toggleTabContent(i);
                                    }
                            });   
                        }         
              });
              
    };
    tabs();

    // СЛАЙДЕР
    const slider = () => {

        const slider = document.querySelector('.portfolio-content'),
              slide = document.querySelectorAll('.portfolio-item'),
              btn = document.querySelectorAll('.portfolio-btn'),
              
              partFolDot = document.querySelector('.portfolio-dots');
        
        let currentSlide = 0,
            interval;
        
        const addDot = (classN) => {
            
            let dot = document.createElement('li'); 
                dot.classList.add('dot');
                dot.classList.add(classN);
                partFolDot.append(dot);

        };

        slide.forEach((elem, index) => {
            if(index === 0){
                addDot('dot-active');
            }else{
                addDot('dot');   
            }
        });
        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            }else if (target.matches('.dot')){
                dot.forEach((elem, index) => {
                   if(elem === target){
                       currentSlide = index;
                   }
                });
            }
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            if (currentSlide < 0){
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(2000);
    };
    slider();

    // body .active-menu {
    //     -webkit-transition: 1s;
    //     transition: 1s;
    //     -webkit-transform: translateX(100%);
    //     transform: translateX(100%)
    // }




});