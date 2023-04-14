import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import ProductService from "../services/product-service";

const BoardAdmin = () => {
  const [content, setContent] = useState("");
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

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          console.log("logout");
        }
      }
    );
  }, []);

  return (
    <div class="container">
      <h2>Basic Table</h2>
      <p>
        The .table class adds basic styling (light padding and horizontal
        dividers) to a table:
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>

            <th>Categorie</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((offer) => (
            <tr>
              <td>{offer.id}</td>
              <td>
                {" "}
                <img
                  src={offer.image}
                  alt="Card image"
                  style={{
                    width: "10%",
                    height: "10%",
                  }}
                />
              </td>
              <td>{offer.name}</td>
              <td>{offer.price}</td>

              <td>{offer.categorie}</td>
              <td>
                {" "}
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>
                {" "}
                <button className="btn btn-primary">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardAdmin;
