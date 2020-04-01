import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link} from 'react-router-dom';

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Fuerza Paraguay" />

          <h1>Registrar</h1>
          <p>
          Haga su registro, y adentre in nuestra Plataforma.
          </p>
          <Link  className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041"/>
              Volver
            </Link>
        </section>


          <form>
            <input placeholder="Usuario" />
            <input type="password" placeholder="Contrasena" />
            <input type="email" placeholder="Correo" />
            <input placeholder="WhatsApp" />

          <div className="input-group">
          <input placeholder="Ciudad" />
          <input placeholder="Depto." style={{ width: 200}}/>

          </div>
          <button className="button" type="submit">Registrar</button>

          </form>
      </div>
    </div>
  );
}

