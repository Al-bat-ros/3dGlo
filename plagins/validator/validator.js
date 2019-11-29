class Validator {
    constructor({selector, pattern, method}){
        this.form = document.querySelector(selector);//
        this.pattern = pattern;// кастомные шаблоны
        this.method = method;// настройки
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button';
        });
    }
    init(){
        this.applyStyle();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.chekIt.bind(this)));
    }

    isValid(elem){
        
       return false;
    }

    chekIt(event){
        const target = event.target;
        
       if(this.isValid(target)){ 
           this.showSuccess(target);   
       }else{
        this.showError(target);
       }
    }

    //Сообщает если наш инпут непрошол валидацию
    showError(elem){
        elem.classList.remove('success');
        elem.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacetElement('afterend', errorDiv);
    }

    //Валидация прошла успешно
    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling.classList.contains('validator-error')){
            elem.nextElementSibling.remove();
        }
    }

    applyStyle(){
        const style = document.createElement('style');
        style.textContent = `
        input.success{
            border: 2px solid green
        }
        input.error {
            border: 2px solid red
        }
        .validator-error {
            font-size: 14px;
            color: red
        }
        `;
        document.head.appendChild(style);
    }
    
}