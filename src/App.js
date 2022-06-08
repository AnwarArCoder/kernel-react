import React, { Fragment } from "react";

import NavigatorBar from './Components/NavigatorBar/NavigatorBar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Statistic from './Components/Statistic/Statistic';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Process from './Components/Process/Process';
import Portfolio from './Components/Portfolio/Portfolio';
import Clients from './Components/Clients/Clients';
import Sponsors from './Components/Sponsors/Sponsors';
import Blog from './Components/Blog/Blog';
import Map from './Components/Map/Map';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <NavigatorBar />
      <Header />
      <About />
      <Statistic />
      <Resume />
      <Skills />
      <Services />
      <Process />
      <Portfolio />
      <Clients />
      <Sponsors />
      <Blog />
      <Map />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
