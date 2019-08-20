import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Routes from "../Routes/routes";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const App = () => (
  <>
    <NavBar />
    <main>
      <Switch>
        <Route path="/" component={Routes} />
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
