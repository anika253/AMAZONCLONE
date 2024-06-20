import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider"; // Assuming you have a StateProvider setup

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue(); // Accessing the global state

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length || 0} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift items!
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
