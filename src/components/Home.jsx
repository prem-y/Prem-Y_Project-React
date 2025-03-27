import React, {useEffect} from 'react'
import Banner from './Banner'
import "../styles/Home.css"
import categories from "../data/ProductCategory.json"
import Slider from "react-slick";
import sliderData from "../data/ProductDisplaySlider.json"
import { NextArrow, PrevArrow } from './CustomArrow';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const navigate = useNavigate();
  return (
    <>
      <Banner/>
      
      {/* Categories */}
      <div className="container overlapping-container py-4">
        <div className="row g-3">
          {categories.row1.map((category) => 
            <div className="col-sm-4 col-md-3 p-3" key={category.id} >
            <div className="containerInside" onClick={() => navigate('/result')}>
              <h5 className="">{category.title}</h5>
              <div className="row g-2">
                {category.subCategories.map((subCategory, index) => 
                  <div className="col-6" key={index}>
                    <img src={subCategory.imgAddress} className="img-fluid" />
                  <p>{subCategory.title}</p>
                </div>
                )}
              </div>
              <p className='text-primary mt-5'>See more</p>
           </div>
          </div>
          )}
        </div>
        <div className="row g-3">
          {categories.row2.map((category) => 
            <div className="col-sm-4 col-md-3 p-3" key={category.id}>
            <div className="containerInside" onClick={() => navigate('/result')}>
              <h5 className="">{category.title}</h5>
              <div className="row g-2">
                {category.subCategories.map((subCategory) => 
                  <div className="col-6" key={subCategory.id}>
                    <img src={subCategory.imgAddress} className="img-fluid" />
                  <p>{subCategory.title}</p>
                </div>
                )}
              </div>
              <p className='text-primary mt-5'>See more</p>
           </div>
          </div>
          )}
        </div>
      </div>

      {/* Product slider */}
      <div className="slider-container">
        <h4>Top bestsellers from Small businesses</h4>
      <Slider {...settings}>
        {sliderData.data.map((data) => 
          <div key={data.id} onClick={() => navigate('/result')}>
            <img src={data.imgAddress} alt="" className='img-fluid'/>
          </div>
        )}
    </Slider>
      </div>
    </>
  )
}



export default Home
