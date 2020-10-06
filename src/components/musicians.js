import React, {Component} from 'react';
import Carousel from './Carousel/index';



class Musicians extends Component {
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
                    Here Are All of the Musicians:
                    <Carousel/>
                    {/*  */}
                    
                </div>
            </div>
        );
    }
}

export default Musicians;