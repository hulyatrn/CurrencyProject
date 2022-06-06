import React, {Component} from "react";
import Navbar from "./component/Navbar";
import PriceList from "./component/PriceList";

class App extends Component {


  render(){
  return (
    <div className="App">
      <Navbar/>
      <PriceList/>
    </div>
  );
}
}

export default App
