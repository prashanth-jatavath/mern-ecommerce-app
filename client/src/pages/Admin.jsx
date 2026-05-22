import { useState } from "react";

function Admin() {
  const admin = localStorage.getItem("admin");

  const [products, setProducts] = useState([
    {
      name: "iPhone 15",
      price: 80000,
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdminLogin = () => {
    localStorage.setItem("admin", "true");

    alert("Admin Login Successful");

    window.location.href = "/admin";
  };

  const addProduct = () => {
    const newProduct = {
      name,
      price,
    };

    setProducts([...products, newProduct]);

    alert("Product Added");

    setName("");
    setPrice("");
  };

  const deleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);

    setProducts(updated);
  };

  if (!admin) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Admin Login</h1>

        <input placeholder="Admin Email" />

        <br />
        <br />

        <input type="password" placeholder="Password" />

        <br />
        <br />

        <button onClick={handleAdminLogin}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Add Product</h2>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addProduct}>
        Add Product
      </button>

      <h2 style={{ marginTop: "40px" }}>
        Product List
      </h2>

      {products.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button onClick={() => deleteProduct(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;