import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Components from "./pages/Component";
import UseState from "./pages/State";
import Props from "./pages/Props";
import FetchAPI from "./pages/FetchAPI";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/state" element={<UseState />} />
            <Route path="/props" element={<Props />} />
            <Route path="/fetch-api/:id" element={<FetchAPI />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
