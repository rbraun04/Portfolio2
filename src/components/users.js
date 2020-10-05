import React, {Component} from 'react';



class Users extends Component {
    render() {
        return (
            <div id="users" className="content content--switch">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">First Name</h5>
                <p className="card-text">About</p>
            </div>
                <ul className="list-group list-group-flush">Skills
                    <li className="list-group-item">Rockpaperscissors</li>
                    <li className="list-group-item">Arguing</li>
                    <li className="list-group-item">Complaining</li>
                </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
                <form>
                    <div className="form-row">
                        <div className="col"></div>
                        <input type="text" className="form-control" placeholder="First name"></input>
                    </div>
                    <div className="col">Name
                        <input type="text" className="form-control" placeholder="Last name"></input>
                    </div>
                </form>
                <button>submit request</button>
			</div>
            </div>
        )
    }
}

export default Users;