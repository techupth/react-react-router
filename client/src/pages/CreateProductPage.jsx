import CreateProductForm from "../components/CreateProductForm";
import { Link, useNavigate } from "react-router-dom";

function CreateProductPage() {
  const backToHome = useNavigate();

  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <button onClick={() => backToHome("/")}>Back to Home</button>
    </div>
  );
}

export default CreateProductPage;
