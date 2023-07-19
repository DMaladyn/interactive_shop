import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Layout from "./layout/layout";
import Cart from "./pages/shopCart";
import Main from "./pages/main";
import List from "./pages/itemsList";
import Checkout from "./pages/checkout";
import ItemPage from "./pages/itemPage";

function App() {
  /* data that is passed to components that need/might need it */
  let data = {
    0: {
      picture: [
        "https://images.unsplash.com/photo-1629956044156-27896de7efa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25lfGVufDB8fDB8fHww&w=1000&q=80",
        "https://images.unsplash.com/photo-1629956044156-27896de7efa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25lfGVufDB8fDB8fHww&w=1000&q=80",
        "https://images.unsplash.com/photo-1629956044156-27896de7efa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25lfGVufDB8fDB8fHww&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2012/05/04/10/18/two-47085_1280.png",
        "https://images.unsplash.com/photo-1629956044156-27896de7efa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25lfGVufDB8fDB8fHww&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2012/05/04/10/18/two-47085_1280.png",
      ],
      name: "firstName",
      description:
        "descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem descOfFirstItem",
      fullDescription:
        "It is full description of firstName, it is supposed to be longer than first one and have some details.",
      price: 1,
      page: "linkToFirstPage",
      type: "jeans",
    },
    1: {
      picture: [
        "https://cdn.pixabay.com/photo/2012/05/04/10/18/two-47085_1280.png",
        "https://cdn.pixabay.com/photo/2012/05/04/10/18/two-47085_1280.png",
        "https://cdn.pixabay.com/photo/2012/05/04/10/18/two-47085_1280.png",
      ],
      name: "secondName",
      description: "descOfSecondItem",
      fullDescription:
        "It is full description of secondName, it is supposed to be longer than first one and have some details.",
      price: 2,
      page: "linkToSecondPage",
      type: "shoes",
      link: "./shoes/green_boots.js",
    },
    2: {
      picture: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagIPixpfhdLWExhOBEL50IBKR31TS0zZiCne4Iw1C1g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagIPixpfhdLWExhOBEL50IBKR31TS0zZiCne4Iw1C1g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagIPixpfhdLWExhOBEL50IBKR31TS0zZiCne4Iw1C1g&s",
      ],
      name: "thirdName",
      description: "descOfThirdItem",
      fullDescription:
        "It is full description of thirdName, it is supposed to be longer than first one and have some details.",
      price: 3,
      page: "linkToThirdPage",
      type: "jeans",
    },
    3: {
      picture: [
        "https://t4.ftcdn.net/jpg/00/99/53/31/360_F_99533104_L1KKBU8pLtGjUSckCncSaSOHMrj14bAG.jpg",
        "https://t4.ftcdn.net/jpg/00/99/53/31/360_F_99533104_L1KKBU8pLtGjUSckCncSaSOHMrj14bAG.jpg",
        "https://t4.ftcdn.net/jpg/00/99/53/31/360_F_99533104_L1KKBU8pLtGjUSckCncSaSOHMrj14bAG.jpg",
      ],
      name: "fourthName",
      description: "descOfFourthItem",
      fullDescription:
        "It is full description of fourthName, it is supposed to be longer than first one and have some details.",
      price: 4,
      page: "linkToFourthPage",
      type: "shoes",
    },
    4: {
      picture: [
        "https://www.shutterstock.com/image-illustration/3d-shiny-red-number-collection-260nw-120044455.jpg",
        "https://www.shutterstock.com/image-illustration/3d-shiny-red-number-collection-260nw-120044455.jpg",
        "https://www.shutterstock.com/image-illustration/3d-shiny-red-number-collection-260nw-120044455.jpg",
      ],
      name: "fifthName",
      description: "descOfFifthItem",
      fullDescription:
        "It is full description of fifthName, it is supposed to be longer than first one and have some details.",
      price: 5,
      page: "linkToFifthPage",
      type: "tshirt",
    },
  };

  return (
    <div>
      <Layout>
        <Routes>
          {/* routes to Main, Cart, Checkout, List with optional category, ItemPage with id and item's category */}
          <Route path="/" element={<Main data={data} />} />
          <Route path="/list" element={<List data={data} />} />
          <Route path="/list-:category" element={<List data={data} />} />
          <Route
            path="/list-:category/:itemId"
            element={<ItemPage data={data} />}
          />
          <Route path="/cart" element={<Cart data={data} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
