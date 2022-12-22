import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
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
      {dataProduct.slice(0, 1).map((item, index) => {
        return (
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={10000}>
                <img src={item.image} className="d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <NavLink to={`/detail/${item.id}`} className={"btn"}>
                    Buy Now
                  </NavLink>
                </div>
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src={item.image} className="d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <NavLink to={`/detail/${item.id}`} className={"btn"}>
                    Buy Now
                  </NavLink>
                </div>
              </div>
              <div className="carousel-item">
                <img src={item.image} className="d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <NavLink to={`/detail/${item.id}`} className={"btn"}>
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );
      })}

    <div className="product-feature">
        <h2>Product Feature</h2>
    </div>
      <div className="row">
        {dataProduct.map((item, index) => {
          return (
          
              <div className="col-4" key={index}>
                <ProductCard item={item} />
              </div>
            
          );
        })}
      </div>

      


    </div>
  );
}
