import React,{useEffect} from 'react'
import Footer from './Footer'

export default function Testimonials() {
    useEffect(() => {
        document.title = "Testimonials | TEN"
      }, [])
    return (
        <>
        <div className="container">
            <div className="test">Testimonials <hr className="line" /></div>
        </div>  
        <img style={{position:"absolute",left:"80px"}} className="testimonials" src="https://static.wixstatic.com/media/11062b_bc016da29c8b4da282f4052c9a538621f000.jpg/v1/fill/w_1216,h_570,al_c,q_85,usm_0.33_1.00_0.00/11062b_bc016da29c8b4da282f4052c9a538621f000.webp" alt="" />  
        <div style={{top:"410px",fontSize:"27px", left:"120px", right:"130px"}} className="test-con">
        I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.
        <br />
        Thank you team TEN!
        <br /><br />
        -Kshema Unni, Business Development Intern
            
        </div>
     
          <div style={{position:"relative",bottom:"-500px"}}><Footer/></div>
        </>
    )
}
