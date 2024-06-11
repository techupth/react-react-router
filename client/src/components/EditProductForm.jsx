import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const param = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${param.productId}`
    );
    setName(result.data.data.name);
    setImage(result.data.data.image);
    setPrice(result.data.data.price);
    setDescription(result.data.data.description);
  };

  const updateProduct = async (event) => {
    event.preventDefault();
    const newProduct = {
      name: name,
      image: image,
      price: price,
      description: description,
    };
    await axios.put(
      `http://localhost:4001/products/${param.productId}`,
      newProduct
    );
    navigate("/");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <form className="product-form">
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => {
              e.target.value;
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={updateProduct}>
          Update
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
