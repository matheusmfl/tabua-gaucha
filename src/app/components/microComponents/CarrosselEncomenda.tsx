'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image'
import icon1 from '../../assets/iconsProduct/payment.svg'
import icon2 from '../../assets/iconsProduct/discount.svg'
import icon3 from '../../assets/iconsProduct/ship.svg'
import icon4 from '../../assets/iconsProduct/safe.svg'

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';


export function CarrosselEncomenda() {
  SwiperCore.use([Autoplay])
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='flex items-center justify-center w-full gap-3'>
          <Image src={icon1} alt='Icone alt' priority />
          {/* Text divs */}
          <div className='font-roboto text-stone-800 flex flex-col gap-1'>
            <strong className='text-base'>ATÉ 5X SEM JUROS</strong>
            <span className='text-sm'>
              Todos os cartões de crédito!
            </span>
          </div>
        </div>
      </SwiperSlide>


    </Swiper>

  )
}