import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ahmed Arefin</h2>
        <p><a href="mailto:ahmedarefinsajjad@gmail.com">mail@arefin.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Finn. I am a student and a tech enthusiast and welcome to my website.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ahmed Arefin <Link to="/"> </Link>.</p>
    </section>
  </section>
);

export default SideBar;
