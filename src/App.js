import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Layout from "./layout/layout";
import Cart from "./pages/shopCart";
import Main from "./pages/main";
import List from "./pages/itemsList";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
