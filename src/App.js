import "./App.css";
import Navigation from "./Components/Navigation/Navigation.Component";
import { Routes, Route } from "react-router-dom";
import HomeRoute from "./Routes/Home/Home.Route.Component";
import ShopRoute from "./Routes/Shop/Shop.Route.Component";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeRoute />} />
          <Route path="shop" element={<ShopRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
