import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Táo music</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Hãy để âm nhạc </h1>
                            <p>Tạo ra màu sắc trong cuộc sống</p>
                            <Link to={"/home"} className="btn">
                                Chuyển trang 
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;