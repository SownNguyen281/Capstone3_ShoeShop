import React from "react";
import ReactDOM from "react-dom/client";

// style
import "./assets/scss/style.scss";
import "./index.css";

import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { store } from "./redux/configStore";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemPlate";
import Search from "./pages/Search/Search";

export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="detail">
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="*" element={<Navigate to={""} />}></Route>
        </Route>

        <Route path="user" element={<UserTemplate />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<Navigate to={""} />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
