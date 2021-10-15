import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {

    useEffect(() => {
        document.title = "About | TEN"
      }, [])

    return (
        <>
        
                <div className="about-red-box">
                <div className="about-head">About Us</div>   <br /><br /><br /><br />
                <div className="about-main-head">Quality Teaching <br /> Any Time, Everywhere</div><br /><br /><br />
                <div className="about-con">
                    The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise. <br />
                    Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time. <br />
                    This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market. <br />
                    With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal. <br />
                </div>
            </div> 



            <div  style={{ position:"absolute", top:"900px"}} className="foot-bottom">
         <div className="foot-box">
            <div className="foot-sub">Subscribe to our newsletter</div>  
            <input type="text" className="full-name" placeholder="Full Name" />  
            <input type="text" className="full-name clg-name" placeholder="College Name"/> 
            <input type="text" className="full-name foot-mob" placeholder="Mobile No." />
            <input type="text" className="full-name foot-mob clg-name" placeholder="Email" />
            <input type="checkbox" className="discord" name="discord" />
            <label htmlFor="discord" className="foot-discord">Join TEN's Discord Community</label>
            <button className="foot-submit" type="button">Submit</button>

            <a href="https://www.facebook.com/people/The-Entrepreneurship-Network/100063983912464/" rel="noreferrer" target="_blank" className="fb">
                <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
            </a>
            <a href="https://twitter.com/We_Are_TEN?s=08" target="_blank" rel="noreferrer" className="fb twee">
                <img src="https://static.wixstatic.com/media/59687ffffc2042f885062ce2b0744381.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01/59687ffffc2042f885062ce2b0744381.webp" alt="" />
            </a>
            <a href="https://www.instagram.com/theentrepreneurshipnetwork/" rel="noreferrer" className="fb ig">
                <img src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp" alt="" />
            </a>

            <div className="foot-box2">
                &copy;2020 Limitless Technologies - The Entrepreneurship Network
            </div>
            <div className="foot-about">
                <Link to="/aboutUs" className="nav-links" style={{color:'black'}}> About Us </Link>
                 <br />
                <Link to="/contactUs" className="nav-links" style={{color:'black'}}> FAQ's </Link>
                <br />
                <Link to="/contactUs" className="nav-links" style={{color:'black'}}>Contact Us</Link>
                </div>
            
        </div>  
    </div> 
        </>
    )
}
