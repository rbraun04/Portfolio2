import React, { Component } from 'react';
import UserList from '../pages/Users/UserList';

import API from '../utils/API';

class Genre extends Component {

  render() {
    return (
      <>
       <div id="content-6" class="content content--switch">
				<h2 class="content__title">Genres</h2>
				<div class="content__subtitle">Explore Entertainment</div>
		</div>
      </>
    )
  }

}

export default Genre;