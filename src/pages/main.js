import { Link } from "react-router-dom";

import classes from "./main.module.css";

import Sale from "../mainParts/sale";

function Main(props) {
  /* main page that is mostly visual and has links that lead to specific places on page */
  return (
    <div className={classes.main}>
      <Sale
        firstLine="Summer sale incoming"
        secondLine={<Link to="/list">"Up to 70% off"</Link>}
        picture={props.data[0].picture}
        link={props.data[0].link}
        pictureAlt="some kind of photo of an item from sale"
        mainColor="#6edb01"
        secondaryColor="#569c10"
        place="bottom"
      />
      <Sale
        firstLine="New 'Brand' collection already out"
        secondLine={<Link to="/list-shoes">Over 20 new clothes</Link>}
        picture={props.data[2].picture}
        link={props.data[2].link}
        pictureAlt="some kind of photo of an item from new collection"
        mainColor="#e60000"
        secondaryColor="#b30000"
        place="top"
      />
    </div>
  );
}

export default Main;
