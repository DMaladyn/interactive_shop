import { useState } from "react";
import { Link } from "react-router-dom";

import { json } from "react-router-dom";
import classes from "./item.module.css";
import { Button } from "react-bootstrap";

/* It is a component that represents singular item in shop, it displays data passed to it in props,
and also has ability to move you to dedicated site of this specific item */

function Item(props) {
  const [amount, setAmount] = useState(props.amount);

  /* items in cart are stored in localstorage, and line below makes sure there will always an item there called
  "filler" so you will never run into problem that shopCart tries to reference non existing item inside 
  localstorage which would cause error */

  if (localStorage.getItem("cart") == null)
    localStorage.setItem("cart", JSON.stringify({ filler: 1 }));

  /* addToCart is supposed to check if there already is an item with specific id, if yes it adds one more to its count
    and if no it creates an key with value of 1 */

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

  /* removeFromCart is checking for value of (props.id) key, if it is more that 1 it decreases value by 1,
  and if it is 1 it deletes property from localstorage */

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
      <Link to={"/list-" + props.type + "/" + props.id}>
        <img
          className={classes.picture}
          src={props.picture}
          alt="photo not loading"
        />
      </Link>
      <Link to={"/list-" + props.type + "/" + props.id}>
        <div className={classes.name}>{props.name}</div>
      </Link>
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
