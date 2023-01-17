import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function ProductInfo() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProducts(response.data);
    });
  }, [id]);

  
  return (
    <>
      <Helmet>
        <title>{products.title}</title>
      </Helmet>
      <div>
        <div className="box">
          <h1>{products.id}</h1>
          <p>{products.category}</p>
          <img alt="foto" src={products.image}></img>
          <Link to={`/`}>
            <button>Back</button>
          </Link>
         
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
