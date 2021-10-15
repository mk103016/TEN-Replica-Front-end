import React,{useEffect} from 'react'
import Footer from './Footer'

export default function MembershipRegistration() {
  useEffect(() => {
    document.title = "Membership Registration | TEN"
  }, [])
    return (
        <>
          
          <div className="container">
            <div className="mem">MEMBERSHIP REGISTRATION</div>    
            <img src="https://static.wixstatic.com/media/cca0e48a9eea265ba6be36a1eacc66d4.jpg/v1/fill/w_1280,h_766,al_c,q_85/Business%20Team.webp" alt="" className="imem" />
          </div>  
          <div className="mem-box1">
              <div className="mem-con1">
              We, at The Entrepreneurship Network (TEN), have always been interested in associating ourselves with young professionals that show a constant zeal to learn and improve themselves. We therefore extend a cordial invitation to you to join our society.
              <br /><br />
              We are one of the fastest growing edu-tech startups in the world that not only provides you an opportunity to upskill yourself in the hottest technologies present today but also assist you in getting a job that complements that skill-set.
              <br /><br />
              The membership starts as low as INR 100/- (RUPEES ONE HUNDRED ONLY). Register and pay today to start exploring an ocean of opportunities.
              <br /><br />
              That's not it, become a member for an year and enjoy a free access to all courses, at an introductory price of INR 10000/- (RUPEES TEN THOUSAND ONLY).
              <br /><br />
              HURRY UP!!! DON'T FORGET TO SCAN AND PAY FOR COMPLETING YOUR REGISTRATION.
              <br /><br /><br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <button className="perk" type="button">PERKS</button>&emsp;&emsp;&emsp;&emsp;
              <button className="perk" type="button">REGISTRATION</button>
              </div>
            </div>
          <div className="mem-box2">            
          <img src="https://static.wixstatic.com/media/c4ea0b_656145e89827461a942d23b96161f7c4~mv2.jpg/v1/fill/w_684,h_393,al_c,lg_1,q_80/Perks.webp" alt="" className="perks" />
            <div className="mem-head2">
              Perks
            </div>
            <div className="mem-con2">
              <ul>
                <li>Course Handbooks and other study material</li>
                <li>Reduced product costs</li>
                <li>Exclusive VIP Badges.</li>
                <li>Updates on relevant news and job opportunities</li>
              </ul>
            </div>
          </div>          
          <div className="black-reg-box member-for">
                <div className="purp-head">
                Membership Registration Form
                </div>
                <hr />
                <div className="car-con ">
                If you would like to be a part of TEN, please fill in your details in the form bellow and you will be automatically registered.
                </div>
                <div className="reg-att">
                    Name*
                </div>
                <input type="text" className="first-reg" placeholder="First" />
                <input type="text" className="first-reg last-reg" placeholder="Last" />
                <div className="reg-att em-att">Email*</div>
                <input type="text" className="first-reg em-reg" />
                <div className="reg-att phone-att">Phone*</div>
                <input type="text" className="first-reg phone-reg em-reg" placeholder="### ### ####"/>
                <div className="reg-att com-att">Comments or questions</div>
                <input type="text" className="first-reg em-reg com-reg"/>
                <button className="reg">Register</button>
                <div className="men-com">To complete your registration, please scan and pay</div>
                <img src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_624,h_819,al_c,q_85,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="" className="pay men-pay" />
          </div>  

          <div style={{position:"relative", bottom:"-1800px"}} ><Footer/></div>
        </>
    )
}
