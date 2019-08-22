import React from "react";
import "./style.css";
import waves from "../../media/imagenes/waves.png";
import monitor from "../../media/imagenes/monitor.png";
import celular from "../../media/imagenes/mobile.png";
import seo from "../../media/imagenes/seo.png";
import wp from "../../media/imagenes/wordpress.png";
import mantenimiento from "../../media/imagenes/mante.png";
import marketing from "../../media/imagenes/marketing.png";
function Servicios() {
  return (
    <section id="servicios">
      <div className="contenedor">
        <h3>Servicios</h3>
        <div className="contenedor-servicios">
          <div className="servicio violeta">
            <h4>Diseño Web</h4>
            <p>
              Páginas web atractivas y funcionales con el objetivo de satisfacer
              todas tus expectativas. La importancia del diseño es fundamental
              para tener éxito y atraer a tus visitantes. También lo es la
              velocidad de carga del sitio web, deben ser rápidos para que el
              visitante tenga la mejor experiencia
            </p>
            <img src={monitor} alt="" className="icono" />
            <img className="ondas" src={waves} alt="no iamgen" />
          </div>
          <div className="servicio celeste">
            <h4>Responsive Design</h4>
            <p>
              Hoy en día las páginas web se ven en multitud de dispositivos como
              tablets, celulares, libros electrónicos, notebooks, PCs, etc. La
              tecnología móvil es el presente y el futuro. Para eso es
              importante y me aseguro de que tu sitio web sea compatible con
              todos los tamaños de pantalla de esta época moderna
            </p>
            <img src={celular} alt="" className="icono" />
            <img className="ondas" src={waves} alt="no iamgen" />
          </div>
          <div className="servicio violeta">
            <h4>SEO</h4>
            <p>
              Al crear sitios web, tengo muy en cuenta la optimización de
              motores de búsqueda (SEO). Llevo a cabo prácticas de SEO estándar
              en cada página del sitio web, lo que permite que tu sitio tenga
              una clasificación más alta en los resultados de Google y asi
              generar mas tráfico a la web
            </p>
            <img src={seo} alt="" className="icono" />
            <img className="ondas" src={waves} alt="no iamgen" />
          </div>
          <div className="servicio celeste">
            <h4>Autoadministrable</h4>
            <p>
              Es importante que puedas administrar tu página web vos mismo,
              desde cualquier lugar y en cualquier momento. Desarrollo sistemas
              de gestión de contenido que te permiten ver los datos de tu página
              web y editar el contenido que quieras, lo que te permite
              mantenerte actualizado
            </p>
            <img src={wp} alt="" className="icono" />
            <img className="ondas" src={waves} alt="no iamgen" />
          </div>
          <div className="servicio violeta">
            <h4>Mantenimiento</h4>
            <p>
              Podés contactarme si necesitas actualizar tu página web, agregar
              nuevas secciones o cualquier cambio que necesites. Esto es
              perfecto para los sitios web de pequeñas empresas, donde no se
              necesita un diseñador de páginas web a tiempo completo, sino solo
              en distintas ocasiones
            </p>
            <img src={mantenimiento} alt="" className="icono" />
            <img className="ondas" src={waves} alt="no iamgen" />
          </div>
          <div className="servicio celeste">
            <h4>Marketing Digital</h4>
            <p>
              Utilizo las herramientas mas importantes como Google Adwords y
              Google Analytics, para que tu negocio aparezca en los resultados
              de búsqueda de Google justo cuando alguien te necesita y analizar
              como los usuarios interactúan con tu página web
            </p>
            <img src={marketing} alt="" className="icono" />
            <img className="ondas" src={waves} alt="no iamgen" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Servicios;
