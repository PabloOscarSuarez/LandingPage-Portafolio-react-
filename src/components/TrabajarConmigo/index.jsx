import React from "react";
import "./style.css";
import velocidad from "../../media/imagenes/velocidad.png";
import mantenimiento from "../../media/imagenes/mantenimiento.png";
import mobile from "../../media/imagenes/mobile-icon.png";
function TrabajarConmigo() {
  return (
    <section id="trabajar-conmigo">
      <div className="contenedor">
        <h3>¿Por que trabajar conmigo?</h3>
        <div className="trabajar-conmigo-contenido">
          <div className="secciones">
            <img src={velocidad} alt="" />
            <h4>velocida</h4>
            <p>
              Me aseguro de que tu web cargue entre 2 y 4 segundos (depende de
              la cantidad de contenido del sitio). Si una web tarda más de 5
              segundos en cargar, el 70% de los usuarios lo cierra y no vuelve a
              entrar más
            </p>
          </div>
          <div className="secciones">
            <img src={mantenimiento} alt="" />
            <h4>Mantenimiento</h4>
            <p>
              Mantengo una comunicación constante con mi cliente, para enseñarle
              a modificar contenido mediante el panel de Wordpress o para
              cualquier duda/cambio que quiera hacer en su sitio web
            </p>
          </div>
          <div className="secciones">
            <img src={mobile} alt="" />
            <h4>Mobile Priority</h4>
            <p>
              Cada vez mas personas navegan desde sus celulares en cualquier
              parte del mundo. Me aseguro de que tu web esté optimizada para
              cualquier tipo de dispositivo móvil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TrabajarConmigo;
