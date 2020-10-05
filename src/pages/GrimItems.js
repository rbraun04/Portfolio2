import React from 'react'
// import Ryan from '../assets/1.jpg'

// const background1 = require ("../assets/")

// const styles = {
//     background1:  {
//         backgroundImage: (Ryan)
//     }
// }

const GrimItems = ({ users }) => {
  
  return ( <>
    <div className="grim__item">
    <div className="grim__item-bg grim__item-bg--1"></div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--2"></div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--3"></div>
    <div className="grim__item-content">
        <div className="grim__item-inner">
            <button className="menu-trigger menu-trigger--close">- close</button>
        </div>
    </div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--4"></div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--5"></div>
    <a href="#content-1" className="grim__link grim__item-content">
        <div className="grim__item-inner">
            <h3 className="grim__item-title">Home</h3>
        </div>
    </a>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--6"></div>
    <div className="grim__item-img grim__item-img--1 background1" ></div>
    <a href="#content-2" className="grim__link grim__item-content">
        <div className="grim__item-inner">
            <h3 className="grim__item-title">Dancers</h3>
            <span className="grim__item-desc">Choreography</span>
        </div>
    </a>
    <div className="grim__item-bg grim__item-bg-cover grim__item-bg--6"></div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--7"></div>
    <div className="grim__item-img grim__item-img--2" ></div>
    <a href="#content-3" className="grim__link grim__item-content">
        <div className="grim__item-inner">
            <h3 className="grim__item-title">Broadway</h3>
            <span className="grim__item-desc">Belters</span>
        </div>
    </a>
    <div className="grim__item-bg grim__item-bg-cover grim__item-bg--7"></div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--8"></div>
    <div className="grim__item-img grim__item-img--3" ></div>
    <a href="#content-4" className="grim__link grim__item-content">
        <div className="grim__item-inner">
            <h3 className="grim__item-title">Actors</h3>
            <span className="grim__item-desc">Pick a scene</span>
        </div>
    </a>
    <div className="grim__item-bg grim__item-bg-cover grim__item-bg--8"></div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--9"></div>
    <div className="grim__item-img grim__item-img--4"></div>
    <a href="#content-5" className="grim__link grim__item-content">
        <div className="grim__item-inner">
            <h3 className="grim__item-title">Musicians</h3>
            <span className="grim__item-desc">Who's Who</span>
        </div>
    </a>
    <div className="grim__item-bg grim__item-bg-cover grim__item-bg--9"></div>
</div>
<div className="grim__item">
    <div className="grim__item-bg grim__item-bg--10"></div>
    <div className="grim__item-img grim__item-img--5" ></div>
    <a href="#content-6" className="grim__link grim__item-content">
        <div className="grim__item-inner">
            <h3 className="grim__item-title">Genres</h3>
            <span className="grim__item-desc">Explore Entertainment</span>
        </div>
    </a>
    <div className="grim__item-bg grim__item-bg-cover grim__item-bg--10"></div>
</div>
</>
  )
}

export default GrimItems;