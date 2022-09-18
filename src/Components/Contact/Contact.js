import { Row, Col, Button, Form } from 'react-bootstrap';
import { SiGmail, SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si';
import style from './Contact.module.css';

function Contact() {
  return (
    <>
      <h1 className='text-center mb-5'>Contact Me</h1>
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
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Type your message'
              />
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
            <a
              href='https://api.whatsapp.com/send/?phone=%2B6285712287514&text=Hai+Ricky+Syahputra.%0ASaya+ingin+interaksi+dengan+anda+%21&type=phone_number&app_absent=0'
              target='_blank'
              rel='noreferrer'
            >
              <SiWhatsapp />
            </a>
          </div>
        </Col>
        <Col md={1}>
          <div className={style.reSizeIcon}>
            <a
              href='https://www.linkedin.com/in/ricky-syahputra-619723154/'
              target='_blank'
              rel='noreferrer'
            >
              <SiLinkedin />
            </a>
          </div>
        </Col>
        <Col md={1}>
          <div className={style.reSizeIcon}>
            <a
              href='https://github.com/rickyganteng'
              target='_blank'
              rel='noreferrer'
            >
              <SiGithub />
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Contact;
