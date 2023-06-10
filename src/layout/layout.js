import classes from "./layout.module.css";
import UpperBar from "./upperBar";

function Layout(props) {
  return (
    <div>
      <UpperBar />
      <main className={classes.items}>{props.children}</main>
    </div>
  );
}

export default Layout;
