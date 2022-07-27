import React, { Component } from "react";
import axios from "axios";

class Sell extends Component {
  constructor() {
    super();
    this.state = {
      ticker: [],
    };
  }
  componentDidMount() {
    axios.get("https://indodax.com/api/depth/btcidr").then((ambilData) => {
      console.log(ambilData);
      this.setState({
        ticker: ambilData.data.sell,
      });
    });
  }
  render() {
    var css = { border: "1px solid black", padding: "12px" };
    const data = this.state.ticker.map((item, index) => {
      var harga = item[0].toLocaleString("id-ID");
      var btc = parseFloat(item[1]).toString().replace(".", ",");
      var idr = Math.floor(item[0] * parseFloat(item[1])).toLocaleString(
        "id-ID"
      );
      return (
        <tr style={css} key={index}>
          <td style={css}>{harga}</td>
          <td style={css}>{btc}</td>
          <td style={css}>{idr}</td>
        </tr>
      );
    });
    return (
      <div className="tabel-sell">
        <center>
          <table className="tabel-sell1" style={css}>
            <tbody>
              <tr className="awal">
                <th className="sticky">Harga</th>
                <th className="sticky">BTC</th>
                <th className="sticky">IDR</th>
              </tr>
              {data}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default Sell;
