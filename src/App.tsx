import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductInfo from "./productInfo/ProductInfo";
import MainLayout from "./components/mainLayout/MainLayout";
import Home from "./components/home/Home";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <Provider store={store}>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 flex-col justify-center align-item-center">
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" Component={MainLayout} >
              <Route index Component={Home}/>
              <Route path="/productInfo" Component={ProductInfo} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>

      </div>
    </Provider>
  );
};

export default App;
