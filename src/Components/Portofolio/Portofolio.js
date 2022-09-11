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
// import style from './Navbar.module.css';
function Portofolio() {
  return (
    <>
      <h1>Ini Portofolio</h1>
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
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{item.NameWebsite}</Card.Title>
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
                    <Card.Link href='#'>Card Link</Card.Link>
                    <Card.Link href='#'>Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default Portofolio;
