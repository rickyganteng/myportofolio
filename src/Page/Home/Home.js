import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import style from './Home.module.css';

import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Portofolio from '../../Components/Portofolio/Portofolio';
import Experience from '../../Components/Experience/Experience';
import Footer from '../../Components/Footer/Footer';
// import Svg from '../../Components/53463-modern-laptop.json';
class Home extends Component {
  render() {
    // console.log('weheheh');
    return (
      <>
        <Container className={`${style.Container}`}>
          <Navbar />
          <h2 className={style.top}>halo, I'm</h2>
          <h1>Ricky Syahputra</h1>
          <h4>Front End Web Developer</h4>

          <h4 className={style.top}>About</h4>
          <About />
          <Experience />
          <Portofolio />
          <Contact />
          {/* {Svg} */}
          <div className='mt-5 mb-3'>
            <Footer />
          </div>
        </Container>
      </>
    );
  }
}
export default Home;
