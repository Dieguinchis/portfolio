import "@/components/Form/form.css";
import React from "react";
import Button from "@/components/Button/Button";
import SendIcon from "@/assets/send.svg?react";

function Form() {
  return (
    <div className="form-wrapper">
      <div className="form-welcome">
        <h3>¡Hablemos!</h3>
        <p>Completá el formulario y te responderé a la brevedad</p>
      </div>

      <form 
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Uso en Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name="name" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="tu@email.com" required />
          </div>
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Cuéntame sobre tu proyecto..."
            required
          />
        </div>

        <div className="form-buttons">
          <Button variant="form" type="submit">
            ENVIAR <SendIcon className="send-icon" style={{ width: 20, height: 20, marginLeft: 8 }} />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;