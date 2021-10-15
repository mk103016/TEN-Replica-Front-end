import React, {Component} from 'react'
import BlogItem from './BlogItem'
import { Link } from 'react-router-dom';

export default class Blog2 extends Component{
    
      blogs2 = [
          {
              "source":{"id" : "Blog7", "name":"blog7"},
              "imageUrl": "https://static.wixstatic.com/media/a27d24_a5a6dc9d5d174f969d24ff437889e80f~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_a5a6dc9d5d174f969d24ff437889e80f~mv2.webp",
              "editor": "RAMYA A",
              "title": "PEOPLE PREFER TO BUSSINESS WITH PEOPLE ,NOT WITH...",
              "profileImageUrl":"https://lh3.googleusercontent.com/a-/AOh14GgdlXPc32M5GKMndUscq7WlmhYoE-oABbru2XLhAg=s96-c",
              "date": "Nov 22, 2020",
              "seen": "16",
              "comment":"4",
              "left": "70px",
             "top":"340px",
             "heart":"0",
             "page":"2"
          },
          {
            "source":{"id" : "Blog8", "name":"blog8"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_1c3b1966311b445fbdab31f9f6ac839d~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_1c3b1966311b445fbdab31f9f6ac839d~mv2.webp",
            "editor": "malavika r",
            "title": "## LEARNED FROM YOUR FAILURE ##",
            "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
            "date": "Nov 20, 2020",
            "seen": "15",
            "comment":"0",
            "left": "380px",
            "top":"340px",
            "heart":"0",
            "page":"0"
          },
          {
            "source":{"id" : "Blog9", "name":"blog9"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_7265c9ae98a64ad69e3c3ede49cd0193~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_7265c9ae98a64ad69e3c3ede49cd0193~mv2.webp",
            "editor": "malavika r",
            "title": "*** FOCUS ON YOUR GOAL ***",
            "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
            "date": "Nov 20, 2020",
            "seen": "20",
            "comment":"0",
            "left": "685px",
            "top":"340px",
            "heart":"0",
            "page":"0"
          },
          {
            "source":{"id" : "Blog10", "name":"blo10"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_097e3f9604ea4426a75b1a3fbd2af0bd~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_097e3f9604ea4426a75b1a3fbd2af0bd~mv2.webp",
            "editor": "RAMYA A",
            "title": "*LAW OF ATTRACTION*-BUDHA",
            "profileImageUrl":"https://lh3.googleusercontent.com/a-/AOh14GgdlXPc32M5GKMndUscq7WlmhYoE-oABbru2XLhAg=s96-c",
            "date": "Nov 19, 2020",
            "seen": "16",
            "comment":"0",
            "left": "990px",
            "top":"340px",
            "heart":"1",
            "page":"2"
          },
          {
            "source":{"id" : "Blog11", "name":"blog11"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_b6462d9cbf064e5ea8cd6902b35cac27~mv2.jpg/v1/fill/w_407,h_306,fp_0.50_0.50,q_90/a27d24_b6462d9cbf064e5ea8cd6902b35cac27~mv2.webp",
            "editor": "RAMYA A",
            "title": "#DON'T WAIT FOR A PERFECT MOMENT,MAKE IT...",
            "profileImageUrl":"https://lh3.googleusercontent.com/a-/AOh14GgdlXPc32M5GKMndUscq7WlmhYoE-oABbru2XLhAg=s96-c",
            "date": "Nov 19, 2020",
            "seen": "20",
            "comment":"0",
            "left": "70px",
            "top":"880px",
            "heart":"1",
            "page":"2"
          },
          {
            "source":{"id" : "Blog12", "name":"blog12"},
            "imageUrl": "https://static.wixstatic.com/media/a27d24_0a522d0bf01545cc91b92674402770cf~mv2.png/v1/fill/w_407,h_306,fp_0.50_0.50,q_95/a27d24_0a522d0bf01545cc91b92674402770cf~mv2.webp",
            "editor": "malvika r",
            "title": "*** SUCCESS ***",
            "profileImageUrl":"https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg",
            "date": "Nov 14, 2020",
            "seen": "42",
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
            blogs2: this.blogs2,
            loading: false,
            
        }
    } 

    componentDidMount(){
        document.title = "Blogs | TEN | Page 2"
      }

      render(){
    return (
        <>
            <div className="blog-head">All posts</div> 
            {this.state.blogs2.map((element)=>{
               return <div key={element.title}>
                   <BlogItem heart={element.heart} left={element.left} top={element.top} title={element.title} editor={element.editor} imageUrl={element.imageUrl} profileImageUrl={element.profileImageUrl} date={element.date} seen={element.seen} comment={element.comment} />
                   </div> 
            })}
            <div className="container ">
                <Link className="blog-right" to="/blog">  &lt; Previous</Link>   
                <Link classname="blog-right" style={{position: "absolute",textDecoration: "none",color:"black",left:"700px",top:"1190px"}} to="/blog/page2">Next &gt;</Link>             
            </div>
           
        </>
    )
}
}
