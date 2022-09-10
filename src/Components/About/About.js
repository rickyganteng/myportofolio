import { Row, Col, Image } from 'react-bootstrap';

// import style from './Navbar.module.css';
import Myfoto from '../../Components/Assets/contoh.png';
function About() {
  return (
    <>
      <h1>Hi, guys !</h1>
      <Row>
        <Col>
          <p>
            {' '}
            Perkenalkan nama saya ricky syahputra, saya lulusan dari Universitas
            Dian Nuswantoro, saat ini saya sedang berdomisili di Jakarta dan
            bekerja di Kementerian Kesehatan RI. <br />
            Saat ini saya sedang memperdalam ilmu pemrograman khususnya
            Front-End Web ReactJS dan sudah berjalan sekitar 1 tahun.
            <br />
            Saya saat ini juga untuk project Freelance, <br />
            Jika berkenan bisa hubungi saya lewat sini ya.
            <br />
            Salam hangat, Ricky Syahputra
          </p>
        </Col>
        <Col>
          heheh
          <Image src={Myfoto} alt='Candi Borobudur' />
        </Col>
      </Row>
    </>
  );
}

export default About;
