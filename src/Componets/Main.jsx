import React, { useState } from 'react';

const Main = () => {
  // State to hold cart items
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product is already in cart
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        // If product is already in the cart, increment quantity
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If product is not in the cart, add new product with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to increment item quantity in the cart
  const incrementQuantity = (productName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement item quantity in the cart
  const decrementQuantity = (productName) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Sample product data
  const products = [
    { id: 1, name: 'White Casual Sneaker', price: 70, img: '/Images/shoe1.jpeg' },
    { id: 2, name: 'Red Casual Sneaker', price: 90, img: '/Images/shoe2.jpeg' },
    { id: 3, name: 'Pinkey Paw', price: 50, img: '/Images/shoe3.jpeg' },
    { id: 4, name: 'Blue lensor', price: 60, img: '/Images/shoe4.jpeg' },
    { id: 5, name: 'Abibas Boyses', price: 60, img: '/Images/shoe5.jpeg' },
    { id: 6, name: 'GrandFather Shoe', price: 60, img: '/Images/shoe6.jpeg' },
    { id: 7, name: 'The Lefters', price: 60, img: '/Images/shoe7.jpeg' },
    { id: 8, name: 'Shadi Joda', price: 60, img: '/Images/shoe8.jpeg' },
  ];

  return (
    <div>
      <div className="container">
        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? ( <>
            <p className='para'>Your cart is empty.</p>
            <img src="/Images/error2.png" alt="EMPTY !!!" />
            </>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className="quantity">
                  <button onClick={() => decrementQuantity(item.name)}>-</button>
                  <input type="text" value={item.quantity} readOnly />
                  <button onClick={() => incrementQuantity(item.name)}>+</button>
                </div>
              </div>
            ))
          )}
          <p className='para'>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
