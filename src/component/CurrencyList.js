import React, {Component} from "react";
import Currency from "./Currency";


class CurrencyList extends Component {

    render() {

      const currencyListt = this.props.currencys.map((currency,i) => {
        return <Currency currency={currency}
        key={i}/>
      })
    return (
            <div>{currencyListt}
            </div>

        )
    }
}
export default CurrencyList