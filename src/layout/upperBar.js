import classes from "./upperBar.module.css";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

function UpperBar(props) {
  return (
    <div className={classes.header}>
      <div>
        <Link to="/">ShopName</Link>
        <Link to="/list">ItemsList</Link>
      </div>
      <div className={classes.shopCart}>
        <Link to="/cart">ShopCart</Link>
      </div>
    </div>
  );
}

export default UpperBar;
