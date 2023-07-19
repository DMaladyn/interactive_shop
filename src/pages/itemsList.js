import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./itemsList.module.css";
import Item from "../elements/item";
import SearchBar from "../elements/searchBar";

function List(props) {
  /* types: tshirt, shoes, jeans */

  let items = [];

  const params = useParams();

  console.log(params.category);

  const [categories, setCategories] = useState([params.category]);

  console.log(categories);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);

  useEffect(() => setCategories([params.category]), [params.category]);

  /* creates array of <Item /> components from items in shop based on selected categories and price range */
  if (categories[0] != undefined) {
    for (
      let i = 0;
      i < Object.keys(props.data).length && items.length < 10;
      i++
    ) {
      if (
        categories.includes(props.data[i].type) &&
        minPrice <= props.data[i].price &&
        props.data[i].price <= maxPrice
      ) {
        items.push(
          <Item
            id={i}
            key={i}
            picture={props.data[i].picture}
            name={props.data[i].name}
            description={props.data[i].description}
            price={props.data[i].price}
            type={props.data[i].type}
            /* page={props.data[i].page} */
            place="list"
          />
        );
      }
    }
  } else {
    for (
      let i = 0;
      i < Object.keys(props.data).length && items.length < 10;
      i++
    )
      if (minPrice <= props.data[i].price && props.data[i].price <= maxPrice) {
        items.push(
          <Item
            id={i}
            key={i}
            picture={props.data[i].picture}
            name={props.data[i].name}
            description={props.data[i].description}
            price={props.data[i].price}
            type={props.data[i].type}
            /* page={props.data[i].page} */
            place="list"
          />
        );
      }
  }

  /* adjusts values of maxPrice, minPrice and categories 
  is called from <SearchBar /> */
  function search(categories, searchMinPrice, searchMaxPrice) {
    setCategories(categories);

    setMinPrice(searchMinPrice);

    if (searchMaxPrice == 0) {
      setMaxPrice(999);
    } else {
      setMaxPrice(searchMaxPrice);
    }
  }

  return (
    <div className={classes.content}>
      <SearchBar search={search} />
      {items.length == 0 ? (
        <div className={classes.empty1}>
          There are no items meeting your requirments
          <div className={classes.empty2}>Consider changing them</div>
        </div>
      ) : null}
      <div className={classes.items}>{items}</div>
    </div>
  );
}

export default List;
