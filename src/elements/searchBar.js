import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./searchBar.module.css";

function SearchBar(props) {
  const [correctPrice, setCorrectPrice] = useState(true);

  function search(event) {
    event.preventDefault();
    let categories = ["shoes", "tshirt", "jeans"];
    let categoriesChecked = [];

    /* fill array with all checked checkboxes */
    for (let i = 0; i < categories.length; i++) {
      if (event.target[categories[i]].checked)
        categoriesChecked.push(categories[i]);
    }

    /* creates variables that hold minimal price and maximal price */
    let minPrice = Number(event.target.minPrice.value);
    let maxPrice = Number(event.target.maxPrice.value);

    /* console.log(minPrice);
    console.log(event.target.maxPrice.value); */

    /* adjusts values to make make user experience better: 
    checks if max price isnt bigger than minprice and if maxprice equals 0 or undefined it passes 0 as it is converted to 9999 in props.search because max cant ever be 0 as there are no free items
    after picking matching option function props.search is called inside itemlist where it searches for matching items */
    if (minPrice <= maxPrice) {
      setCorrectPrice(true);
      props.search(categoriesChecked, minPrice, maxPrice);

      console.log("normal");
    } else if (minPrice != 0 && maxPrice == 0) {
      setCorrectPrice(true);
      props.search(categoriesChecked, minPrice, 0);

      console.log("max undefined");
    } else if (maxPrice != 0 && minPrice == 0) {
      setCorrectPrice(true);
      props.search(categoriesChecked, 0, maxPrice);

      console.log("min undefined");
    } else {
      setCorrectPrice(false);

      console.log("error");
    }
  }

  return (
    <form className={classes.content} onSubmit={search}>
      <fieldset>
        <span className={classes.header}>Categories</span>
        <ul className={classes.categories}>
          <li>
            <input type="checkbox" name="tshirt" />
            T-shirts
          </li>
          <li>
            <input type="checkbox" name="jeans" />
            Jeans
          </li>
          <li>
            <input type="checkbox" name="shoes" />
            Shoes
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <div className={classes.header}>Price range</div>
        <input
          type="number"
          className={classes.price}
          pattern="[0-9]"
          min="0"
          max="999"
          step=".01"
          placeholder="0.00"
          name="minPrice"
        />
        <span className={classes.dollar}>$</span> -&nbsp;
        <input
          type="number"
          className={classes.price}
          pattern="[0-9]"
          min="1"
          max="998"
          step=".01"
          placeholder="0.00"
          name="maxPrice"
        />
        <span className={classes.dollar}>$</span>
        {!correctPrice ? (
          <div className={classes.invalid}>Inserted range is invalid</div>
        ) : null}
      </fieldset>
      <fieldset>
        <input type="submit" className={classes.search} value="Search" />
      </fieldset>
    </form>
  );
}

export default SearchBar;
