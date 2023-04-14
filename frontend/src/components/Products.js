import React from "react";
import ProductService from "../services/product-service";
import "./Products.css";
import { useState } from "react";
import { useEffect } from "react";
import { Product } from "./Product";
function Products() {
  const [data, setData] = useState();
  useEffect(() => {
    ProductService.getAllProducts().then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div className="row">
      {data?.map((offer) => (
        <div className="col-4">
          <Product product={offer} />
        </div>
      ))}
    </div>
  );
}

export default Products;
