import React, {Component} from 'react';
import Carousel from './Carousel'


class Broadway extends Component {
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
                <div> 
                    Here are all of the Broadway Actors
                    <Carousel />
                    
                    {/*  */}
                    
                </div>
            </div>
        );
    }
}
export default Broadway;