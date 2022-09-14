import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import PortofolioData from '../../Components/Json/portofolio.json';
// import SsComodo from '../../Components/Assets/comodo.png';
// import imagewebsite from '../../Components/Assets';
import style from './Portofolio.module.css';
function Portofolio() {
  return (
    <>
      <h1 className='text-center mb-5'>Ini Portofolio</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {PortofolioData.map((item, key) => {
          console.log(item.GambarWebsite);
          // const imagewebsite = `../../Components/Assets/${item.GambarWebsite}`;
          return (
            <>
              <SwiperSlide>
                <div className={style.Transition}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>
                        <div className={style.NameWebsite}>
                          {item.NameWebsite}
                        </div>
                      </Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        <a
                          href={item.LinkWebsite}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {item.LinkWebsite}
                        </a>
                      </Card.Subtitle>
                      <Card.Img
                        variant='top'
                        src={require(`./${item.GambarWebsite}`)}
                      />
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default Portofolio;
