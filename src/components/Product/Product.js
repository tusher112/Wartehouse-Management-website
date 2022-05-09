import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./Product.css";
const Product = ({ product }) => {
  const { _id, name, quantity, img, description, supplierName, price } = product;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };
  const [products, setProducts] = useProducts();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="product">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Supplier: {supplierName}</p>
      <p>Quantity: {quantity}</p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={() => navigateToProductDetail(_id)} className="btn btn-primary mx-2">
        Manage Item
      </button>
      <button onClick={() => handleDelete(product._id)} className="btn btn-danger">
        Delete Item
      </button>
    </div>
  );
};

export default Product;