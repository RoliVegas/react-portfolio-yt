import React from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

const data = [
    {
        avatar: AVATAR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel quae iusto nostrum soluta, quasi itaque corporis possimus, exercitationem aperiam nulla eum eligendi. Molestias optio minus voluptatum quia aut architecto?'
    },
    {
        avatar: AVATAR2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel quae iusto nostrum soluta, quasi itaque corporis possimus, exercitationem aperiam nulla eum eligendi. Molestias optio minus voluptatum quia aut architecto?'
    },
    {
        avatar: AVATAR3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel quae iusto nostrum soluta, quasi itaque corporis possimus, exercitationem aperiam nulla eum eligendi. Molestias optio minus voluptatum quia aut architecto?'
    },
    {
        avatar: AVATAR4,
        name: 'Nana Ava McBrown',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel quae iusto nostrum soluta, quasi itaque corporis possimus, exercitationem aperiam nulla eum eligendi. Molestias optio minus voluptatum quia aut architecto?'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween= {40}
                slidesPerView={1}
                pagination={{clickable: true}}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                            <div className='client__avatar'>
                                <img src={avatar} alt="Avatar 1" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials