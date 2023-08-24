'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image'
import genericImage from '../../assets/imagemFiccticia.jpeg'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';


export function CarrosselEncomenda() {
  SwiperCore.use([Autoplay, Pagination])
  return (
    <Swiper
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
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image src={genericImage} alt='Imagem genérica' />
        </div>
      </SwiperSlide>
    </Swiper>

  )
}