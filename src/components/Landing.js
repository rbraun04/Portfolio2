import React from "react";
import {Link} from "react-router-dom";

export default () => {
    return <><div className="message">To see the menu, please view on a larger screen.</div>
        <div className="content content--fixed">
            <header className="codrops-header">
            {/* <Link to="/test" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <a className="grim__item-title" url="/login">Login</a>
                    </div>
                </Link> */}
                {/* <button className="demo" href="index2.html">User Login</button> */}
                {/* <h1 className="codrops-header__title">Welcome</h1> */}
                </header>
        </div>
        <div id="content-1" className="content content--switch content--switch-current">
            <h2 className="content__title">Ryan Braun</h2>
            
        </div>
        </>
}