import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        <img src={require("../assets/img/taomusic.png").default} width={"70px"} alt=""/>
                        music
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;