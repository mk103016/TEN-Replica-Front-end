import React, {useEffect} from 'react'
import Footer from './Footer'


export default function Hiring() {

    useEffect(() => {
        document.title = "TEN | hiring"
      }, [])

    return (
        <>
        <div className="container">
            <br />
            <img className="hiring" src="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_1565,h_1118,al_c,q_85,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp" alt="Hiring" />
            <div className="hire">We Are Hiring Interns</div> <br /><br />
            <div className="hiretext">
                The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.
                <br />
                There is a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.
                <br /><br />
            <img className="qrcode" alt="qrcode" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_537,h_717,al_c,q_85,usm_0.66_1.00_0.01/TEN_PAY_1.webp"  />
            </div>
            <div className="hiretext1">
                Scan the QR code to complete your payment and submit the below
                application form to start with your registration process.            
            </div>
            <div className="hiretext2">
            Please keep the payment transaction ID handy for submitting
            the form. <br /><br />
            Note: This internship does not offer an opportunity to earn money,
            rather helps an individual grow by working on the job and
            earn a certificate upon successful completion. <br /><br />
            Check out few of our open internship positions below
            Refer the application form for more open positions
            </div>
            <div className=" hiretop hiretext1">
            Digital Marketing Interns
                <br /><br />
            General Management Interns
                <br /><br />
            Technical/Software Experts
                <br /><br />
            Product Management Interns
                <br /><br />
            Content Interns and more...
            </div>
         </div>
         <img className="flowerbg" src="https://static.wixstatic.com/media/0c2d11194b8042ca9f11f7f681339102.jpg/v1/fill/w_1694,h_1007,al_c,q_85,usm_0.66_1.00_0.01/0c2d11194b8042ca9f11f7f681339102.webp" alt="flowerbg" />
         <div className="appl ani">
             Application Form
         </div>
         <div className=" appl reg-hire">
            Registration Fee Rs. 400/-
         </div>
         <div className="appl drop">
             Choose relevant internship opening* <br />
             
             <div className="dropdown">
                <button className="btn hiring-appl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <input type="text" className="hiring-appl dropdown-toggle" tooltip="Please select an item in the list" />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <a className="dropdown-item" href="/">Something else here</a>
                </div>
                </div>
             <br /><br />
             What’s your employment status?*
             <div className="dropdown">
                <button className="btn hiring-appl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <input type="text" className="hiring-appl dropdown-toggle" tooltip="Please select an item in the list" />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <a className="dropdown-item" href="/">Something else here</a>
                </div>
                </div>
             <br /><br />
             Do you have previous experience?*
             
             <div className="dropdown">
                <button className="btn hiring-appl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <input type="text" className="hiring-appl dropdown-toggle" tooltip="Please select an item in the list" />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <a className="dropdown-item" href="/">Something else here</a>
                </div>
                </div>
                <br /><br />
             Payment Transaction ID* <br />
             <input type="text" className="hiring-appl hiring-pay" tooltip="Please fill out this field" />
         </div>
         <div className="dropdown">   
         <div className="hire-next"> <i>Next</i> </div>     
</div>
<Footer/>
        </>
    )
}
