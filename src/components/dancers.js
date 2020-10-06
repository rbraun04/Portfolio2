import React, {Component} from 'react';
import Carousel from './Carousel'
import Card from 'react-bootstrap/Card'
import { Instagram } from 'react-feather'
import { Linkedin } from 'react-feather'


  
class Dancers extends Component {
    constructor() {

        super();
        this.state = {
            rightPanelActive: false,
        }
    }



    render() {
         const { rightPanelActive } = this.state;
        return (
            <div className="App">
                 <div id="content-2" className="content content--switch content--switch-current">
				<h2 className="content__title text-danger">Contact</h2>
                
				<div ></div>
                <div className = "background2 row ">
                <Card className="text-center bg-dark text-white">

  <Card.Body>
    <Card.Title>Ryan Braun</Card.Title>
    <Card.Text>
     The best way to reach me is by contacting me via LinkedIn!</Card.Text>
    <a href = "http://www.linkedin.com/in/ryangbraun" variant="primary">LinkedIn</a>
    <div class = "row">
        <a href = "http://www.google.com/>">
           <Instagram/> </a>
           <Linkedin href = "http://www.linkedin.com/in/ryangbraun"/>

    </div>
  </Card.Body>
</Card>

    




                </div>
                
			</div>
            </div>
        );
    }
}

export default Dancers;