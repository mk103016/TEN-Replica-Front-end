import React,{useEffect} from 'react'
import Footer from './Footer'

export default function Forum() {
    useEffect(() => {
        document.title = "Forum | TEN"
      }, [])
    return (
        <>
            <div className="container">
                <div className="forum-box">
                   <div className="fo-ent">Entrepreneurship A-Z</div> 
                   <img className="search" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--W18wy6a2ieVL6AoUwTx7OwzuY1-ncqVeA&usqp=CAU" alt=""  />
                   <input type="text" className="fo-search" placeholder="Search" />
                   <div className="a-z">Entrepreneurship A-Z</div>
                   <div className="a-z-con">Share stories, ideas, pictures and more!</div>
                   <div className="fo-box2">
                       <hr />
                       <div className="log-head">Already Have an Account?</div>
                       <div className="log-con">Log in to access the forum.</div>
                       <button className="fo-log-in" type="button">Log In</button>

                       <div className="vl"></div>

                       <div className="log-head sign-head">Sign Up Today</div>
                       <div className="log-con sign-head">Join the forum to check out the posts and add your <br /> voice.</div>
                       <button className="fo-log-in fo-sign" type="button">Get Started</button>
                   </div>
                </div>
            </div>
            <div style={{position:"absolute", top:"820px"}} ><Footer/></div>
        </>
    )
}
