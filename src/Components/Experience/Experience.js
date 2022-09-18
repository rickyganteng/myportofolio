import { Row, Col } from 'react-bootstrap';
import ExperienceData from '../../Components/Json/experience.json';
import style from './Experience.module.css';

function Experience() {
  console.log(ExperienceData);
  return (
    <>
      <h1 className={`text-center mb-5 ${style.FontJobMain}`}>Experience</h1>
      {/* <h1>Heheheh © </h1> */}
      <Row>
        {ExperienceData.map((item, key) => {
          return (
            <>
              <Col>
                <p className={`${style.namaPerusahaan} ${style.FontJob}`}>
                  {item.namaPerusahaan}
                </p>
                <p>
                  {item.AwalMasuk} - {item.AkhirMasuk}
                </p>

                {item.HalyangDilakukan.map((itemm, keyy) => {
                  console.log(itemm);
                  return (
                    <>
                      <ul>
                        <li className={style.HalyangDilakukan}>
                          <p> {itemm}</p>
                        </li>
                      </ul>
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
