import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../Common/slider/NextArrow'
import PreArrow from '../../Common/slider/PreArrow';
import './TopBrand.css'
const BrandList = [
  {
    id: 1,
    time: "35min",
    // cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Burger_King_1994_logo.svg/200px-Burger_King_1994_logo.svg.png"
    cover: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
  },
  {
    id: 2,
    time: "48min",
    cover: "https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80"
  },
  {
    id: 3,
    time: "37min",
    cover: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 4,
    time: "5min",
    cover: "https://images.unsplash.com/photo-1654648662300-82daeea37b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  },
  {
    id: 5,
    time: "50min",
    cover: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 6,
    time: "55min",
    cover: "https://images.unsplash.com/photo-1654155291970-d1ff53dfb44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
  },
  {
    id: 7,
    time: "15min",
    cover: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 8,
    time: "18min",
    cover: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 9,
    time: "11min",
    cover: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 10,
    time: "30min",
    cover: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  }
]
const settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 2,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: false
      }
    }
  ]
};
const TopBrand = () => {
  return (
    <>
      <div className="top-brand-wrapper">
        <div className='top-brands max-width container-md' >
          <div className='collection-title'>Top Brands for You</div>
          <Slider {...settings}>
            {BrandList.map((brand) => {
              return <div key={brand.id}>
                <div className="top-brand-cover" >
                  <img src={brand.cover} alt={brand.time} className='top-brand-image' />
                </div>
                <div className='top-brand-time'>{brand.time}</div>
              </div>
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default TopBrand