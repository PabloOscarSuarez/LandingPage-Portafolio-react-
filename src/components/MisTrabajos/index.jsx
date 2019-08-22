import React from "react";
import "./style.css";
import inmobiliaria from "./04c2e880-ba16-11e9-97b6-3784482c4ce6-home-slider_desktop.webp";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
function componentName() {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <section id="mistrabajos">
      <div className="contenedor">
        <h3>Mis Trabajos</h3>
        <AliceCarousel mouseDragEnabled buttonsDisabled>
          <img
            src={inmobiliaria}
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />

          <img
            src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-3a0a48f4-35da-4bab-91a3-cabb1de26a35.jpg"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
          <img
            src={inmobiliaria}
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
          <img
            src={inmobiliaria}
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
          <img
            src={inmobiliaria}
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
        </AliceCarousel>
      </div>
    </section>
  );
}
export default componentName;
