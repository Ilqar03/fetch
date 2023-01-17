import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);


  return (
    <div>
      <Helmet>
        <title>Product</title>
      </Helmet>

      <NavLink to="/login">Log In</NavLink>
      {products.map((data) => (
        <div className="box">
          <h1>{data.id}</h1>
          <p>{data.category}</p>
          <img alt="foto" src={data.image}></img>
          <Link to={`/productinfo/${data.id}`}>
            <button>Product Info</button>
          </Link>
        
        </div>
      ))}
    </div>
  );
}

export default Product;
