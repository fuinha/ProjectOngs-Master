import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Fuerza Paraguay" />
        <span>Bien Venido, FUNC</span>

        <Link className="button" to="/incidents/new">Cadastrar Nuevo</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>

      <ul>

        <li>
          <strong>caso:</strong>
          <p>
            Caso Teste
          </p>
          <strong>Descrebe:</strong>
          <p>Describe Teste</p>

          <strong>Valor:</strong>
          <p>0.000G$</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>caso:</strong>
          <p>
            Caso Teste
          </p>
          <strong>Descrebe:</strong>
          <p>Describe Teste</p>

          <strong>Valor:</strong>
          <p>0.000G$</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>caso:</strong>
          <p>
            Caso Teste
          </p>
          <strong>Descrebe:</strong>
          <p>Describe Teste</p>

          <strong>Valor:</strong>
          <p>0.000G$</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>caso:</strong>
          <p>
            Caso Teste
          </p>
          <strong>Descrebe:</strong>
          <p>Describe Teste</p>

          <strong>Valor:</strong>
          <p>0.000G$</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        
      </ul>
    </div>
  );
}

