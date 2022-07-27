import React, { Component } from "react";
import axios from "axios";
import "./../App.css";

class Market extends Component {
  constructor() {
    super();
    this.state = {
      ticker: "",
    };
  }
  componentDidMount() {
    axios.get("https://indodax.com/api/ticker/btcidr").then((ambilData) => {
      console.log(ambilData);
      this.setState({
        data1: ambilData.data.ticker.last,
        data2: ambilData.data.ticker.low,
        data3: ambilData.data.ticker.high,
        data4: ambilData.data.ticker.vol_btc,
      });
    });
  }
  render() {
    var css = { border: "1px solid black", padding: "10px" };
    var last = this.state.data1;
    var low = this.state.data2;
    var high = this.state.data3;
    var vol_btc = this.state.data4;
    var last2 = parseFloat(last).toLocaleString("id-ID");
    var low2 = parseFloat(low).toLocaleString("id-ID");
    var high2 = parseFloat(high).toLocaleString("id-ID");
    var vol_btc2 = parseFloat(vol_btc).toFixed(1).replace(".", ",");

    return (
      <div>
        <center>
          <h1>BTC to IDR</h1>
          <h2 className="h2">
            <i className="fab fa-bitcoin"></i>ITCOIN MARKET
          </h2>
          <table style={css}>
            <tbody className="table1">
              <tr id="currency">
                <td>
                  {" "}
                  <b>{last2}</b> <br /> Harga Terakhir
                </td>
                <td>
                  {" "}
                  <b>{low2}</b> <br /> Low{" "}
                </td>
                <td>
                  {" "}
                  <b>{high2}</b> <br /> High{" "}
                </td>
              </tr>
              <td className="txt" colSpan="3">
                Vol 24h : <b>{vol_btc2}</b> BTC
              </td>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default Market;
