import classes from "./dropDown.module.css";

function DropDown(props) {
  /* it is a dropdown windows that show when you hover mouse over link that leads you to list of all items
  you can pass array of links that will move user to more specific category of this item list */
  return (
    <div className={classes.dropdown}>
      <div className={classes.links}>{props.links}</div>
    </div>
  );
}

export default DropDown;
