import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { imagePrefix } from "../data/dummyData";
import { clearCart, removeItem } from "../store/slices/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems, "cartitems");
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(removeItem(id));
  };
  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.map((res) => {
        const { name, price, description, imageId } = res;
        // console.log(res , "cartRes");
        return (
          <div
            className="w-[768px] mx-auto px-2 mt-2 text-md font-semibold "
            key={res.id}
          >
            <div className="flex items-center justify-between my-4">
              <div className="w-9/12">
                <div className="flex">
                  <h4>{name}</h4>
                  <h3 className="ml-2">- Rs {Math.ceil(price / 100)}</h3>
                </div>
                <h4 className="text-sm font-normal text-black mt-2">
                  {description}
                </h4>
              </div>
              <div className="relative">
                <img
                  src={imagePrefix + imageId}
                  alt="food image"
                  className="w-[120px] h-[80px]"
                />
                <button onClick={() => removeCart(res.id)}>
                  Remove From Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <button onClick={emptyCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
