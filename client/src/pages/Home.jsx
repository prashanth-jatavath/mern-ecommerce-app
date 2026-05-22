function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 80000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      name: "Headphones",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 3,
      name: "Nike Shoes",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to ShopEasy</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <h2>{item.name}</h2>

            <p>₹{item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;