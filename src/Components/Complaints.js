import React,{useEffect} from 'react'
import Footer from './Footer'

export default function Complaints() {
  useEffect(() => {
    document.title = "Complaints | TEN"
  }, [])
    return (
        <>
          <br /><br />
          <div className="com">COMPLAINTS</div>  
          <img  className="com-img" src="https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/2014/03/vehicle-complaints1_11322597.png?auto=format&fit=fill&fill=blur&w=1200&h=630" alt="" />
          <br /><br /><br />
          <div className="com-con">For any complaints regarding The Entrepreneurship Network(TEN) <br />please contact at our email address: <br />hr.contact.ten@gmail.com</div>
          <div style={{position:"absolute",top:"850px"}} ><Footer/></div>
        </>
    )
}
