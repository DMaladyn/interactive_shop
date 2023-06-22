import { useState } from "react";

import classes from "./upperBar.module.css";
import DropDown from "../elements/dropDown";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

function UpperBar(props) {
  const [categories, setCategories] = useState(false);

  let links = [
    <Link to="list-jeans">Jeans</Link>,
    <Link to="list-tshirt">T-shirts</Link>,
    <Link to="list-shoes">Shoes</Link>,
    <Link to="list-shoes">Shoes</Link>,
  ];

  return (
    <div className={classes.header}>
      <div>
        <Link to="/">ShopName</Link>
        <Link
          to="/list"
          onMouseEnter={() => setCategories(true)}
          onMouseLeave={() => setCategories(false)}
        >
          ItemsList
          <div className={classes.dropdown}>
            {categories ? <DropDown links={links} /> : null}
          </div>
        </Link>
      </div>

      <div className={classes.shopCart}>
        <Link to="/cart">ShopCart</Link>
      </div>
    </div>
  );
}

export default UpperBar;
