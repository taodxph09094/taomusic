import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Nhà phát triển</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Taodx</h3>
                        <p>Full Stack developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Trang web này tôi tạo cho vui.</p>
                    <p>Nó giúp tôi lưu trữ những bài hát tôi thích</p>
                    <p>Đơn giản, tiện lợi.</p>
                    <p>Tôi có thể tìm những bài hát tôi thích dễ hơn.</p>
                    <p>Tôi hi vọng các bạn sẽ thích nó.</p>
                    <p>Hihi.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/camamdeptrai/"} title={"tao-xuan-dang"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/"}  title={"tao-xuan-dang"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/taodx2403/"}  title={"tao-xuan-dang"}>
                            <Instagram/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;