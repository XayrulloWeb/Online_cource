import React,{useState} from 'react';
import icon from "../../../assets/Images/icon.png"
import {Link} from "react-router-dom"
import menu from "../../../assets/Images/free-icon-menu-225313.png"



function Navbar(props) {

    const [isOpen, setIsOpen] = useState(false);
    const handleToog= () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div className= {isOpen? "navbar_expended" : "navbar"}>
            <div className="container">
                <div className="navbar_home">
                    <div className="navbar_flex">
                        <div className="navbar_left">
                            <div className="navbar_icon">
                                <img src={icon} alt="icon_group"/>
                            </div>
                        </div>
                        <div className="navbar_right">
                            <div className="navbar_right_links">
                                <span>Главная</span>
                                <span>Курсы</span>
                                <span>Расписание</span>
                                <span>Преподаватели</span>
                                <span>Рассылка</span>
                                <span>Контакты</span>
                            </div>
                        </div>
                        <div className="navbar_menu">
                            <img onClick={handleToog} src={menu} alt='menu'/>
                        </div>
                    </div>
                    <div className="container_two">

                    </div>

                </div>
            </div>

          
        </div>
    );
}

export default Navbar;