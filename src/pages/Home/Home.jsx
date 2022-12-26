import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Carousel from "../../Components/Slider/Carousel";

import { getAllProductApi } from "../../redux/reducers/ShopReducer";

export default function Home(props) {
  let { dataProduct } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getAllProductApi();

    dispatch(action);
  }, []);

  return (
    <div className="container">
      <Carousel/>

    <div className="product-feature">
        <h2>Product Feature</h2>
    </div>
      {/* <div className="row">
        {dataProduct.slice(0,6).map((item, index) => {
          return (
          
              <div className="col-4" key={index}>
                <ProductCard item={item} />
              </div>
            
          );
        })}
      </div> */}

      


    </div>
  );
}
