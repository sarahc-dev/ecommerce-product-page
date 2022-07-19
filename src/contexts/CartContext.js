import { createContext, useReducer, useState } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartBtnRef, setCartBtnRef] = useState();
  let [total, setTotal] = useState(0);
  const [items, dispatch] = useReducer(cartReducer, []);

  function openCart(cartBtn) {
    if (cartBtn) setCartBtnRef(cartBtn);
    setCartOpen(!cartOpen);
  }

  function addToCart(product, amount) {
    const index = items.findIndex((item) => item.productName === product);
    setTotal(total + amount);

    if (index === -1) {
      dispatch({
        type: "ADD_NEW_ITEM",
        item: { product, amount },
      });
    } else {
      items[index].amount += amount;
    }
  }

  function deleteFromCart(product) {
    const index = items.findIndex((item) => item.productName === product);
    setTotal(total - items[index].amount);

    dispatch({
      type: "DELETE_FROM_CART",
      item: { product },
    });
  }

  return <CartContext.Provider value={{ cartOpen, setCartOpen, openCart, cartBtnRef, items, total, addToCart, deleteFromCart }}>{children}</CartContext.Provider>;
}

export default CartContext;
