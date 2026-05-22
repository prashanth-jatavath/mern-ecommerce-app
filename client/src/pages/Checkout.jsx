function Checkout() {
  const placeOrder = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem("orders", JSON.stringify(cart));

    localStorage.removeItem("cart");

    alert("Order Placed Successfully");

    window.location.href = "/orders";
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Checkout</h1>

      <input placeholder="Full Name" />

      <br />
      <br />

      <input placeholder="Address" />

      <br />
      <br />

      <input placeholder="Phone Number" />

      <br />
      <br />

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;