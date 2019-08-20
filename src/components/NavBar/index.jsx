import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <header className="menu">
      <div className="contenedor">
        <p>PABLO SUAREZ SALVATIERRA</p>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">Sobre Mi</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/mistrabajos">Mis trabajos</Link>
            </li>
            <li>
              {" "}
              <Link to="/trabajarConmigo">¿Por que trabajar conmigo?</Link>
            </li>
            <li>
              <Link to="/blog">Blog </Link>
            </li>
            <li>
              {" "}
              <Link to="/contacto" className="link">
                {" "}
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contenedor" id="contenedor-titulo">
        <div id="cabecera">
          <h1>Pablo Oscar Salvatierra</h1>
          <h3>Desarrollador WEB Full Stack</h3>
          <Link to="/mistrabajos">Mis Trabajos</Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
