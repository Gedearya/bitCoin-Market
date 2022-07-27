import React, { Component } from "react";
import axios from "axios";
import "./../App.css";

class Coba extends Component {
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
      });
    });
  }
  render() {
    var css = { padding: "5px" };
    var last = this.state.data1;
    var last2 = parseFloat(last).toLocaleString("id-ID");

    return (
      <div>
        <center>
          <table style={css}>
            <tbody>
              <tr className="tabel-kanan" id="currency">
                <td className="tabel-kanan">
                  {" "}
                  <b>1 BTC = Rp {last2}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default Coba;
