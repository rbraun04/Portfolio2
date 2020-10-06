import React, { Component } from 'react';
import UserList from '../components/Users/UserList';
import Container from '../components/Container';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

const styles ={
  home: {
    height: "100%"
  }
}
const professions = ["Musician", "Dancer"];

class Home extends Component {
  state = {
    users: [],
    musicians: [],
    dancers: [],
    currentUser: {},
  }


  render() {
    return (
      <div style={styles.home}>
        <Jumbotron />
        <Container fluid>
          <div className="mt-4">
            <h2>Explore</h2>
            <hr className="my-4" />
          </div>
          {/** Show All User */}
          <UserList users={this.state.users} />

          <div className="mt-4">
            <h2>Musicians</h2>
            <hr className="my-4" />
          </div>
          {/** Show All Musicians */}
          <UserList users={this.state.musicians} />

          <div className="mt-4">
            <h2>Dancers</h2>
            <hr className="my-4" />
          </div>
          {/** Show All Dancers */}
          <UserList users={this.state.dancers} />
        </Container>
      </div>
    )
  }

}

export default Home;