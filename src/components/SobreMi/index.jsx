import React from "react";
import "./style.css";
import computadora from "../../media/imagenes/computadoras.png";
import { Link } from "react-router-dom";
function SobroMi() {
  return (
    <section id="sobremi">
      <div className="contenedor">
        <h3>Sobre Mi</h3>
        <div className="contenedor-sobre-mi">
          <div className="computadora">
            <img src={computadora} alt="" />
          </div>
          <div className="descripcion">
            <p>
              Mi nombre es Pablo Suarez Salvatierra y soy diseñador de páginas
              web. Tengo la experiencia en desarrollo de sitios web para
              pequeñas y medianas empresas, hasta tiendas en línea con carrito
              de compras.
            </p>
            <p>
              Me aseguro de utilizar siempre las últimas tecnologías de
              desarrollo web: HTML5, CSS3, jQuery, Wordpress, React, JavaScript
              ES6 a ES11. Si necesitás una página web moderna, funcional, que se
              adapte a todos los diferentes tipos de pantalla, te aseguro que
              llegaste al lugar correcto.{" "}
            </p>
            <p>
              Podes ponerte en contacto conmigo a través de Facebook, Linkedin o
              completando el formulario de contacto que se encuentra al final de
              mi sitio web.
            </p>
            <div className="booton">
              <Link to="/mistrabajos">Mis trabajos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SobroMi;
