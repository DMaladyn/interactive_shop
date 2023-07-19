import classes from "./sale.module.css";

function Sale(props) {
  /* component with intent to be used on main page as form of local ad for specific items/collections */
  return (
    <div className={classes.content}>
      {props.place == "top" ? (
        <div
          className={classes.saleSubBar}
          /* style={{
            backgroundImage:
              "linear-gradient(" +
              props.secondaryColor +
              "," +
              props.mainColor +
              ")",
          }} */
          style={{ backgroundColor: props.secondaryColor }}
        >
          &nbsp;
        </div>
      ) : null}
      <div
        className={classes.sale}
        /* style={{ backgroundColor: props.mainColor }} */
        style={{
          backgroundImage:
            "linear-gradient(" +
            (props.place == "bottom" ? "to top" : "to bottom") +
            "," +
            props.secondaryColor +
            "," +
            props.mainColor +
            ")",
        }}
      >
        <div>
          <div className={classes.firstLine}>{props.firstLine}</div>
          <img
            className={classes.saleImg}
            src={props.picture}
            alt={props.pictureAlt}
          />
        </div>
        <div className={classes.secondLine}>{props.secondLine}</div>
      </div>
      {props.place == "bottom" ? (
        <div
          className={classes.saleSubBar}
          /* style={{
            backgroundImage:
              "linear-gradient(" +
              props.mainColor +
              "," +
              props.secondaryColor +
              ")",
          }} */
          style={{ backgroundColor: props.secondaryColor }}
        >
          &nbsp;
        </div>
      ) : null}
    </div>
  );
}

export default Sale;
