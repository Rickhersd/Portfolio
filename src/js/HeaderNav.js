export class HeaderNav {

  constructor (){
    this.navItems = document.querySelectorAll('.header__nav-item');
  }

  addEvents(){

    this.navItems.forEach(element => {

      element.addEventListener("mouseenter", (event) => {
        for(let i = 0; i < this.navItems.length; i++){
          this.navItems[i] == event.currentTarget ? 
            this.toggleDiv(event.currentTarget, "increase") : 
            this.toggleDiv(this.navItems[i], "decrease");
        }  
      });

      element.addEventListener('mouseout',(event) => {
        this.navItems.forEach(element => {
          element.classList.remove('increase');
          element.classList.remove('decrease');
        }); 
          
      })

    });
  }

  toggleDiv(element, classList){
    
    element.classList.add(classList);
  }
}