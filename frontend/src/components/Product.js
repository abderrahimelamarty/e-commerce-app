import react from "react";
import { Link } from "react-router-dom";
import "./Product.css";
export const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="product-img"
        src={product.image}
        alt="Card image"
        style={{ width: "80%" }}
      />
      <div className="card-body">
        <h4 className="product-name"> {product.name} </h4>
        <p className="card-text"> {product.categorie} </p>
        <p className="product-price"> {product.price}DH</p>
        <Link to="#" class="text-center btn btn-primary">
          ADD TO CART
        </Link>
      </div>
    </div>
  );
};
