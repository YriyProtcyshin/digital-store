import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
// Import custom style
import './slider.scss';

import photo_1 from '../../images/main-banner.webp';
import photo_2 from '../../images/main-banner-2.webp';

const Slider = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  const bigImage = (window.innerWidth - 10) / 2;
  const bigHeight = bigImage / 1.66;

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      // autoplay={{
      //   delay: 6000,
      // }}
      effect="fade"
      loop={true}
      modules={[Pagination, Autoplay, EffectFade]}
      className="slider"
    >
      <SwiperSlide>
        <div className="main-section">
          <img
            src={photo_1}
            alt=""
            className="image"
            width={bigImage}
            height={bigHeight}
          />
          <div className="main-content">
            <p className="text">SUPERCHARGED FOR PROS.</p>
            <h2 className="title">iPad S13+ Pro.</h2>
            <p className="sub-title">
              From $999.00 or $41.62/mo.
              <br />
              for 24 more Footnote
            </p>
            <Link to="/" className="button">
              Buy now
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="main-section">
          <img
            src={photo_2}
            alt=""
            className="image"
            width={bigImage}
            height={bigHeight}
          />
          <div className="main-content">
            <p className="text">SUPERCHARGED FOR PROS.</p>
            <h2 className="title">Special Sale</h2>
            <p className="sub-title">
              From $999.00 or $41.62/mo. <br />
              for 24 more Footnote
            </p>

            <Link to="/" className="button">
              Buy now
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
