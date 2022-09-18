import { Row, Col, Image } from 'react-bootstrap';

// import style from './Navbar.module.css';
import Myfoto from '../../Components/Assets/myprofile.png';
import style from './About.module.css';

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
} from 'react-icons/si';
function About() {
  return (
    <>
      <Row md={12}>
        <Col md={7}>
          <p className={style.FontAbout}>
            {' '}
            Perkenalkan nama saya ricky syahputra, saya lulusan dari Universitas
            Dian Nuswantoro, saat ini saya sedang berdomisili di Jakarta dan
            bekerja di Kementerian Kesehatan RI. <br />
          </p>
          <p className={style.FontAbout}>
            Saat ini saya sedang memperdalam ilmu pemrograman khususnya
            Front-End Web ReactJS dan sudah berjalan sekitar 1 tahun.
          </p>
          <p className={style.FontAbout}>
            Saya saat ini juga untuk project Freelance, <br />
            Jika berkenan bisa hubungi saya lewat sini ya.
          </p>
          <p className={style.FontAbout}>Salam hangat, Ricky Syahputra</p>
          <p className={style.FontAbout}>
            Ini adalah beberapa teknologi yang saya gunakan baru - baru ini{' '}
          </p>
          <Row md={12} className={style.FontIcon}>
            <Col>
              <SiHtml5 />
            </Col>
            <Col>
              <SiJavascript />
            </Col>
            <Col>
              <SiReact />
            </Col>
            <Col>
              <SiRedux />
            </Col>
            <Col>
              <SiCss3 />
            </Col>
            <Col>
              <SiBootstrap />
            </Col>
            <Col>
              <SiNodedotjs />
            </Col>
          </Row>
        </Col>
        <Col md={5}>
          heheh
          <div className={style.Persegi1}>
            <div className={style.Persegi2}>
              <div className={style.Persegi3}>
                <Image
                  className={style.myPhoto}
                  src={Myfoto}
                  alt='Candi Borobudur'
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default About;
