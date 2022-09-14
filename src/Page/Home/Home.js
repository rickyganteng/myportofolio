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
          <h2 className={`${style.ColorWhite} ${style.top}`}>halo, I'm</h2>
          <h1 className={`${style.ColorWhite} ${style.FontName}`}>
            Ricky Syahputra
          </h1>
          <h4 className={style.FontJob}>Front End Web Developer</h4>

          <h2 className={`${style.top} ${style.Margintop} text-center`}>
            About Me
          </h2>
          <About />
          <div className={style.Margintop}>
            <Experience />
          </div>
          <div className={style.Margintop}>
            <Portofolio />
          </div>
          <div className={style.Margintop}>
            <Contact />
          </div>
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
