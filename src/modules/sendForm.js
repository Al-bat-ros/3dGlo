const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
          loadMessage = 'Загрузка',
          successMesage = 'Спасибо! Мы скоро с вами свяжемся';
          
          // add div massages
          const form = document.querySelectorAll('form');
          const statusMessage = document.createElement('h3');
          statusMessage.style.cssText = 'font-size: 2rem';
          const input = document.querySelectorAll('input');

          form.forEach((elem) => {
                elem.addEventListener('submit', (event) => {
                       event.preventDefault();
                       elem.appendChild(statusMessage);
                       statusMessage.textContent = loadMessage;

                        const formData = new FormData(elem);
                        let body = {};
                    
                        formData.forEach((val, key) => {
                        body[key] = val;
                        
                        });
                        postData(body, () => { 
                            input.forEach((elem)=>{
                                elem.value = '';    
                            } );       
                            statusMessage.textContent = successMesage; 
                        }, (error) => {
                            input.forEach((elem)=>{
                                elem.value = '';    
                            } );
                            statusMessage.textContent = errorMessage;
                            console.error(error);   
                        });

                });
          });
          const postData = (body) => { 
            fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)

            })
                .then((response) => {
                    if (response.status !== 200){
                        throw 'error';
                    }
                return(response.json);
            })
            .then((response) => {
            
            })
            .catch((error) => console.error(error));
        };
};

export default sendForm;