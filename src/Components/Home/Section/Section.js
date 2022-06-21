import React from 'react';
import Img from "../../../assets/Images/computer.png"
import icon1 from "../../../assets/Images/icon-1.png"
import icon2 from "../../../assets/Images/icon-2.png"
import icon3 from "../../../assets/Images/icon_3.png"
import icon_section_3 from '../../../assets/Images/icon_section_3.png'
import icon_section_2 from '../../../assets/Images/icon_section_2.png'
import logo_section from '../../../assets/Images/logo.png'
import teach1 from "../../../assets/Images/img_teach1.png"



function Section(props) {

    const logos = [
        {
            id:1,
            logo: logo_section
        },
        {
            id:2,
            logo: logo_section
        },
        {
            id:3,
            logo: logo_section
        },
        {
            id:4,
            logo: logo_section
        },
        {
            id:5,
            logo: logo_section
        },
        {
            id:6,
            logo: logo_section
        },
        {
            id:7,
            logo: logo_section
        },
        {
            id:8,
            logo: logo_section
        },
    ]
    const teach = [
        {
            img: teach1,
            id:1,
            name:'Дмитрий Иванов',
            proffesion:"Специалист по видеокартам"
        },
        {
            img: teach1,
            id:2,
            name:'Дмитрий Иванов',
            proffesion:"Специалист по видеокартам"
        },
        {
            img: teach1,
            id:3,
            name:'Дмитрий Иванов',
            proffesion:"Специалист по видеокартам"
        },
    ]


    return (
        <div className="section">
            <img/>
            <div className="container_two">
                <div className="sections">
                   

                    <div className='section_two'>
                        <div className='section_well'>
                            <div className='section_two_text'>
                                <h3>Получите профессию прямо сейчас</h3>
                            </div>
                            <div className='section_two_flex'>
                                <div className='section_teachings'>
                                    <div className='section_two_img'>
                                        <img src={icon1} alt='icon1' />
                                    </div>
                                    <div className='section_about'>
                                        <p>Только практичекие <br /> навыки в работе</p>
                                    </div>
                                    <div className='section_about_text'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque accumsan <br/> amet tortor. Velit, volutpat egestas fringilla mi <br/> porttitor tempus. Placerat dui.</div>
                                </div>
                                <div className='section_teachings'>
                                    <div className='section_two_img'>
                                        <img src={icon2} alt='icon1' />
                                    </div>
                                    <div className='section_about'>
                                        <p>Работа на самом <br /> современном оборудовании</p>
                                    </div>
                                    <div className='section_about_text'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque accumsan <br/> amet tortor. Velit, volutpat egestas fringilla mi <br/> porttitor tempus. Placerat dui.</div>
                                </div>
                                <div className='section_teachings'>
                                    <div className='section_two_img'>
                                        <img src={icon3} alt='icon1' />
                                    </div>
                                    <div className='section_about'>
                                        <p>Cертфикация <br /> по оканчание обучение</p>
                                    </div>
                                    <div className='section_about_text'><p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque accumsan <br/> amet tortor. Velit, volutpat egestas fringilla mi <br/> porttitor tempus. Placerat dui.</p></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='section_three'>
                        <div className='section_three_start'>
                            <div className='section_three_head'>
                                <div className='section_icon'>
                                    <img src={icon_section_3} alt='icon'/>
                                    <h3>Быстрый старт</h3>
                                </div>
                                <div className='section_three-head_text'>
                                    <p>Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
                                </div>           
                            </div>

                            <div className='section_three_body'>
                                <div className='section_three_body_start'>
                                    <div className='section_body_percent'>
                                        <div className='section_percent_start'>
                                            <p>100%</p>
                                            <p>75%</p>
                                            <p>50%</p>
                                            <p className='section_percent-p'>Итог</p>                                           
                                        </div>
                                        <div className='section_backgroung_percent_start'>
                                            <div className='section_percent_one'></div>
                                            <div className='section_percent_two'></div>
                                            <div className='section_percent_three'></div>
                                            <div className='section_percent_four'></div>
                                        </div>

                                        <div className='section_three_total'>
                                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/>  accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/>  accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/>  accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/>  accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='section_four'>
                        <div className='section_partners'>
                            <div className='section_partners_text'>
                                <div className='section_partners_img'>
                                    <img src={icon_section_2} alt='icon'/>
                                    <p>Партнеры - топовые бренды</p>
                                </div>
                            </div>

                            <div className='section_partner'>
                                
                              {
                                    logos.map(item =>{
                                        return(
                                            <div className='map_section' key={item.id}>
                                                <img src={item.logo} alt='logo'/> 
                                            </div>
                                        )
                                    })
    
                              }
                            </div>

                        </div>

                    </div>

                    <div className='section_five'>
                        <div className='section_end'>
                            <div className='section_head'>
                                <div className='section_head_start'>
                                    <img src={icon_section_2} alt="img" />
                                    <h3>Ваши преподаватели</h3>
                                </div>

                                <div className='section_teachers'>
                                   
                                      {
                                            teach.map(item=>{
                                                return(
                                                    <div className='section_teach' key={item.id}>
                                                         <div className='section_teachers_start'>
                                                            <img src={item.img} alt="img"/>
                                                        </div>

                                                        <div className='section_teach_text'>
                                                            <span className='section_text_name'>{item.name}</span>
                                                            <span className='section_text_proffesion'>{item.proffesion}</span>
                                                            <button className='section_btn'>Биография</button>

                                                        </div>

                                                    </div>    
                                                       
                                                   
                                                )
                                            })
    
                                      }

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Section;