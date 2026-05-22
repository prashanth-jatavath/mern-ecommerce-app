function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Order Tracking</h1>

      {orders.length === 0 ? (
        <h3>No Orders Yet</h3>
      ) : (
        orders.map((item, index) => (
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

            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px",
              }}
            >
              Delivered
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;