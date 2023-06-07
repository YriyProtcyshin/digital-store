import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import './hero.scss';

import Slider from 'components/slider/Slider';
import photo_2 from '../../images/photo-2.webp';
import photo_3 from '../../images/photo-3.webp';
import photo_4 from '../../images/photo-4.webp';
import photo_5 from '../../images/photo-5.webp';

import CategoryBanners from 'components/categoryBanners/CategoryBanners';

const Hero = () => {
  const images = [photo_2, photo_3, photo_4, photo_5];
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

  const smallImageWigth = window.innerWidth / 4;
  const smallImageHeight = smallImageWigth / 1.78 ;

  return (
    <div className="hero">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Slider />
        </Grid>
        <Grid item container xs={6} spacing={2} className="banners-section">
          <CategoryBanners
            images={images}
            width={smallImageWigth}
            height={smallImageHeight}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
