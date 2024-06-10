import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [create, setCreate] = useState([]);

  const navigate = useNavigate();

  const handleNameInpuut = (event) => {
    setNameInput(event.target.value);
  };

  const handleImageInpuut = (event) => {
    setImageInput(event.target.value);
  };

  const Create = async (event) => {
    event.preventDefault();
    if (nameInput && imageInput && priceInput && descriptionInput) {
      const newProduct = {
        name: nameInput,
        price: priceInput,
        image: imageInput,
        description: descriptionInput,
      };
      const newCreate = [...create];
      newCreate.push(newProduct);
      setCreate(newCreate);

      try {
        await axios.post(`http://localhost:4001/products`, newProduct);
        navigate("/");
      } catch (error) {
        // Write something
      }

      setNameInput("");
      setImageInput("");
      setPriceInput("");
      setDescriptionInput("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    create();
  };

  // console.log(create);

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={nameInput}
            onChange={handleNameInpuut}
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
            value={imageInput}
            onChange={handleImageInpuut}
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
            value={priceInput}
            onChange={(event) => {
              setPriceInput(event.target.value);
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
            value={descriptionInput}
            onChange={(event) => {
              setDescriptionInput(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={Create}>
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateProductForm;
