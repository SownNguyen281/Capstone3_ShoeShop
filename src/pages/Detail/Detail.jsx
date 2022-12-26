import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getByIdAllProductApi} from "../../redux/reducers/ShopReducer";

export default function Detail(props) {
  const { dataProduct, productDetail } = useSelector((state) => state.shopReducer);
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
            {dataProduct.slice(0,1).map((item, index) => {
              return (
                <div className="quantity-change">
                  <button
                    type="submit"
                    class="btn btn-primary"                    
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    type="submit"
                    class="btn btn-success"                    
                  >
                    -
                  </button>
                </div>
              );
            })}
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
        {productDetail.relatedProducts.map((item, index) => {
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
