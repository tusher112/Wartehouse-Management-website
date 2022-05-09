//products js
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

import "./Products.css";
const Products = () => {
  const [products, setProducts] = useProducts();

  return (
    <div id="products" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5 mb-4"> Manage Products</h1>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      <Link to="/additem">
      <button className='btn btn-info mt-5 mb-5'> Please Add Item</button>
      </Link>
    </div>
  );
};

export default Products;