import React, {Component} from "react";
import CurrencyList from "./CurrencyList";
import bg from "./img/bg-img.png";

class PriceList extends Component {

    state={
        currencys:[
              {
                name: "USDTRY",
                buying: "16.5846",
                selling: "16.5931"
              },
              {
                name: "EURTRY",
                buying: "17.7528",
                selling: "17.7804"
              },
              {
                name: "EURUSD",
                buying: "1.0705",
                selling: "1.0715"
              },
              {
                name: "GAUUSD",
                buying: "59.4470",
                selling: "59.5170"
              },
              {
                name: "GAUEUR",
                buying: "55.5780",
                selling: "55.5170"
              },
              {
                name: "GAUTRY",
                buying: "990.7180",
                selling: "992.4850"
              },
              {
                name: "ONSUSD",
                buying: "1,852.2620",
                selling: "1,852.9000"
              },
              {
                name: "AM FIX",
                buying: "1,851.500",
                selling: "6.0622"
              },
              {
                name: "PM FIX",
                buying: "1,844.900",
                selling: "1.0622"
              }
            ]
    }

    render() {
        return (
            <section>
            <div className="price">
            <h6 className="price-text">*Fiyatlarımız bilgi amaçlıdır.</h6>
            <CurrencyList currencys={this.state.currencys}/>
            </div>
            <div className="slider">
            <img className="bg-img" src={bg} />
            </div>
            </section>
        )
    }
}
export default PriceList