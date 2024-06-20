import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://st3.depositphotos.com/1009226/17387/i/380/depositphotos_173873650-stock-photo-caldwell-idaho-november-2017-successful.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2> Your Shopping basket is Empty. </h2>
            <p>
              You have no items in your basket. To buy one or more items click
              on the "Add to the Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title"> Your Shopping Basket </h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1> SUBTOTAL</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
