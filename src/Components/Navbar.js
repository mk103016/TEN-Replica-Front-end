import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>

          <div className="nav-box">
          <img src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_150,h_120,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="" className="nav-logo" />
            <div className="nav-ten">
              <span style={{color:'black'}}>T</span>he 
              <br />
              <span style={{color:'black'}}>E</span>ntrepreneurship
              <br />
              <span style={{color:'black'}}>N</span>etwork
            </div>            
              <div className="nav-tags">
                <Link className="nav-links" style={{color:'#E81038'}} to="/"> Home </Link>
              </div>
              <div className="nav-tags online-nav-tag">
              <Link className="nav-links" style={{color:'black'}} to="/onlineCourses"> Online Courses </Link>
              </div>
              <div className="nav-tags hire-nav-tag">
              <Link className="nav-links" style={{color:'black'}} to="/hiring"> We're Hiring </Link>
              </div>
            <div className="nav-tags more-nav-tag dropdown" >
                <a style={{color:"black"}} className="nav-link" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 More
                </a>                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/certification">Certification</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/alumniTeam">Alumni Team</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/forum">Forum</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/hackathon">Hackathon</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/membershipRegistration">Membership Registration</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/campusAmbassadorProgram">Campus Ambassador Program</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/mentorship">Mentorship</Link></li>
                <li><hr className="dropdown-divider"/></li>                
                <li><Link className="dropdown-item" to="/testimonials">Testimonials</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/contactUs">Contact Us</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/complaints">Complaints</Link></li>
                </ul>
          </div>
           <a href="https://www.entrepreneurshipnetwork.net/cart-page"> <button className="cart-button" type="button"><img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" alt="" className="cart-img" /></button></a>
            <button className="nav-login"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADz8/Pn5+eamprV1dXFxcWjo6Pk5OT5+fnh4eH8/PyIiIgaGhpxcXGzs7NNTU28vLwMDAxgYGA2Njbt7e0TExNra2vU1NRSUlJ/f3+QkJDb29udnZ3BwcGqqqpFRUVBQUEpKSmLi4svLy9lZWWAgIBaWloiIiI6OjpWkHlpAAAKI0lEQVR4nNVd2WLiOBB0wEC4zH2TAFlImP//wR1zxIAlW1JVW5p6mLcRqljus9SOInHUG6NWnCwm0/747YpxfzpZJHFr1KjL/7wkastBb/j1VozzsDdY1nxv1QHbXTIv4faIebJr+N6yBRrxyoJchmH8L7CsDU5O7O44DYI+sbPWHqJ3xaE1801EjdqOQe9Gchfek2xihzOPSdM3pUfU4nH5lu0Rh/Igt4kEvQuSrW9yf7EcivFLMfR9WJtTUX4ppj45VsDPK8ctzzuUYe/jfZyx3UMxTpVHAZtK+aXYVMqvKeL/SjCu7nWsTTzwSzGpKAQYeOKXYlABv7Zb7sfCSvwxfnrll2IkS1AuBDVHIsiv3vfN7oK+WIVu5JvaL4QMzto3rwesBfi1q4tCTbBvswnWbaqfVWBOfhmXvgkpsGQS9BnG6EG0Ny3fXDRosQhWnymZgpRRheQlXkHxGiETpFAMmyCBYugEYYrhGpkMkLkJ1U08A3AaYTr6PJxdf4ihmhqOAVydvpHzcLFIFovhmb6yUxjeZmYTw82o81hDqnVGG2ZJa+6STNHywalWYtGIaa2dvT1BkiPsx8UHqB6Taj/WbpFjRlcmhfjmD+W3LA0qxcpMOoa/1qG0CeysDeHo7E35XTgS3vq+DUFC4de2NE0oVVqUivFfS7qWBKOoi/9ZP01/q1bdTz0B74mYtm1QV3x07UjPjuAvr8x+B3UUE0d+KVBxgJHLQM9oDyAYRT3w103OKeibYohgFMXYzxscoCb2Cx8gwSj6wDZQHkVhKgtGAROrnIxll+e0ZzHHWPJHnkGLGxrrUmByx2JfhVlr+0BGjS60i1PR0ltoaZ68Tm4fUISPm9EMkM/Y69eFPMWBSDCKDshW9B4Dqpq8Uxm+I1uZ6laFHuF/VIJg+KZ7iNAjZNnROyB7qnmI0CPckQlG0Q7ZjroIjvjZ0ljJAQjDoWpByAfRNAMPgBpfKp8IRYMCBLE3UREhQ4kvlvXqAJnTfCoMRRE2pVFzdJAt5TNxZLU/IgQx95WzfZCrkLAzKSBb8+r1oeoMN2DLAIVuL0kUZGesGgZWgNonz7YGCiC+xRh+I9t6DrMOyFJy9wOgBspTOoeVZ+SulfH2hSmDxAhiPuzJxB+QhZRRLglQ1e3hmGKtCombAXdgeonMmmLdJmYF6hVYiT/rRGFVUsmrVlg3OnP60DIGvRB3gH2i+zINbBnJoTLg1u55MNiyk0mdrsCK378pFNi3l4q7U0Cxd9YqwlYJmeHtRQTPuugphdL8t/uLCOUVb0Fbmlt+gWqRAvYWt5IbqgUO1+PfknNY4xVu1PZ2DU1hRX64kffbtYEBq4GDzZ5SpME3qrMKNwNO0WP8mYKtYqRID1jZ+M1yBFqJuuArIhwEob5MCqiaeAVFlR9oRfiKOhwXXVeRARp3p2hQxnkE2Zm5YURZRaq79oewtxaa4F8RYIf0jpgzNSjALvcdSbRgLCMT1lB2tkCF6zdI2Bo0M79iEqGXOK4ITTGUYcpwqikCU31l6IPa/AxBKfceMCadBb76kjbNgcaQXDblXZXnMeQGNrzJYjyG1IoUXIHKQGQYzG2EZzAZ8uwpc8QtlSGr6kYdkUr9c5FudlHnGo1ZMc0N/m/nvaKPXUHIA71CSp9rNCXlFhlQiuzBTSdSfvgAjCIp3s6wEJgMjLyLdIJ/jR+lTvMM95qGwOitWGRgmaukVmK2WEtm/LFbS1FkeNqIUvPOw8X1y4yabgjMLLvAnqLQLO06q+CTQ+GN6uoIpnVOvH+oht2IE6l5/Wn/UOxrRj8WBFHdjBapso1SO9eu7pngxTcLDrg0zRcFB/anWgzJCZeGMSppJp0KqegOn3ulw7e5SONdaprvRa4vNDF/Y/e9lJpAgHyXGIh8d8SltDjgO65r4MHPWOaufZom23VdN8KOTL8QBdGWm5HfSrjUNQ+ooLb2H3E3tzWJ5ckV46MT3R3L+N1jDpoVO9Hq+iNOa/ruj0kv4oLaX2syxDS/InvCWuYDZ43xiQ/F/l0L/1jjH5ErCagfy3JUOPiW+qRdF5NfZtsCQ9M1W6XwgA7SdXiIGw/AMmfhT767lzsPlFUExw3cMXO1qo9CLXfFOPWzUjo4Ouyn5O3gtsaP4Bv4CKe+/vOIPDe7jDcLTeHybdDnBMfJmlZyQu+wj8dfMnD7RulXxV9Zti1XvZakret5rGms5rB8GXNZnKUmQ/JzpzrMbFQVecWrnUWWuyZThLZFgJO3gla2pjoj+oKD8RYVlT6LkpvUDRIDmGoWVW+R+YvskaAxRWW1wbSS5+2IXmEUpao7JoYNDD9GJkPXpG6sCUaMLNWiWj4KGNhE3SBhE6+/r5CKDuXSA23NtvwhnqtkokXZo9DOgjZ4iBXHojqUZOwFZfcyUyw5AsMKhd2NfcF/LPGJpM/vMlBkUAsr74WVU8nhCbYosDbFSp7Cgo1dU1cY+hpvia0oEFkH8xJeoXsVS18lbZ7oIyMsguZyW/lNSK3HqGDTdlDv1OCkaSo2gZ3RFKp8z0RNpw77bKWGVaCt2KeRNVRaqaDs6B35nRo2wRTVV69Jrx6v2zQtAObP6VF0n87IScWMT1pOzhpQuPaAXPxt8WHJnJVy+yilLHLPwcpj50QCwm1QB+QUJHaDgPKBreT8RxfkB59YzgHK90Ekh3jaIz9+yFpNl1dBSM1KckH+jDlc08mXT8N5ivkn6JK7tvPyuVDexfw7OG+7rKNIoyvt+mqh0OE5vkGKIngIflFxvcb5L6+Iwf0HqIpKIiA6U6wmOa3UBIprC9D0H0XZZuj0UpPQVeQ94MQRxa2ouT+v8a6QR8Ojf1QXv6TElmVQ5eaEZp9KquOn7qaqy1C6mSqK5+qdf0cliiZNp1IO/Km6161Uw9DGGil1fdMqH2NH2b0nDolT39Ktrrah7jVQAyx1221eTZm4qb5CwxtLdcFMffnhR74pPFMX4c/8X9ZoWL9lZcJdzUXslcTP6jSsklZVN7eNPcPwBu1UAKmvI2gFCWJJ3Ex7oyzmh+NtrR70KPny62/prMnfVtdf7ha+4VEguVnxzs5ngTRf3EO1izTvPUac0ymS5U+qyE4LRfPHD+y01j8KpWeS37R5QLtYTjzduEYb27hYWbeorrywLLveuRjY2rvZoEyGfa62llk+QnWetLZmf/N2Y5eUXzSQ/CSREjUj5ftXEo86ep7tzugjMZoVkfgQEnTMb1sdJ+u4NWgul8vGtvH33+agFa8n5vcKV776CUvePOMi7H02Eyrg6JVfiobcfKAUP775pRCbD0QPdt3RbuHjD/Lot3z2D3JYsicVJSEcz2e0B7wpMKtBUI8vQ41CcrgLUiZ4R/szgSaEJ6NAn94TOi23AdM/rVCkECboDNY2Y4KO68G/xO6O7na0mZTdpTpONiPDHCRY1LbN3UcvOQ2n53n6jo7n5+nwlPQ+ds1tBTblf1QnqNgg2SAFAAAAAElFTkSuQmCC" alt="" className="nav-login-img" />&emsp;Log In</button>
            <input type="text" className="nav-search" placeholder="Search Here..."/>
          </div>















        {/*    The
            <br/>
            Entrepreneurship <br/> Network
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
             <a className="navbar-brand" href="/"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Online Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">We're Hiring</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Blog</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Certification</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Alumni Team</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Forum</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Hackathon</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Membership Registration</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Campus Ambassador Program</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Mentorship</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Social Media</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Testimonials</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Contacts</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Complaints</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search here..." className="text-light bg-dark" />
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
        </nav>*/}
           

        </>
    )
}

