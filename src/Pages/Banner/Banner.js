import React from "react";
import '../Banner/Banner.css';

const Banner = () => {
  return (
    <div className="carousel w-full h-auto">
      <div id="slide1" className="carousel-item relative w-full h">
        <img
          src="https://img.freepik.com/free-vector/public-city-transport-isometric-flowchart-with-images-different-municipal-private-vehicles-with-text-captions_1284-27299.jpg?w=2000"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h">
        <img src="https://wallpapershome.com/images/wallpapers/ferrari-430-scuderia-3840x2160-2018-cars-autumn-road-5k-16855.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h">
        <img src="https://industrytoday.com/wp-content/uploads/2020/12/moving-transporting-heavy-items.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h">
        <img src="https://webuyanybike.com/blog/wp-content/uploads/road-g97fb2e486_1920-1200x606.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
