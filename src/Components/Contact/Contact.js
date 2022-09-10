import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import { SiGmail, SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si';
import style from './Contact.module.css';

function Contact() {
  return (
    <>
      <h1>Ini COntact</h1>
      <h3>Send Message</h3>
      <Row>
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmaill'>
              <Form.Control type='text' placeholder='Name' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Email' />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Control as='textarea' rows={3} placeholder='Email' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          Mari kita membuat sesuatu yang baru, berbeda dan lebih penting atau
          membuat sesuatu inovasi dunia.
          <Row>
            <Col md={1}>
              <div className={style.reSizeIcon}>
                <SiGmail />
              </div>
            </Col>
            <Col className='mt-4'> Syahputraricky2@gmail.com</Col>
          </Row>
        </Col>
      </Row>
      <h2 className={style.textCenter}>My Social Media</h2>
      <Row className='justify-content-md-center'>
        <Col md={1}>
          <div className={style.reSizeIcon}>
            <SiWhatsapp />
          </div>
        </Col>
        <Col md={1}>
          <div className={style.reSizeIcon}>
            <a href='https://www.linkedin.com/in/ricky-syahputra-619723154/'>
              <SiLinkedin />
            </a>
          </div>
        </Col>
        <Col md={1}>
          <div className={style.reSizeIcon}>
            <a href='https://github.com/rickyganteng'>
              <SiGithub />
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Contact;
