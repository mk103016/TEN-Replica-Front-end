import React, {useEffect} from 'react'
import Footer from './Footer'

export default function ContactUs() {

    useEffect(() => {
        document.title = "Contact Us | TEN"
      }, [])

    return (
        <>
        <div className="container">
         <div style={{color:"black"}} className="test">Contact Us</div>
         <br /><br /><br /><br />
         <div className="contact-box">
            <input type="text" className="contact-name" placeholder="Name" tooltip="Please fill out this field." />
            <input type="text" className="contact-name contact-email" placeholder="Email" tooltip="Please fill out this field." />
            <textarea type="text" className="contact-name contact-message" placeholder="Add a message" />
            <button className="contact-submit" type="button">Submit</button>
        </div>  
        <div className="contact-info-box">
            Email: <br />hr.contact.ten@gmail.com <br /><br /><br /><br />
            Phone: <br />+918595986120 <br /><br /><br /><br />
            Address: Delhi
        </div>

        <div className="faq-box">
            <div className="faq-big-head">FAQ</div>
            <div className="faq-head">Frequently asked questions</div>
            <div className="faq-con-box">
                <div className="faq-con">
            What is The Entrepreneurship Network (TEN) ?<br /><br />
            The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning and expertise. <br />
            Our current customer segment, at present, stands at 500+ colleges and 15000+ students, with new institutions coming in all the time. <br /><br /><br /><br />
           
            </div>
            </div>
        </div>
         </div>
         <div style={{position:"absolute", top:"1370px"}} ><Footer/></div>

        </>
    )
}
