import React, {Component} from "react";
import logo from "./img/ronalogo.png";
import tr from "./img/tr-flag.png";
import eng from "./img/eng-flag.png";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo-img">
                <img src={logo} />
                </div>
                <ul className="content">
                    <li>ANASAYFA</li>
                    <li>CANLI PİYASA</li>
                    <li>BİLGİ TOPLUMU</li>
                    <li>HAKKIMIZDA</li>
                    <li>UYUM</li>
                    <li>İLETİŞİM</li>
                </ul>
                <div className="flag">
                <img src={tr} />
                <img src={eng} />
                </div>
            </nav>
        )
    }
}
export default Navbar