import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'



class Dancers extends Component {
    render() {
        return (
            <div id="content-2" className="content content--switch">
				<h2 className="content__title text-danger">Contact</h2>
                
				<div ></div>
                <div className = "background2 row ">
                <Card className="text-center bg-dark text-white">

  <Card.Body>
    <Card.Title>Ryan Braun</Card.Title>
    <Card.Text>
     The best way to reach me is by contacting me via LinkedIn!</Card.Text>
    <a href = "http://www.linkedin.com/in/ryangbraun" variant="primary">LinkedIn</a>
  </Card.Body>
</Card>


                </div>
                
			</div>
        )
    }
}

export default Dancers;