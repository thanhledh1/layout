import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { Link, useParams } from "react-router-dom";
import Product from "../models/Product";

function ProductPage(props) {
  const {id} = useParams()
  const [products,setProducts] = useState()
  useEffect(() => {
    Product.find(id)
      .then(function (res) {
        // Log data trả về để kiểm tra dữ liệu
        console.log(res);
        setProducts(res.data);
      })
      .catch(function (error) {
        alert("500 error");
      });
  }, [id]);
  console.log(useParams());
  return (
    <MasterLayout>
      <h1>ProductPage</h1>
      <section className="ftco-section">
  <div className="container">
    <div className="row">
    

      <div className="col-lg-6 mb-5 ftco-animate">
        <a href="" className="image-popup prod-img-bg">
          <img
            src="images/product-1.png"
            className="img-fluid"
            alt="Colorlib Template"
          />
        </a>
      </div>
      <div className="col-lg-6 product-details pl-md-5 ftco-animate">
        <h3>{products && products.name}</h3>
        <div className="rating d-flex">
        </div>
        <p className="price">
        <span>{products && products.price}</span>
        </p>
       
    




        <p>
        <Link to="/cart" className="btn btn-black py-3 px-5 mr-2">Add to Cart</Link>
        <Link to="/cart" className="btn btn-primary py-3 px-5">Buy now</Link>

        </p>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-12 nav-link-wrap">
        <div
          className="nav nav-pills d-flex text-center"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
       
     
      
        </div>
      </div>
    
    </div>
  </div>
</section>

    </MasterLayout>
  );
}

export default ProductPage;



