import Grid from '@mui/material/Grid';
import './categoryBanners.scss';

const CategoryBanners = ({ images, width, height }) => {
  return (
    <>
      {images.map(image => (
        <Grid item md={6} xs={6}>
          <div className="banners">
            <img
              src={image}
              alt=""
              className="image"
              width={width}
              height={height}
            />
            <div className="banner-content">
              <p className="text">BEST SALE</p>
              <h2 className="title">Laptop Max</h2>
              <div className="price">
                From $1699 or <br />
                $64.62/mo.
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default CategoryBanners;
