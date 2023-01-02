import emailjs from '@emailjs/browser';

(() => {
  emailjs.init("sJ6q2p_owG6fKBxe7");
})()


const sendForm = (form:string) => {

  const SERVICES_ID = "service_jp500qr";
  const TEMPLATE_ID = "template_gsuoasf";
  
  try{
    emailjs.sendForm(SERVICES_ID, TEMPLATE_ID, form)
    .then(
      (res) => {
        return res.status
      }, 
      (err) => {
        
      }
    )
  } catch {
    () => {
      
    }
  }

}

//send FormData to emailJs.Service
function initForm (){

  const form = document.querySelector('.contact__form');
  const submitBtn = document.getElementById('submit-btn');
  const resGreen = document.querySelector('.contact__response-green');
  const resRed = document.querySelector('.contact__response-red');

  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    submitBtn.toggleAttribute("disabled");
    try{
      emailjs.sendForm(serviceID, templateID, form)
      .then( function (res) {
        resGreen.style.display = 'flex';
        submitBtn.toggleAttribute("disabled");
        setTimeout(() => {
          resGreen.style.display = 'none';
        },resDurantion)
      },function (err) {
        resRed.style.display = 'flex';
        submitBtn.toggleAttribute("disabled");
        setTimeout(() => {
          resRed.style.display = 'none';
        },resDurantion)
      });
    }catch(err){
      setTimeout(() => {
        resRed.style.display = 'flex';
        submitBtn.toggleAttribute("disabled");
        setTimeout(() => {
          resRed.style.display = 'none';
        },resDurantion)
      },3000)
    }
  }); 
}