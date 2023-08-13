import React from 'react';

import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import NavTab from './NavTab/NavTab';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <main className="main">
      {/* <NavTab /> */}
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      {/* <Footer /> */}
    </main>
  );
}

export default Main;