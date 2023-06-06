import Grid from '@mui/material/Grid';

import { useState, useEffect } from 'react';

import './hero.scss';
import photo_1 from '../../images/main-banner.webp';
import photo_2 from '../../images/photo-2.webp';
import photo_3 from '../../images/photo-3.webp';
import photo_4 from '../../images/photo-4.webp';
import photo_5 from '../../images/photo-5.webp';

const Hero = () => {
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
  const bigHeight = bigImage / 1.72;

  const smallImage = window.innerWidth / 4;
  const smallHeight = smallImage / 1.8;

  return (
    <div className="hero">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="main-section">
            <img
              src={photo_1}
              alt=""
              className="image"
              width={bigImage}
              height={bigHeight}
            />
          </div>
        </Grid>
        <Grid item container xs={6} spacing={2}>
          <Grid item xs={6}>
            <div className="secondary-section">
              <img
                src={photo_2}
                alt=""
                className="image"
                width={smallImage}
                height={smallHeight}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="secondary-section">
              <img
                src={photo_3}
                alt=""
                className="image"
                width={smallImage}
                height={smallHeight}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="secondary-section">
              <img
                src={photo_4}
                alt=""
                className="image"
                width={smallImage}
                height={smallHeight}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="secondary-section">
              <img
                src={photo_5}
                alt=""
                className="image"
                width={smallImage}
                height={smallHeight}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
