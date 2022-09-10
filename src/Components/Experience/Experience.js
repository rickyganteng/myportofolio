import { Row, Col, Image } from 'react-bootstrap';
import ExperienceData from '../../Components/Json/experience.json';
// import style from './Navbar.module.css';
function Experience() {
  console.log(ExperienceData);
  return (
    <>
      <h1>Ini Experience</h1>
      <h1>Heheheh © </h1>
      <Row>
        {ExperienceData.map((item, key) => {
          return (
            <>
              <Col>
                <p>{item.namaPerusahaan}</p>
                <p>
                  {item.AwalMasuk} - {item.AkhirMasuk}
                </p>

                {item.HalyangDilakukan.map((itemm, keyy) => {
                  console.log(itemm);
                  return (
                    <>
                      <p>- {itemm}</p>
                    </>
                  );
                })}
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
}

export default Experience;
