import { useState } from "react";

import { json } from "react-router-dom";
import classes from "./item.module.css";
import { Button } from "react-bootstrap";

function Item(props) {
  const [amount, setAmount] = useState(props.amount);

  if (localStorage.getItem("cart") == null)
    localStorage.setItem("cart", JSON.stringify({ filler: 1 }));

  function addToCart() {
    let shopCart = JSON.parse(localStorage.getItem("cart"));

    if (shopCart[props.id] == null) {
      shopCart[props.id] = 1;
    } else {
      shopCart[props.id] += 1;
    }

    localStorage.setItem("cart", JSON.stringify(shopCart));

    setAmount(shopCart[props.id]);
  }

  function removeFromCart() {
    let shopCart = JSON.parse(localStorage.getItem("cart"));

    if (shopCart[props.id] > 1) {
      shopCart[props.id] -= 1;

      props.decrease(props.id);
    } else {
      props.remove(props.id);
      delete shopCart[props.id];
    }

    localStorage.setItem("cart", JSON.stringify(shopCart));
    setAmount(shopCart[props.id]);
  }

  return (
    <div className={classes.item}>
      <img
        className={classes.picture}
        src={props.picture}
        alt="photo not loading"
      />
      <div className={classes.name}>{props.name}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{props.price}$</div>
      {props.place == "list" ? (
        <Button onClick={addToCart}>Add to cart</Button>
      ) : null}
      {props.place == "cart" ? (
        <Button onClick={removeFromCart}>Remove from cart</Button>
      ) : null}
      {props.place == "cart" ? (
        <p className={classes.amount}>X{amount}</p>
      ) : null}
    </div>
  );
}

export default Item;
