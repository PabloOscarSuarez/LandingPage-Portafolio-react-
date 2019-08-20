import React from "react";
import { Switch, Route } from "react-router-dom";
import SobroMi from "../../components/SobreMi";
import Blog from "../../components/Blog";
import Contacto from "../../components/Contacto";
import MisTrabajos from "../../components/MisTrabajos";
import Servicios from "../../components/Servicios";
import TrabajarConmigo from "../../components/TrabajarConmigo";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SobroMi} />
    <Route exact path="/servicios" component={Servicios} />
    <Route exact path="/mistrabajos" component={MisTrabajos} />
    <Route exact path="/TrabajarConmigo" component={TrabajarConmigo} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/contacto" component={Contacto} />
  </Switch>
);

export default Routes;
