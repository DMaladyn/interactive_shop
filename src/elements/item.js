import classes from "./item.module.css";

function Item(props) {
  return (
    <div className={classes.item}>
      <img
        className={classes.picture}
        src={props.picture}
        alt="photo not loading"
      />
      <div className={classes.name}>{props.name}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{props.price}</div>
    </div>
  );
}

export default Item;
