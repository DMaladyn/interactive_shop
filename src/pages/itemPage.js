import { useParams } from "react-router-dom";
import { useState } from "react";

import classes from "./itemPage.module.css";

function ItemPage(props) {
  /* page designed to receive data (propably later will only take item id from url and call for it itself) */
  const params = useParams();

  const id = params.itemId;

  const data = props.data[id];

  /* creates array with all pictures of an item */
  let allPictures = [];
  for (let i = 0; i < data.picture.length; i++) {
    allPictures.push(
      <img
        onClick={() => setCurrentMain(data.picture[i])}
        className={classes.secondaryPicture}
        src={data.picture[i]}
      />
    );
  }

  /* useState's that are designed to 
  - track which item is supposed to be displayed as big one
  - track which item will be first one of 4 displayed below main one,
  it will be used in bottomPictures that will create array of 4 pictures below
   */
  const [currentMain, setCurrentMain] = useState(data.picture[0]);

  const [firstPicture, setFirstPicture] = useState(0);

  let bottomPictures = allPictures.slice(firstPicture, firstPicture + 4);

  const [amount, setAmount] = useState(props.amount);

  if (localStorage.getItem("cart") == null)
    localStorage.setItem("cart", JSON.stringify({ filler: 1 }));

  /* addToCart is supposed to check if there already is an item with specific id, if yes it adds one more to its count
    and if no it creates an key with value of 1 */
  function addToCart() {
    let shopCart = JSON.parse(localStorage.getItem("cart"));

    if (shopCart[id] == null) {
      shopCart[id] = 1;
    } else {
      shopCart[id] += 1;
    }

    localStorage.setItem("cart", JSON.stringify(shopCart));

    setAmount(shopCart[id]);
  }

  return (
    <div className={classes.content}>
      <div className={classes.mainSection}>
        <div className={classes.picturesSection}>
          <img className={classes.mainPicture} src={currentMain} />

          <div className={classes.secondaryPictures}>
            {data.picture.length >= 5 && firstPicture > 0 ? (
              <button
                className={classes.scrollLeft}
                onClick={() => setFirstPicture(firstPicture - 1)}
              >
                {"<"}
              </button>
            ) : null}
            {bottomPictures}
            {data.picture.length >= 5 &&
            firstPicture + 4 < data.picture.length ? (
              <button
                className={classes.scrollRight}
                onClick={() => setFirstPicture(firstPicture + 1)}
              >
                {">"}
              </button>
            ) : null}
          </div>
        </div>

        <div className={classes.descriptionSection}>
          <h1>{data.name}</h1>
          <div className={classes.price}>{data.price}$</div>
          <div className={classes.description}>{data.fullDescription}</div>
          <div>
            <button onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className={classes.reviewsSection}></div>
    </div>
  );
}

export default ItemPage;
