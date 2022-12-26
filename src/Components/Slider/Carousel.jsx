import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",width:"50px", height:"50px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",width:"50px", height:"50px" }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  const { dataProduct } = useSelector((state) => state.shopReducer);
  
  const settings = {
    
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: i => (
      <div
        style={{
          width: "20px",
          height:"20px",
          backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
          
          border: "1px white solid"
        }}
      >
      
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (

    
    <div className="carousel">
     <Slider {...settings}>
     {dataProduct.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="..." />
            <div className="card-info">
              <h1>{item.name}</h1>
              <p>{item.shortDescription}</p>
              <NavLink to={`/detail/${item.id}`} className={"btn"}>
                Buy Now
              </NavLink>
            </div>
          </div>
        );
      })}
     </Slider>
    </div>
  );
}
