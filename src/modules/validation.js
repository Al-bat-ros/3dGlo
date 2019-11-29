const validation = () => {
       
    const phone = document.querySelectorAll('.form-phone');
    const name = document.querySelectorAll('.form-name');
   
   phone.forEach((elem) => {
    elem.addEventListener('input', (event) => {
        let target = event.target;
         target.value = target.value.replace(/\D/g, '');
    });
   });
    
    name.forEach((item) => {
        item.addEventListener('input', (event) => {
            let target = event.target;
             target.value = target.value.replace(/[a-zA-Z0-9]/g, '');
        });
    });
};

export default validation;

