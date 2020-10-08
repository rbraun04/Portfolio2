import React, {Component} from 'react';
import Carousel from './Carousel'
import UserList from '../components/Users/UserList';
import Container from '../components/Container';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';


const styles ={
    home: {
      height: "100%"
    }
  }
  
class Artists extends Component {
    state = {
        users: [],
        currentUser: {},
      }
    
      render() {
        return (
          <div style={styles.home}>
            <Container fluid>
              <div className="mt-4">
                <h2>Explore</h2>
                <hr className="my-4" />
              </div>
              <UserList users={this.state.users} />
              <div className="mt-4">
                <h2>Musicians</h2>
                <hr className="my-4" />
              </div>
              <UserList users={this.state.users} />
              <div className="mt-4">
                <h2>Dancers</h2>
                <hr className="my-4" />
              </div>
              <UserList users={this.state.users} />
            </Container>
          </div>
        )
      }
    
    }
export default Artists; 