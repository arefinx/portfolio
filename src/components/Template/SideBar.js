import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.jpg`} alt="" />
      </Link>
      <header>
        <h2>Arefin</h2>
        <p><a href="mailto:ahmedarefinsajjad@gmail.com">mail@arefin.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Welcome to my portfolio! I am Arefin, a student by day and web developer by night.</p>
      <p>Through my work, I strive to make a difference. Explore my portfolio to discover my creative journey and projects.</p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Arefin <Link to="/"> </Link>.</p>
    </section>
  </section>
);

export default SideBar;
