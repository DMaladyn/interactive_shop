import { Link } from "react-router-dom";

import classes from "./buyWindow.module.css";
import { Button } from "react-bootstrap";

function BuyWindow(props) {
  function clear() {
    localStorage.setItem("cart", JSON.stringify({ filler: 1 }));
    props.clear();
  }

  return (
    <div className={classes.window}>
      <div className={classes.price}>
        Total <span>{props.price}$</span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.clear} onClick={() => clear()}>
          Clear
        </button>

        <Link className={classes.buy} to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default BuyWindow;
