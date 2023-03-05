import React from 'react'
import './Home.css';
import logo from "./img/logoficial1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const Learn = () =>{
    return(
        <body className='Home'>
        <div className="box">
        <header className="header">
        <div className="logo">
                <img src={logo} alt="logoprov" width={110}></img>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#">Organizations</a></li>
                    <li><a href="#">Directory</a></li>
                    <li><a href="#">Frequently Ask Questions</a></li>
                </ul>
            </nav>
            <a href="#" class="btn"><button>Contact Us</button></a>
        
        <div className="searchBar">
        <form id="searchBar">
        <div className="mySearch">
        <input type="search" id="mySearch" className="mySearch" />
        <a class="btnsearch"><button>Search</button></a>
        </div>
        </form>
        </div>


        <a onclick="openNav()" class="menu" href="#"><button>Menu</button></a>
        <div id="mobile-menu" className="overlay">
            <a onclick="closeNav()" href="" nameClass="close">&times;</a>
            <div nameClass="overlay-content">
                    <a href="#">Organizations</a>
                    <a href="#">Directory</a>
                    <a href="#">Frequently Ask Questions</a>
                    <a href="#">Contact Us</a>
                    </div>
       
        </div>
        </header>
        <center>
        <h1>WHAT IS A STD (Sexual Transmission Disease)?</h1>

        </center>
        <p>Sexually transmitted diseases (STDs) or sexually transmitted infections,
             are infections that are passed (STIs), are infections that are passed 
             from one person to another through sexual contact. They are usually spread 
             during vaginal, oral, or anal sex. But sometimes they can spread through 
             other sexual contact involving the penis, vagina, mouth or anus. This is 
             because some STDs, like herpes and HPV, are spread by skin-to-skin contact. </p>
             
             <center>
             <h1>What are the most common STD's?</h1>        
            
            <Carousel infiniteLoop="true" thumbWidth={80} width="40%" >
                <div >
                    <img  src="https://i.ytimg.com/vi/3XW9oLyI6o4/maxresdefault.jpg"/ >
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/std/chlamydia/stdfact-chlamydia.htm#:~:text=Chlamydia%20is%20a%20common%20STD,that%20occurs%20outside%20the%20womb).">Learn more about Chlamydia</a>
                        </button>
                </div>
                <div >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/SOA-Herpes-genitalis-female.jpg"/>
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/std/chlamydia/stdfact-chlamydia.htm#:~:text=Chlamydia%20is%20a%20common%20STD,that%20occurs%20outside%20the%20womb).">Learn more about Genital Herpes</a>
                        </button>                
                        </div>
                <div >
                    <img src="https://img.medscapestatic.com/pi/meds/ckb/34/37134tn.jpg"/>
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/std/gonorrhea/stdfact-gonorrhea-detailed.htm#:~:text=What%20is%20gonorrhea%3F,urethra%20in%20women%20and%20men.">Learn more about Gonorrhea</a>
                        </button>               
                         </div>
                <div>
                    <img src="https://www.verywellhealth.com/thmb/jZySPe4WH1oIrJwV8oBmYPTQaQE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VWH-MichelaButtignol-HIVSymptoms-Standard-adce699c9b6c4be38bfc65be6397136e.jpg"/>
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/hiv/basics/whatishiv.html#:~:text=What%20is%20HIV%3F,they%20have%20it%20for%20life.">Learn more about HIV</a>
                        </button>                </div>
                <div >
                    <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/01/VIAPosCIN1_slide.jpg"/>
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/std/hpv/stdfact-hpv.htm#:~:text=What%20is%20HPV%3F,including%20genital%20warts%20and%20cancers.">Learn more about HPV</a>
                        </button>                </div>
                <div >
                    <img src="https://www.uptodate.com/contents/images/PI/64225/PubiclicePI.jpg"/>
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/parasites/lice/pubic/gen_info/faqs.html">Learn more about Pubic Lice</a>
                        </button>                </div>
                <div>
                    <img src="https://pharmaceutical-journal.com/wp-content/uploads/2021/01/secondary-syphilis-rash-spl-18.png"/>
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/std/syphilis/stdfact-syphilis.htm">Learn more about Syphilis</a>
                        </button>                </div>
                <div>
                    <img src="https://www.verywellhealth.com/thmb/I_8gEZjcQKC7xz4earzgL8dyfhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/trichomoniasis-overview-3133043_final-90c5f85c911449068329753de7d0a42f.jpg"/>
                    <button className="LearnMore">
                    <a className="Link" href="https://www.cdc.gov/std/trichomonas/stdfact-trichomoniasis.htm#:~:text=What%20is%20trichomoniasis%3F,cannot%20tell%20they%20have%20it.">Learn more about Trichomoniasis</a>
                        </button>                </div>
            </Carousel>
                </center>
        <center>
            <h1>
                How often should women get a pelvic exam and Pap Test?
            </h1>
        </center>
        <p>
        A Pap test is recommended for women aged 21 and older. The American College of
         Obstetrics and Gynecology recommends routine screening for women ages 21 to 65 years 
         every three years.  
        </p>
        </div>

    </body>
    )

}


export default Learn