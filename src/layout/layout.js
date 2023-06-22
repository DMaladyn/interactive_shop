import classes from "./layout.module.css";
import UpperBar from "./upperBar";

function Layout(props) {
  return (
    <div>
      <div className={classes.upperBar}>
        <UpperBar />
      </div>
      <main className={classes.items}>{props.children}</main>
    </div>
  );
}

export default Layout;
