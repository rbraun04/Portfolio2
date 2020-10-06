import React, {Component} from 'react';
import Carousel from './Carousel'
import Card from 'react-bootstrap/Card'
import imgCMS from "../components/images/imgCMS";



class Actors extends Component {
    constructor() {

        super();
        this.state = {
            rightPanelActive: false,
        }
    }



    render() {
         const { rightPanelActive } = this.state;
        return ( <>
            
            <div id="content-4" className = "content content--switch content--switch-current ">
				<h2 className="content__title">Web Development</h2>
                <div>
                    
               
                </div>
				
                <div className = "background2 row ">

                    <div className = "  col-md-3">
                <Card className = "bg-dark" style={{ width: '18rem', }} >
                <Card.Img variant="" src="https://rbraun04.github.io/Ryan-Braun-Artist-Portfolio/MagnemOpus%20copy.png" />
                <Card.Body className = "text-white">
                <Card.Title>Magnum Opus</Card.Title>
                <Card.Text>
                        <h6>Responsibilities: Front-End</h6>
                        This was the second group project of my coding bootcamp with UCLA extension.  This app is a ticket reservation system for event planning.  The databse is populated with local vendors for the users to choose from.
                </Card.Text>
                <a href = "https://vast-ocean-17405.herokuapp.com/" variant="info" size="sm">Deployed Website</a>
                <br></br>
                <a href = "https://github.com/rbraun04/MagnusOpus" variant="info" size="sm">Github Repository</a>
                </Card.Body>
                </Card>
                </div>
                <div className = "col-md-3">
                <Card className = "bg-dark"  style={{ width: '18rem' }}>
                <Card.Img variant="" src="https://rbraun04.github.io/Ryan-Braun-Artist-Portfolio/Trek.png" />
                <Card.Body className = "text-white">
                <Card.Title>Trek</Card.Title>
                <Card.Text>
                <h6>Responsibilities: Front-End</h6>
                        Trek was my first project in my coding bootcamp with UCLA extension.  We built an app that allows a user to search local hikes and locate a restaurant near that hike to complete a round trip trek!
                </Card.Text>
                <a href = "https://rbraun04.github.io/Trek/" variant="info" size="sm">Deployed Website</a>
                <br></br>
<a href = "https://github.com/rbraun04/Trek" variant="info" size="sm">Github Repository</a>
                </Card.Body>
                </Card>
                </div>
                <div className = "col-md-3">
                <Card className = "bg-dark"  style={{ width: '18rem' }}>
                <Card.Img variant="" src="https://rbraun04.github.io/Ryan-Braun-Artist-Portfolio/WorkDayScheduler.png" />
                <Card.Body className = "text-white">
                <Card.Title>Work Day Scheduler</Card.Title>
                <Card.Text>
                <h6>Responsibilities: Full-Stack</h6>
                        This app lets you plan your work day by adding notes to each hour and the color scheme alerts you of the time of day.
                </Card.Text>
                <a href = "https://rbraun04.github.io/Day-Scheduler/" variant="info" size="sm">Deployed Website</a>
                <br></br>
<a href = "https://github.com/rbraun04/Day-Scheduler" variant="info" size="sm">Github Repository</a>
                </Card.Body>
                </Card>
                </div>
                <div className = "col-md-3">
<Card className = "bg-dark"  style={{ width: '18rem' }}>
<Card.Img variant="" src="https://rbraun04.github.io/Ryan-Braun-Artist-Portfolio/Puppy.png" />
<Card.Body className = "text-white">
<Card.Title>Puppy Love</Card.Title>
<Card.Text>
<h6>Responsibilities: Front-End</h6>
This was my third group project in my coding bootcamp.  When you sign up for this app you asked your preferences of a the type fo dog you would like to interact with.  An API call is issued for a background check and then the user page is popualed with dogs based on your preferences.
</Card.Text>
<a href = "https://www.google.com/" variant="info" size="sm">Deployed Website</a>
<br></br>
<a href = "https://github.com/jdelintt/PuppyLove" variant="info" size="sm">Github Repository</a>
</Card.Body>
</Card>
</div>
                </div>
              

              
			</div>
            <div>
                
            </div>
            
            </>
        )
    }
}

export default Actors;