const command = () => {

    const command = document.querySelector('.command');

     let save;

      command.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target.matches('.command__photo')){
            save = target.src;
            target.src = target.dataset.img;
        }     
      });
      command.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target.matches('.command__photo')){
            target.src = save;
        }     
      });

}; 

export default command;