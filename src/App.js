import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import OnlineCourses from './Components/OnlineCourses';
import Hiring from './Components/Hiring';
import Certification from './Components/Certification';
import Hackathon from './Components/Hackathon';
import Testimonials from './Components/Testimonials';
import MembershipRegistration from './Components/MembershipRegistration';
import CampusAmbassadorProgram from './Components/CampusAmbassadorProgram';
import AlumniTeam from './Components/AlumniTeam';
import Complaints from './Components/Complaints';
import Mentorship from './Components/Mentorship';
import Forum from './Components/Forum';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Blog2 from './Components/Blog2';
//import Footer from './Components/Footer';
import ChatIcon from './Components/ChatIcon';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return(
    <>
    <Router>
    <Navbar/>
    
    <Switch>          
          <Route exact path="/onlineCourses">
            <OnlineCourses />
          </Route>
          <Route exact path="/hiring">
            <Hiring/>
          </Route>
          <Route exact path="/certification">
            <Certification />
          </Route>
          <Route exact path="/hackathon">
            <Hackathon/>
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
          <Route exact path="/membershipRegistration">
            <MembershipRegistration />
          </Route>
          <Route exact path="/campusAmbassadorProgram">
            <CampusAmbassadorProgram />
          </Route>
          <Route exact path="/alumniTeam">
            <AlumniTeam />
          </Route>
          <Route exact path="/complaints">
            <Complaints />
          </Route>
          <Route exact path="/mentorship">
            <Mentorship />
          </Route>
          <Route exact path="/forum">
            <Forum />
          </Route>
          <Route exact path="/contactUs" >
            < ContactUs/>            
          </Route>
          <Route exact path="/blog" >
            < Blog/>   
          </Route>
          <Route exact path="/blog/page2" >
            < Blog2/>            
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutUs">
            <AboutUs />
           
          </Route>
    </Switch>
    <ChatIcon/>
    </Router>
    </>
  )
}

export default App;
