import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [reload]);

  const handleDelivered = () => {
    const qr = parseInt(product.quantity);
    const quantity = qr - 1;
    const newQuantity = { quantity };
    console.log(newQuantity);

    const url = `http://localhost:5000/product/${productId}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(quantity);
        console.log("success", data);
      });
  };

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const qu = parseInt(product.quantity);
    const quantity1 = event.target.quantity.value;
    const quantity = qu + parseInt(quantity1);
    const quantity2 = { quantity };
    const url = `http://localhost:5000/product/${productId}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(quantity2),
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(quantity);
        alert("Quantity update Successfully!");
        event.target.reset();
      });
  };
  return (
    <div className="details">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {" "}
            <small>{product.price}</small>{" "}
          </Card.Text>
          <Card.Text>
            Supplier: <small>{product.supplierName}</small>{" "}
          </Card.Text>
          <Card.Text>
            Quantity: <small>{product.quantity}</small>{" "}
          </Card.Text>
          <Card.Text>
            {" "}
            <small>{product.description}</small>{" "}
          </Card.Text>
          <Button onClick={handleDelivered} variant="primary">
            Delivered
          </Button>
        </Card.Body>
      </Card>

      <form onSubmit={handleUpdateQuantity} className="ms-5">
        <input type="number" name="quantity" placeholder="Quantity" required />
        <input type="submit" value="Update Quantity" />
      </form>
    </div>
  );
};

export default ProductDetails;