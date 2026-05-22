import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.location.reload();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>{item.name}</h2>

            <p>₹{item.price}</p>

            <button onClick={() => removeItem(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button onClick={() => navigate("/checkout")}>
          Proceed To Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;