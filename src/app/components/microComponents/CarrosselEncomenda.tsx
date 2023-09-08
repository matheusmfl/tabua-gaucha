'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image'
import genericImage from '../../assets/imagemFiccticia.jpeg'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import 'swiper/css/effect-coverflow';

import 'swiper/css/parallax'

import { Autoplay, EffectCoverflow, Pagination, Parallax } from 'swiper/modules';
import { useEffect } from 'react';



export function CarrosselEncomenda() {
  SwiperCore.use([Autoplay, Pagination, Parallax, EffectCoverflow])
  useEffect(() => {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    const activeBullets = document.querySelectorAll('.swiper-pagination-bullet-active');


    if (bullets) {
      bullets.forEach(bullet => {
        const bulletElement = bullet as HTMLElement;

        bulletElement.style.backgroundColor = '#5C2C0C';
        bulletElement.style.transform = 'scale(1.25)';

      });
    }
  }, []);
  return (
    <Swiper
      effect={'coverflow'}

      coverflowEffect={
        {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
      modules={[EffectCoverflow, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      pagination={{
        enabled: true,
        clickable: true,
        type: 'bullets',
      }}
      parallax={true}


      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='md:h-[400px] md:w-[380px] md:rounded-md'
    >
      <SwiperSlide className="swiper-slide">
        <div className='md:h-[400px] md:w-[380px]'>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className='md:h-[400px] md:w-[380px]'>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className='md:h-[400px] md:w-[380px]'>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className='md:h-[400px] md:w-[380px]'>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
    </Swiper>

  )
}