import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper';

import PortofolioData from '../../Components/Json/portofolio.json';
// import SsComodo from '../../Components/Assets/comodo.png';
// import imagewebsite from '../../Components/Assets';
import style from './Portofolio.module.css';
function Portofolio() {
  return (
    <>
      <h1 className='text-center mb-5'>Ini Portofolio</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {PortofolioData.map((item, key) => {
          console.log(item.GambarWebsite);
          // const imagewebsite = `../../Components/Assets/${item.GambarWebsite}`;
          return (
            <>
              <SwiperSlide>
                <div className={style.Transition}>
                  <Card
                    style={{
                      width: '18rem',
                      backgroundColor: 'transparent',
                    }}
                  >
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
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default Portofolio;
