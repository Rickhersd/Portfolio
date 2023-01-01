import React from 'react'
import { useRef } from 'react'

import '../sass/_contact.scss'

export default function ContactForm() {
  return (
    <div className="contact__form-cont">
      <form className= "contact__form field" action="sendEmail.php">
        <fieldset>
          <label className="contact__form-label" htmlFor="user__name" data-text="form-name">Nombre</label>
          <input className="contact__form-field" type="text" name="user__name"  maxLength={96} autoComplete="off" required></input>
        </fieldset>
        <fieldset>
          <label className="contact__form-label" htmlFor="user__email" data-text="form-email">Correo Electrónico</label>
          <input className="contact__form-field" type="email" name="user__email" maxLength={96} autoComplete="off" required></input>
        </fieldset>
        <fieldset>
          <label className="contact__form-label" htmlFor="user__content" data-text="form-content">Tu mensaje</label>
          <textarea className= "contact__form-field" name='user__content' rows={5} maxLength={342} required></textarea>
        </fieldset>
        <fieldset>
          <input id="submit-btn"  className= "contact__form-field" type="submit" value="ENVIAR"></input>
          <span className= "circle__loading circle__first">
            <span className= "circle__loading circle__second"></span>
          </span>
          <div className="contact__response-green" data-text="form-response-green">Mensaje enviado exitosamente</div>
          <div className="contact__response-red" data-text="form-response-red">El mensaje no pudo ser enviado</div>
        </fieldset>
      </form>
    </div>
  )
}
