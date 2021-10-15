import React,{useEffect} from 'react'
import Footer from './Footer'

export default function Certification() {
    useEffect(() => {
        document.title = "Certification | TEN"
      }, [])
    return (
        <>
        <div className="container">
            <img className="bgpaper" alt="" src="https://static.wixstatic.com/media/e0136acb6a91480b87e8514652680cbf.jpg/v1/fill/w_1634,h_3059,al_c,q_90,usm_0.66_1.00_0.01/e0136acb6a91480b87e8514652680cbf.webp" />   
            <div className="cert">
                TEN Certified Expert
            </div>
            <div className="certcont">
            Dear Intern,
           <br /><br />
            We at TEN not only strive to provide the best guidance to our interns but also ensure their experience with us proves to be a career milestone.
            <br /><br />
            We hereby offer to certify you as an Expert in your domain for a paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY). This Internship encompasses all the major learnings you gave and received and establishes you as a certified professional. We are certain this accomplishment will go a long way in building your fledgling career and prove instrumental in making you the best in business.
            <br /><br />
            The <a href="#bottom">QR code</a> below helps you to make the required payment. The certificate would be shared on your email Id registered with us, once the payment is successful. Also, fill up the form below that helps you subscribe for the required certificate. 
            <br /><br />
            We look forward to certifying you and thereby enhancing your skill set and enriching your ever-growing profile.
            <br /><br />
            <div className="certform">
                Subscribe here to get Certificates
            </div>
            <br />&emsp;&emsp;&emsp;&emsp;
            <input type="text" className="intern-tags" placeholder="Internship Track"/>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/">Digital Marketing</a></li>
                <li><a class="dropdown-item" href="/">Market Research</a></li>
                <li><a class="dropdown-item" href="/">Sales</a></li>
            </ul>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="text" className="intern-tags"  placeholder="Full Name" /><br /><br />&emsp;&emsp;&emsp;
            <input type="text" className="intern-tags"  placeholder="Mobile No." />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="text" className="intern-tags"  placeholder="Email"/> <br /><br />&emsp;&emsp;&emsp;
            <input type="text" className="intern-tags"  placeholder="Payment transaction ID" />
            <br /><br />
            
        </div>
        <button type="button" className="subs">Subscribe</button>
        <div className="container" id="bottom">
            <img className="pay" alt="" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_545,h_724,al_c,q_85,usm_0.66_1.00_0.01/TEN_PAY_1.webp"  />
        </div>
         </div>
         <Footer/>
        </>
    )
}
