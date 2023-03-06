import './Home.css';
import React from 'react';
import logo from "./img/logoficial1.png";
import UncontrolledExample from "./Carousel.js";

const Home = () =>{
    return(
        <body className='Home'>
            <div className="box">
            <header className="header">
            <div className="logo">
                <a href="/">  
                    <img src={logo} alt="logoprov" width={110}></img>
                </a>
                  
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
            <UncontrolledExample/>
            <div className='buttonsLinks'>
                <div className="learnButton">
                            <a href="/learn" class="learnBtn"><button>I WANT TO LEARN</button></a>
                </div>
                <div className="learnButton">
                    <a href="/quiz" class="learnBtn"><button>I HAVE SYMPTOMS</button></a>
                    </div>
                </div>
            </div>
       
        </body>
   

    )}
   

export default Home
