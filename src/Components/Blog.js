import React, {Component} from 'react'
import BlogItem from './BlogItem'
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default class Blog extends Component{
    
      blogs = [
          {
              "source":{"id" : "Blog1", "name":"blog1"},
              "imageUrl": "https://static.wixstatic.com/media/a27d24_45c270689cf04f7ab8f583162f941c85~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_45c270689cf04f7ab8f583162f941c85~mv2.webp",
              "editor": "malavika r",
              "title": "TAKE ACTION IS A WAY TO SUCCESS",
              "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
              "date": "Nov 28, 2020",
              "seen": "116",
              "comment":"0",
              "left": "70px",
             "top":"340px",
             "heart":"3",
             "page":"1"
          },
          {
            "source":{"id" : "Blog2", "name":"blog2"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_ce5b98dd2949443ab86d124f96f8f8a3~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_ce5b98dd2949443ab86d124f96f8f8a3~mv2.webp",
            "editor": "malavika r",
            "title": "**BE A STRONG WOMAN**",
            "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
            "date": "Nov 28, 2020",
            "seen": "56",
            "comment":"1",
            "left": "380px",
            "top":"340px",
            "heart":"3",
            "page":"1"
          },
          {
            "source":{"id" : "Blog3", "name":"blog3"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_d6ccc31c37e44bc6af8fe87e23139158~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_d6ccc31c37e44bc6af8fe87e23139158~mv2.webp",
            "editor": "malavika r",
            "title": "**THINK POSITIVE**",
            "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
            "date": "Nov 28, 2020",
            "seen": "33",
            "comment":"0",
            "left": "685px",
            "top":"340px",
            "heart":"2",
            "page":"1"
          },
          {
            "source":{"id" : "Blog4", "name":"blog4"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_6123ea2eb79a4b93834eb2b534131540~mv2.png/v1/fill/w_407,h_306,fp_0.50_0.50,q_95/a27d24_6123ea2eb79a4b93834eb2b534131540~mv2.webp",
            "editor": "malavika r",
            "title": "##DON'T FEAR BE BOLD##",
            "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
            "date": "Nov 28, 2020",
            "seen": "24",
            "comment":"1",
            "left": "990px",
            "top":"340px",
            "heart":"2",
            "page":"1"
          },
          {
            "source":{"id" : "Blog5", "name":"blog5"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_ee6383d88fd44477a7205caab3dbf18f~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_ee6383d88fd44477a7205caab3dbf18f~mv2.webp",
            "editor": "malavika r",
            "title": "**BE A STRONG WOMAN**",
            "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
            "date": "Nov 25, 2020",
            "seen": "43",
            "comment":"0",
            "left": "70px",
            "top":"880px",
            "heart":"0",
            "page":"1"
          },
          {
            "source":{"id" : "Blog6", "name":"blog6"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_96e57de8ea134d4a80ee50e8583a7230~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_96e57de8ea134d4a80ee50e8583a7230~mv2.webp",
            "editor": "RAMYA A",
            "title": "#IT'S NOT ABOUT BEING THE BEST,IT'S ABOUT BEING...",
            "profileImageUrl":"https://lh3.googleusercontent.com/a-/AOh14GgdlXPc32M5GKMndUscq7WlmhYoE-oABbru2XLhAg=s96-c",
            "date": "Nov 22, 2020",
            "seen": "27",
            "comment":"0",
            "left": "380px",
            "top":"880px",
            "heart":"1",
            "page":"1"
          }
          
      ]
      constructor(){
        super();
        this.state={
            blogs: this.blogs,
            loading: false,
            
        }
    } 

    componentDidMount(){
        document.title = "Blogs | TEN"
      }

      render(){
    return (
        <>
            <div className="blog-head">All posts</div> 
            {this.state.blogs.map((element)=>{
               return <div key={element.title}>
                   <BlogItem heart={element.heart} left={element.left} top={element.top} title={element.title} editor={element.editor} imageUrl={element.imageUrl} profileImageUrl={element.profileImageUrl} date={element.date} seen={element.seen} comment={element.comment} />
                   </div> 
            })}
            <div className="container ">
            <Link className="blog-right" to="/blog">  &lt; Previous</Link> 
            <Link classname="blog-right" style={{position: "absolute", left:"700px",textDecoration:"none",color:"black", top:"1190px"}} to="/blog/page2">Next &gt;</Link>
            </div>
            <div style={{position:"relative",top:"1220px"}} ><Footer/></div>
           
        </>
    )
}
}
