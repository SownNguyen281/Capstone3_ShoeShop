import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  addToCartAction,
  changeItemAction,
  delItemAction,
} from "../../redux/reducers/ShopReducer";

export default function Cart(props) {
  const dispatch = useDispatch();
  const { carts, productDetail } = useSelector((state) => state.shopReducer);
  
  return (
    <div className="container carts">
      <h2>Carts</h2>
      <table class="table table-borderless mt-5">
        <thead>
          <tr className="table-secondary">
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="CheckDefault"
              />
            </th>
            <th scope="col">id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="CheckDefault"
                  />
                </th>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} width={70} alt="" />
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger plus"
                    onClick={() => {
                      const itemQuantity = {
                        id: item.id,
                        quantity: 1,
                      };
                      const action = changeItemAction(itemQuantity);
                      dispatch(action);
                    }}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-outline-danger plus"
                    onClick={() => {
                      const itemQuantity = {
                        id: item.id,
                        quantity: -1,
                      };
                      const action = changeItemAction(itemQuantity);
                      dispatch(action);
                    }}
                  >
                    -
                  </button>
                </td>

                <td>{item.quantity * item.price}</td>
                <td>
                  <button className="btn mt-2 btn-success edit" type="submit">
                    EDIT
                  </button>
                  <button
                    className="btn mt-2 btn-primary delete"
                    type="submit"
                    onClick={() => {
                      const action = delItemAction(item.id);
                      dispatch(action);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-order">
        <button className="btn mt-2" type="submit">
          SUBMIT ORDER
        </button>
      </div>

      <div className="product-feature">
        <h2>Related Products</h2>
      </div>
      <div className="row">
        {productDetail.relatedProducts?.map((item, index) => {
          return <div className="col-4" key={index}>
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
                to={`/cart`}
                className={"btn"}
                onClick={() => {
                  const itemCart = {...item,quantity:1};
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
            
          
        })}
      </div>
    </div>
  );
}
