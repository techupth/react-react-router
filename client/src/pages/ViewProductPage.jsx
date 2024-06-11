import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewProductPage() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const param = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${param.productId}`
    );
    setName(result.data.data.name);
    setImg(result.data.data.image);
    setPrice(result.data.data.price);
    setDescription(result.data.data.description);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <div className="product-preview">
          <img src={img} alt="some product" width="350" height="350" />
        </div>
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <p>{description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
