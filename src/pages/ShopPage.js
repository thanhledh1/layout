import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import Product from "../models/Product";

function ShopPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Product.all()
      .then(function (res) {
        // Log data trả về để kiểm tra dữ liệu
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch(function (error) {
        alert("500 error");
      });
  }, []);
  return (
    <MasterLayout>
      <h1>ShopPage</h1>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}

            {products.length
              ? products.map((product, key) => (
                  <div className="col-12 col-md-4 col-lg-3 mb-5">
                    <a className="product-item" href={`product/${product.id}`}>

                      <img
                        src="product.image"
                        className="img-fluid product-thumbnail"
                      />
                     
                      <h3 className="product-title">{product.name}</h3>
                      <strong className="product-price">{product.price}</strong>
                      <span className="icon-cross">
                        <img src="images/cross.svg" className="img-fluid" />
                      </span>
                    </a>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}

export default ShopPage;
