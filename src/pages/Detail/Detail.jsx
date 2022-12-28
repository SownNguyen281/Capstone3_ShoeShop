import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import {
  addToCartAction,
  getByIdAllProductApi,
} from "../../redux/reducers/ShopReducer";

export default function Detail(props) {
  const { productDetail } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const action = getByIdAllProductApi(id);
    dispatch(action);
  }, [id]);

  return (
    <div className="container detail">
      <div className="row detail-row">
        <div className="col-4 mt-2 detail-col-4">
          <img src={productDetail.image} alt="..." />
        </div>
        <div className="col-4 mt-2 detail-col-4 detail-content">
          <h2>{productDetail.name}</h2>
          <p>{productDetail.description}</p>
          <div className="col-8 size">
            <h3>Available Size</h3>
            <div className="size-button">
              <button type="submit" class="btn btn-primary">
                38
              </button>
              <button type="submit" class="btn btn-primary">
                39
              </button>
              <button type="submit" class="btn btn-primary">
                40
              </button>
              <button type="submit" class="btn btn-primary">
                41
              </button>
              <button type="submit" class="btn btn-primary">
                42
              </button>
            </div>
            <p className="price">{productDetail.price}$</p>

            <div className="quantity-change">
              <button type="submit" class="btn btn-primary">
                +
              </button>
              <p>1</p>
              <button type="submit" class="btn btn-success">
                -
              </button>
            </div>

            <NavLink className="btn btn-warning" to={`/cart`}>
              Add to cart
            </NavLink>
          </div>
        </div>
      </div>

      <div className="product-feature">
        <h2>Product Feature</h2>
      </div>
      <div className="row">
        {productDetail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <div className="icon">
                  <i className="fa fa-heart"></i>
                </div>
                <img src={item.image} alt="product" />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p>{item.shortDescription}</p>
                </div>
                <div className="card-footer">
                  <NavLink
                    to={`/detail/${item.id}`}
                    className={"btn"}
                    onClick={() => {
                      const action = addToCartAction(item);
                      dispatch(action);
                    }}
                  >
                    Buy Now
                  </NavLink>
                  <div className="product-price text-center">{item.price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
