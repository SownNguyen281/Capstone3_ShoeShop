import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addToCartAction,
  getAllProductApi,
} from "../../redux/reducers/ShopReducer";

export default function ProductCard(props) {
  const { item } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getAllProductApi();
    dispatch(action);
  });

  return (
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
            // const itemCart = {...item,quantity:1}
            const action = addToCartAction(item);
            dispatch(action);
          }}
        >
          Buy Now
        </NavLink>
        <div className="product-price text-center">{item.price}</div>
      </div>
    </div>
  );
}
