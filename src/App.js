import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import "./App.css";
import Navbar from "./Component/Navbar";
import Homepage from "./Component/Homepage";
import Cryptocurrencies from "./Component/Cryptocurrencies";
import CryptoDetails from "./Component/CryptoDetails";
import News from "./Component/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div
          className="footer"
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          <Typography.Title>
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
