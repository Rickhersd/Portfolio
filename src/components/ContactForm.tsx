import React, { FocusEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser';

import '../sass/_contact.scss'

export default function ContactForm() {

  const [isSending, setIsSending] = useState(false);

  const SERVICES_ID = "service_jp500qr";
  const TEMPLATE_ID = "template_gsuoasf";
  const PUBLIC_KEY = "sJ6q2p_owG6fKBxe7";

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if(isSending) return; 
    setIsSending(true);

    const form = document.querySelector('.contact__form') as HTMLFormElement;

    try{
      emailjs.sendForm(SERVICES_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then((res) => {
        setIsSending(false)
      })
      .then((err) => {
        setIsSending(false)
      })      
    } catch (err){ 
      setIsSending(false)
    }
  }

  const handleOnFocus = (e:FocusEvent) => {
    e.target.parentElement?.setAttribute('data-focused', 'true')
  }

  const handleOnBlur = (e:FocusEvent) => {
    e.target.parentElement?.setAttribute('data-focused', 'false')
  }

  const loader = (
    <span className= "circle__loading circle__first">
      <span className= "circle__loading circle__second"></span>
    </span>
  )

  return (
    <div className="contact__form-cont">
      <form  onSubmit={(e) => {handleSubmit(e)}} className="contact__form field" action="sendEmail.php">
        <fieldset>
          <label className="contact__form-label" htmlFor="user__name">Nombre</label>
          <input onFocus={e => handleOnFocus(e)} onBlur={e => handleOnBlur(e)} className="contact__form-field" type="text" name="user__name"  maxLength={96} autoComplete="off" required></input>
        </fieldset>
        <fieldset>
          <label className="contact__form-label" htmlFor="user__email">Correo Electrónico</label>
          <input onFocus={e => handleOnFocus(e)} onBlur={e => handleOnBlur(e)} className="contact__form-field" type="email" name="user__email" maxLength={96} autoComplete="off" required></input>
        </fieldset>
        <fieldset>
          <label className="contact__form-label" htmlFor="user__content">Tu mensaje</label>
          <textarea onFocus={e => handleOnFocus(e)} onBlur={e => handleOnBlur(e)} className= "contact__form-field" name='user__content' rows={5} maxLength={342} required></textarea>
        </fieldset>
        <fieldset>
          <input id="submit-btn"  className= "contact__form-field" type="submit" value="ENVIAR"></input>
          {isSending && loader}
          <div className="contact__response-green" data-text="form-response-green">Mensaje enviado exitosamente</div>
          <div className="contact__response-red" data-text="form-response-red">El mensaje no pudo ser enviado</div>
        </fieldset>
      </form>
    </div>
  )
}
