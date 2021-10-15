import React,{useEffect} from 'react'
import Footer from './Footer'

export default function AlumniTeam() {

    useEffect(() => {
        document.title = "Alumni Team | TEN"
      }, [])

    return (
        <>
         <div className="alumni">Alumni Team</div>  
         <img src="https://static.wixstatic.com/media/44a6c2_8c0dfa5b884a498b9972a25977eddc6a~mv2.png/v1/fill/w_300,h_300,al_c,lg_1,q_85/suyash.webp" alt="" className="suyash" /> 
         <a href="https://www.linkedin.com/in/suyash-gupta-77006839/" rel="noreferrer" className="alum-a su" target="_blank">Suyash Gupta</a>
         <img src="https://static.wixstatic.com/media/44a6c2_ffd59dfb22174d1b942b53791ac1b20c~mv2.png/v1/fill/w_300,h_300,al_c,lg_1,q_85/yagya.webp" alt="" className="suyash yagya" />
         <a href="https://www.linkedin.com/in/yagyavats/" className="alum-a ya" rel="noreferrer" target="_blank">Yagya Vats</a>
         <img src="https://static.wixstatic.com/media/44a6c2_b64fd9de4bbb4c25af262d35c973b678~mv2.png/v1/fill/w_300,h_300,al_c,lg_1,q_85/Aakar%20(1).webp" alt="" className="suyash aakar" />
         <a href="https://www.linkedin.com/in/aakar-aggarwal-671a401b/" rel="noreferrer" className="alum-a aa" target="_blank">Aakar Aggarwal</a>
         <img src="https://static.wixstatic.com/media/44a6c2_8b922d55d4bf4d63b7d4f0fc41da06a1~mv2.png/v1/fill/w_300,h_300,al_c,lg_1,q_85/sanchit.webp" alt="" className="suyash sanchit" />
         <a href="https://www.linkedin.com/in/sanchit-gupta-b68a20b2/" rel="noreferrer" className="alum-a sa" target="_blank">Sanchit Gupta</a>
         <br />
         <img src="https://static.wixstatic.com/media/693073_441572e6c4604b399ce8959b304a3b1f~mv2.jpeg/v1/fill/w_280,h_280,al_c,lg_1,q_80/apoorv.webp" alt="" className="apoorv" /> 
         <a href="https://www.linkedin.com/in/agarwalapoorv90/" rel="noreferrer" className="alum-b su" target="_blank">Apoorv Agarwal</a>
         <img src="https://static.wixstatic.com/media/693073_0739c43fded9474e94802f0e5ff3b679~mv2.jpeg/v1/fill/w_280,h_280,al_c,lg_1,q_80/ankur.webp" alt="bfuirh" className="apoorv yagya" />
         <a href="https://www.linkedin.com/in/ankur-dahiya-b8a6968a/" rel="noreferrer" className="alum-b ya" target="_blank">Ankur Dahiya</a>
         <img src="https://static.wixstatic.com/media/693073_d6bc4a1e0fc743d39accd54ec62ecf03~mv2.jpeg/v1/fill/w_280,h_280,al_c,lg_1,q_80/mayank.webp" alt="" className="apoorv aakar" />
         <a href="https://www.linkedin.com/in/mayankbindas/" rel="noreferrer" className="alum-b aa" target="_blank">Mayank Gupta</a>
         <img src="https://static.wixstatic.com/media/693073_441572e6c4604b399ce8959b304a3b1f~mv2.jpeg/v1/fill/w_280,h_280,al_c,lg_1,q_80/apoorv.webp" alt="" className="apoorv sanchit" />
         <a href="https://www.linkedin.com/in/mayankbindas/" rel="noreferrer" className="alum-b sa" target="_blank">Nikhil Bukhan</a>

         <div style={{position:"absolute", top:"930px"}} ><Footer/></div>
        </>
    )
}
