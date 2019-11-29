const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li');

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

export default toggleMenu;
