import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart
 const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingProduct = prevItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      toast.success(`Increased ${product.name} quantity`);

      return prevItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    toast.success(`${product.name} added to cart`);

    return [...prevItems, { ...product, quantity: 1 }];
  });
};

  // Increase quantity
 const increaseQuantity = (id) => {
  setCartItems((prevItems) =>
    prevItems.map((item) => {
      if (item.id === id) {
        toast.success(`Added one more ${item.name}`);

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    })
  );
};

  // Decrease quantity
  const decreaseQuantity = (id) => {
  setCartItems((prevItems) =>
    prevItems
      .map((item) => {
        if (item.id === id) {
          toast.info(`Reduced ${item.name} quantity`);

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0)
  );
};

  // Remove one product completely
  const removeFromCart = (id) => {
  const product = cartItems.find((item) => item.id === id);

  if (product) {
    toast.error(`${product.name} removed from cart`);
  }

  setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== id)
  );
};

  // Clear the cart
 const clearCart = () => {
  setCartItems([]);
  toast.warning("Cart cleared");
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}