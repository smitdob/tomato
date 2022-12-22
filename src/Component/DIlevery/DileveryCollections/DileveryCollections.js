import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../Common/slider/NextArrow';
import PreArrow from '../../Common/slider/PreArrow';
import './DileveryCollections.css';
import DileveryItem from './DileveryItem/DileveryItem';
const DileveryItems =  [
    {
        id:1,
        title:'Pizza',
        cover:"https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        title:'Burger',
        cover:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        title:'Rolls',
        cover:"https://images.pexels.com/photos/11872337/pexels-photo-11872337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        title:'Cake',
        cover:"https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:5,
        title:'Biryani',
        cover:"https://images.pexels.com/photos/7837978/pexels-photo-7837978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:6,
        title:'Chaat',
        cover:"https://images.pexels.com/photos/13063300/pexels-photo-13063300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:7,
        title:'Ice Cream',
        cover:"https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:8,
        title:'Sandwhich',
        cover:"https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:9,
        title:'Chole Bhature',
        cover:"https://images.unsplash.com/photo-1580689376629-2c4ef0920e79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=439&q=80"
    },
    {
        id:10,
        title:'Samosa',
        cover:"https://images.unsplash.com/photo-1589301773859-bb024d3ad558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
];
const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow:  <PreArrow/>,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
            nextArrow: false,
            prevArrow: false,
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
            nextArrow: false,
            prevArrow: false,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: false,
            prevArrow: false,
            dots: false
          }
        },
        {
          breakpoint: 320,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: false,
            prevArrow: false,
            dots: false
          }
        }
      ]
};
const DileveryCollections = (props) => {
  return (
    <>
        <div className="dilevery-collection container-md">
            <div className="max-width">
                <div className='collection-title'> Eat What Makes You Happy</div>
                <Slider {...settings}>
                    {DileveryItems.map((item)=>{
                        return <DileveryItem item={item}  key={item.id}/>
                    })}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default DileveryCollections