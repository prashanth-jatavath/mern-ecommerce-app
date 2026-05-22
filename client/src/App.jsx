import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("orders");

    alert("User Logged Out");

    window.location.href = "/login";
  };

  const logoutAdmin = () => {
    localStorage.removeItem("admin");

    alert("Admin Logged Out");

    window.location.href = "/admin";
  };

  return (
    <BrowserRouter>
      <nav
        style={{
          background: "black",
          padding: "15px",
          display: "flex",
          gap: "20px",
        }}
      >
        {!user && !admin && (
          <>
            <Link to="/login" style={{ color: "white" }}>
              User Login
            </Link>

            <Link to="/admin" style={{ color: "white" }}>
              Admin Login
            </Link>

            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </>
        )}

        {user && (
          <>
            <Link to="/home" style={{ color: "white" }}>
              Home
            </Link>

            <Link to="/cart" style={{ color: "white" }}>
              Cart
            </Link>

            <Link to="/orders" style={{ color: "white" }}>
              Orders
            </Link>

            <button
              onClick={logoutUser}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}

        {admin && (
          <>
            <Link to="/admin-dashboard" style={{ color: "white" }}>
              Admin Dashboard
            </Link>

            <button
              onClick={logoutAdmin}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/orders" element={<Orders />} />

        <Route
          path="/admin-dashboard"
          element={<Admin />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;