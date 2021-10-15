import React,{useEffect} from 'react'
import Footer from './Footer'

export default function Mentorship() {
  useEffect(() => {
    document.title = "Mentorship | TEN"
  }, [])

    //var slideIndex = 1;
    //showSlides(slideIndex);

    //function plusSlides(n) {
      //  showSlides(slideIndex += n);
      //}
    
      //function currentSlide(n) {
        //showSlides(slideIndex = n);
      //}

      //function showSlides(n) {
        //var i;
        //var slides = document.getElementsByclassName=("mySlides");
        //var dots = document.getElementsByclassName=("dot");
        //if (n > slides.length) {slideIndex = 1}
        //if (n < 1) {slideIndex = slides.length}
        //for (i = 0; i < slides.length; i++) {
          //  slides[i].style.display = "none";
        //}
        //for (i = 0; i < dots.length; i++) {
          //  dots[i].className=  dots[i].className.replace(" active", "");
        //}
        //slides[slideIndex-1].style.display = "block";
        //dots[slideIndex-1].className += " active";
      //}
    return (
        <>
            
            <div className="mentor">Mentorship</div>           
            <img src="https://static.wixstatic.com/media/035244_04cbb98f178e46efb847ad15f5ca060b.jpg/v1/fill/w_1895,h_1023,al_c,q_85,usm_0.66_1.00_0.01/035244_04cbb98f178e46efb847ad15f5ca060b.webp" alt="" className="men-img1" />
            <div className="men-con12">
            “The delicate balance of mentoring someone is not creating them in your own image, but giving them the opportunity to create themselves.”
            </div>
            <div className="mem-ste">
            — Steven Spielberg
            </div>                 
            
            <div className="men-purp">
                <div className="instant">
                GET INSTANT ACCESS TO THESE EXCLUSIVE LESSONS AND 100's MORE...
                </div>
                <img src="https://static.wixstatic.com/media/c4ea0b_0c43226c26a8442bbb1ad9533b4d2103~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01/book-stack.webp" alt="" className="men-books" />
                <div className="purp-con">
                The new way of learning.
                <br /><br />
                If you're like most of our members you believe in expanding your knowledge and leveling up your skillsets, but you just don't have the time to read the books that you know will get you there.
                <br /><br />
                We engineered a new, fun and engaging way to learn directly from the highest level authors and thinkers...
                </div>
                <a href="#car-reg-bottom">
                <button className="try-men" type="button">TRY TEN MENTORSHIP @ INR 500</button>
                </a>
            </div>
            <img src="https://static.wixstatic.com/media/c4ea0b_a92eedf6bca84700ac023a97f650f20d~mv2.jpg/v1/fill/w_1467,h_900,al_c,q_85/c4ea0b_a92eedf6bca84700ac023a97f650f20d~mv2.webp" alt="" className="men-purp" />
            <div className="why-ten">
                WHY TEN?
            </div>
                <div className="men-trans">
                    <div className="men-trans-con">
                         feature only the Most Powerful &emsp;&emsp;You will be taught directly by&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;You'll have acess to exclusive video courses,<br />
                         ons from handpicked books &emsp;&emsp;&emsp;the authors, CEOs and experts themselves &ensp;audio lessons,workbooks,and cheat sheets <br />
                         are Guaranteed to immediately&emsp;&emsp;for optimal and efficient learning...&emsp;&emsp;&emsp;that you can use in any combination to best <br />
                         improve your financial and social life &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;suit your learning references...
                    </div>
                    <a href="#car-reg-bottom">
                    <button className="try-men try-men2" type="button">TRY TEN MENTORSHIP @ INR 500</button>
                    </a>
                </div>
          <div className="black-reg-box car-for" id="car-reg-bottom">
                <div className="purp-head">
                Career Forum Registration
                </div>
                <hr />
                <div className="car-con ">
                If you would like to take career counselling from TEN, please fill in your details in the form bellow and you will be automatically registered.
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

          <div style={{position:"relative", bottom:"-1410px"}} ><Footer/></div>               
            
           {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next" onclick="plusSlides(1)">&#10095;</a>
            
            <div style="text-align:center">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
    </div>*/}
        </>
    )
}
