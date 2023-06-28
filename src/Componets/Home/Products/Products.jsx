import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Redux/slices/productsSlice";
import { STATUSES } from "../../../Redux/slices/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {status === STATUSES.LOADING ? (
        <h2>Loading....</h2>
      ) : (
        <div className="products_container">
          {products.map((product) => {
            return (
              <Product key={product.id} product={product} status={status} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
