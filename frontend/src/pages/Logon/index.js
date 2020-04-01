import React from 'react';
import { Link} from 'react-router-dom';
import  { FiLogIn } from 'react-icons/fi';

import './styles.css'

import logoImg  from '../../assets/logo.svg'

export default function Logon() {

  function raiseInvoiceClicked() {
    // here i wish to write the code for opening the page in new tab.
    const url = 'http://fuerzaparaguay.online';
    window.open(url, '');
}

    return (
        <div className="logon-container">
          <section className="form">

          <button type="submit" style={StyleSheet.btn} onClick={raiseInvoiceClicked}>
          <img src={logoImg} alt="fuerza" style={StyleSheet.img}/>
           <Link className="back-link" to="fuerzaparaguay.online" />
          </button>
          <form>
            <h1>Login</h1>

            <input placeholder="Usuario" />
            <input type="password" placeholder="Contrasena" />

            <button className="button" type="submit">Adentrar</button>
            <Link  className="back-link" to="/profile">
              <FiLogIn size={16} color="#E02041"/>
              Registrar
            </Link>
          </form>
          </section>
        
        </div> 
    );
  }
  
