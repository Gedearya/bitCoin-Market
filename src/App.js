import React, { Component } from "react";
import "./App.css";
import Market from "./component/Market";
import Sell from "./component/Sell";
import Buy from "./component/Buy";
import Coba from "./component/Coba";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column1">
            <img
              src="https://i0.wp.com/coinvestasi.com/wp-content/uploads/2019/08/LOGO-INDODAX-NewTagline2020.png?fit=1200%2C280&ssl=1"
              alt=""
              width="250px"
            />
          </div>
          <div className="column2">
            <center>
              <Coba />
            </center>
          </div>
        </div>
        <Market />
        <br />
        <div className="row">
          <div className="column">
            <center>
              <h1>Market Jual</h1>
            </center>
            <Sell />
          </div>
          <div className="column">
            <center>
              <h1>Market Beli</h1>
            </center>
            <Buy />
          </div>
        </div>
        <br />
        <center>
          <h3>Created by : I Gede Arya Danny Pratama</h3>
        </center>
        <br />
      </div>
    );
  }
}
export default App;
