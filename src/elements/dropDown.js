import classes from "./dropDown.module.css";

function DropDown(props) {
  return (
    <div className={classes.dropdown}>
      <div className={classes.links}>{props.links}</div>
    </div>
  );
}

export default DropDown;
