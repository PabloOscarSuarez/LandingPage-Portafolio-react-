import React from "react";
import "./App.css";
import NavBar from "../../components/NavBar";
import SobroMi from "../../components/SobreMi";
import Blog from "../../components/Blog";
import Contacto from "../../components/Contacto";
import MisTrabajos from "../../components/MisTrabajos";
import Servicios from "../../components/Servicios";
import TrabajarConmigo from "../../components/TrabajarConmigo";
import Footer from "../../components/Footer";

const App = () => (
  <>
    <NavBar />
    <main>
      <SobroMi />
      <Servicios />
      <MisTrabajos />
      <TrabajarConmigo />
      <Blog />
      <Contacto />
    </main>
    <Footer />
  </>
);

export default App;
