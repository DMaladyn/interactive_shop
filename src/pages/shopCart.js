import { useState } from "react";

import classes from "./shopCart.module.css";
import Item from "../elements/item";
import BuyWindow from "../elements/buyWindow";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart(props) {
  let items = [];

  let cart = JSON.parse(localStorage.getItem("cart"));

  let sum = 0;

  const [ids, setIds] = useState(Object.keys(cart));

  if (ids.length > 1) {
    items.push(
      <Item
        key={ids[0]}
        id={ids[0]}
        picture={props.data[ids[0]].picture}
        name={props.data[ids[0]].name}
        description={props.data[ids[0]].description}
        price={props.data[ids[0]].price}
        page={props.data[ids[0]].page}
        amount={cart[ids[0]]}
        place="cart"
        remove={remove}
        decrease={decrease}
      />
    );

    sum += props.data[ids[0]].price * cart[ids[0]];
  }

  for (let i = 1; i < ids.length - 1; i++) {
    if (ids[i] !== "filler") {
      items.push(
        <Item
          key={ids[i]}
          id={ids[i]}
          picture={props.data[ids[i]].picture}
          name={props.data[ids[i]].name}
          description={props.data[ids[i]].description}
          price={props.data[ids[i]].price}
          page={props.data[ids[i]].page}
          amount={cart[ids[i]]}
          place="cart"
          remove={remove}
          decrease={decrease}
        />
      );
      sum += props.data[ids[i]].price * cart[ids[i]];
    }
  }

  const [sumState, setSumState] = useState(sum);

  function remove(id) {
    for (let i = 0; i < ids.length; i++) {
      if (id === ids[i]) {
        let idsHolder = ids.slice(0, i).concat(ids.slice(i + 1, ids.length));
        setIds(idsHolder);
        setSumState(sumState - props.data[id].price);
      }
    }
  }

  function decrease(id) {
    setSumState(sumState - props.data[id].price);
  }

  function clear() {
    setIds(["filler"]);
  }

  return (
    <div className={classes.content}>
      {ids.length > 1 ? <div></div> : null}
      {ids.length > 1 ? <div className={classes.items}>{items}</div> : null}
      {ids.length > 1 ? <BuyWindow price={sumState} clear={clear} /> : null}
      {ids.length === 1 ? <div></div> : null}
      {ids.length === 1 ? (
        <div className={classes.empty}>
          <div>
            There are no items in your cart, you should go and change that!
          </div>
          <div>
            Go to the <Link to="/">home page</Link>and search through our
            products
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
