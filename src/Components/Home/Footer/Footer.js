import React from 'react'
import insta from '../../../assets/Images/instagram.png'
import youtube from '../../../assets/Images/youtube.png'
import vk from '../../../assets/Images/vk.png'


function Footer(){
    return(
        <div className='footer'>
            <div className='container'>
                <div className='footer_start'>
                    <div className='footer_head'>
                        <div className='footer_head_start'>
                            <div className='footer_head_box_one'>
                                <div className='footer_box_name'>
                                    <h3>Курсы</h3>
                                </div>
                                <div className='footer_box_text'>
                                    <p>Видеомонтаж</p>
                                    <p>Веб-программирования</p>
                                    <p>График-дизайн</p>
                                    <p>Бугалтерия</p>
                                </div>
                            </div>
                            <div className='footer_head_box_two'>
                                <div className='footer_box_name'>
                                    <h3>Курсы</h3>
                                </div>
                                <div className='footer_box_text'>
                                    <p>Видеомонтаж</p>
                                    <p>Веб-программирования</p>
                                    <p>График-дизайн</p>
                                    <p>Бугалтерия</p>
                                </div>
                            </div>
                            <div className='footer_head_box_three'>
                                <div className='footer_box_name'>
                                    <h3>Курсы</h3>
                                </div>
                                <div className='footer_box_text'>
                                    <p>Видеомонтаж</p>
                                    <p>Веб-программирования</p>
                                    <p>График-дизайн</p>
                                    <p>Бугалтерия</p>
                                </div>
                            </div>
                        </div>
                        <div className='footer_body'>
                            <div className='footer_body_links'>
                                <img src={insta} alt="icon"/>
                                <img src={youtube} alt="icon"/>
                                <img src={vk} alt="icon"/>
                            </div>
                            <div className='footer_body_name'>
                                <p>Сopyright@2022 Xayrowa</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;