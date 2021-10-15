import React,{useEffect} from 'react'
import Footer from './Footer'

export default function CampusAmbassadorProgram() {
    useEffect(() => {
        document.title = "Campus Ambassador Program | TEN"
      }, [])
    return (
        <>
            <div className="cam-box1">
                <div className="cam-head1">                    
                Campus Ambassador Registration    
                </div> 
                <img src="https://static.wixstatic.com/media/c4ea0b_d49fa278f8904b70988149c703acb442~mv2.jpg/v1/crop/x_21,y_110,w_643,h_114/fill/w_738,h_131,al_c,lg_1,q_80/34560488_591443757892996_612353626492370.webp" alt="" className="look" />   
                <img src="https://static.wixstatic.com/media/c4ea0b_bece5bb82f714728b574d12e01c6cd38~mv2.jpg/v1/crop/x_0,y_24,w_552,h_271/fill/w_635,h_311,al_c,lg_1,q_80/34560488_591443757892996_612353626492370.webp" alt="" className="people" />
                <button className="skills" type="button">Skills required &gt;</button>
                &emsp;&emsp;&emsp;
                <button className="skills reward" type="button">Rewards &gt;</button>
                <button className="apply" type="button">Apply Now</button>
            </div>   
            <img src="https://static.wixstatic.com/media/c4ea0b_e2498094d8224f50b00951605631d105~mv2.jpg/v1/fill/w_894,h_630,al_c,q_85/c4ea0b_e2498094d8224f50b00951605631d105~mv2.webp" alt="" className="hands" />
            <div className="skill-box">
                <div className="skill-head">SKILLS REQUIRED</div>
                <div className="skill-con">
                    <ul>
                        <li>Social Media Presence of min 500 followers</li> <br />
                        <li>Strategy and planning skills</li><br />
                        <li>Relationship building</li><br />
                        <li>Part of a college society or club</li><br />
                    </ul>
                </div>
            </div>
            <img src="https://static.wixstatic.com/media/c4ea0b_77ec042294404dc3bf273c8c840398df~mv2.png/v1/fill/w_947,h_710,al_c,q_90,usm_0.66_1.00_0.01/c4ea0b_77ec042294404dc3bf273c8c840398df~mv2.webp" alt="" className="trophy" />
            <div className="reward-box">
                <div className="rew-head">Rewards</div>
                <div className="rew-con">
                    <ul>
                        <li><b className="rew-hig">'Campus Ambassador'</b> certificate</li>
                        <li>Performance/target based cash rewards</li>
                        <li> <b className="rew-hig"> 'AMBASSADOR OF THE MONTH'</b> certificate for top performers</li>
                        <li>Free access to social events organised by TEN.</li>
                    </ul>
                </div>
            </div>

            <div className="black-reg-box camp-reg">
                <div className="purp-head">
                Campus Ambassador Registration Form
                </div>
                <hr />
                <div className="purp-con1">
                If you would like to be campus ambassador of TEN, please fill in your details in the form bellow and you will be automatically registered.
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
            </div>
            <div style={{position:"relative", bottom:"-2470px"}}><Footer/></div>
        </>
    )
}
