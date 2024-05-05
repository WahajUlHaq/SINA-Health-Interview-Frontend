import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../screens/Dashboard";
import UserRegisteration from "../screens/UserRegisteration";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Dashboard />} />
        <Route exact={true} path="/user/reg" element={<UserRegisteration />} />
        <Route exact={true} path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
