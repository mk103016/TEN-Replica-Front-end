import React,{Component} from 'react'

export default class BlogItem extends Component {
    render(){
        
    return (
        <>
           <div  style={{left:this.props.left, top:this.props.top}} className="blog-item-box">
                <img src={this.props.imageUrl} alt="" className="blog-img" />
                <img src={this.props.profileImageUrl} alt="" className="blog-profile-img" />
                <div className="blog-editor">{this.props.editor}</div>
                <div className="blog-date">{this.props.date}</div>
                <div className="blog-title">{this.props.title}</div>
                <img src="https://image.shutterstock.com/image-vector/eye-icon-illustration-260nw-1143555737.jpg" alt="" className="blog-eye-img" />
                <img style={{left:"70px"}} src="data:image/png;base64,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" alt="" className="blog-eye-img" />
                <img style={{left:"190px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYt5dEllQ1fgwKh9zyG8WW2bpSwxPH7AKiCg&usqp=CAU" alt="" className="blog-eye-img" />
                <div className="blog-seen">{this.props.seen}</div>
                <div className="blog-seen" style={{left:"100px"}}>{this.props.comment}</div>
                <div className="blog-seen" style={{left:"220px"}}>{this.props.heart}</div>

            </div>              
        </>
    )
}
}
