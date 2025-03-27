import React, { useState, useEffect } from "react";
import products from "../data/ProductData.json";
import ProductCard from "./ProductCard";
import "../styles/ResultPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const [productData, setProductData] = useState(products.data);
  const [sortOrder, setSortOrder] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    let filteredProducts = [...products.data]; 

    if (searchQuery) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery) ||
          product.description.some((desc) => desc.info.toLowerCase().includes(searchQuery))
      );
    }

    if (sortOrder === "minToMax") {
      filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (sortOrder === "maxToMin") {
      filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
    }

    setProductData(filteredProducts);
  }, [location.search, sortOrder]);

  function handleRemoveFilter(){
    setProductData(products.data);
    setSortOrder("");
    navigate('/result');
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-white p-3">
            <h3>Filters</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sort"
                value="minToMax"
                id="minToMax"
                checked={sortOrder === "minToMax"}
                onChange={() => setSortOrder("minToMax")}
              />
              <label className="form-check-label" htmlFor="minToMax">
                Price: Low to High
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sort"
                value="maxToMin"
                id="maxToMin"
                checked={sortOrder === "maxToMin"}
                onChange={() => setSortOrder("maxToMin")}
              />
              <label className="form-check-label" htmlFor="maxToMin">
                Price: High to Low
              </label>
            </div>

            <button className="btn btn-primary mt-2" onClick={() => handleRemoveFilter()}>
              Remove Filter
            </button>
          </div>

          <div className="col-10">
            <h3 className="mt-2">Results</h3>
            <div className="container">
              <div className="row">
                {productData.map((product, index) => (
                  <div className="col-4" key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
