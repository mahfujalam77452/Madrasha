import React, { useContext } from 'react';
import Slider from "react-slick";
import { TeacherCard } from '../TeacherCard/TeacherCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TeacherAnm.css';
import { DataContext } from '../../Context/DataContext';

const TeacherAnm = () => {
  const { teachers } = useContext(DataContext);

  // Slider settings with responsive configuration
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // Default to showing 4 slides
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3, // Show 3 cards under 1300px
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2, // Show 2 cards under 1000px
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 card under 500px
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (!teachers) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="box">
        <div className="teacher">
          <h1>শিক্ষক মণ্ডলী</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {teachers.map((a, i) => (
              <TeacherCard imgSrc={a.image} name={a.fullName} description={a.designation} key={i} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default TeacherAnm;
