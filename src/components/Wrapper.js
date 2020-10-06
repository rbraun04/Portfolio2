import React, {useEffect} from "react";
import {Link} from "react-router-dom";
export default ({children}) => {
    useEffect(()=> {
        document.body.classList.add('render');
        const navs = Array.from(document.getElementsByClassName("grim__item-title"));
        const navigate = (linkEl) => {
            console.log(linkEl)
                document.body.classList.remove('render');
                   setTimeout(()=> window.location.replace(linkEl.getAttribute("url")), 1500)
            };
        navs.forEach(a => a.addEventListener('click', (ev) => {
        console.log("YOU CLICKED A NAV ITEM")
        ev.preventDefault();
        navigate(ev.target);
            }));             
        }, [children])
        return (
            <>
        <main>
        {children}
        <a className="menu-trigger" style={{position:"fixed",bottom:"10px",left:"10px"}}>+ explore</a>
        <nav className="grim">
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
                        <button className="menu-trigger menu-trigger--close">-Close-</button>
                    </div>
                </div>
            </div>
            <div className="grim__item">
                <div className="grim__item-bg grim__item-bg--4"></div>
                <Link to="/test" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        
                    </div>
                </Link>
            </div>
            <div className="grim__item">
                <div className="grim__item-bg grim__item-bg--5"></div>
                <Link to="/test" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <h3 className="grim__item-title" url="/">Home</h3>
                    </div>
                </Link>
            </div>
            <div className="grim__item">
                <div className="grim__item-bg grim__item-bg--6"></div>
                <div className="grim__item-img grim__item-img--1" ></div>
                <Link to="/test" className="grim__link grim__item-content ">
                    <div className="grim__item-inner">
                        <a className="grim__item-title " url="/dancers">Contact</a>
                        <span className="grim__item-desc"></span>
                    </div>
                </Link>
                {/* <a href="#content-2" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <h3 className="grim__item-title">Dancers</h3>
          <span className="grim__item-desc">Choreography</span>
                    </div>
                </a> */}
                <div className="grim__item-bg grim__item-bg-cover grim__item-bg--6"></div>
            </div>
            <div className="grim__item">
                <div className="grim__item-bg grim__item-bg--7"></div>
                <div className="grim__item-img grim__item-img--2" ></div>
                <Link to="/test" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <a className="grim__item-title" url="/broadway">Philanthropy</a>
                        <span className="grim__item-desc">+ GMCLA - AidsLifeCycle +</span>
                    </div>
                </Link>
                {/* <a href="#content-3" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <h3 className="grim__item-title">Broadway</h3>
                        <span className="grim__item-desc">Belters</span>
                    </div>
                </a> */}
                <div className="grim__item-bg grim__item-bg-cover grim__item-bg--7"></div>
            </div>
            <div className="grim__item">
                <div className="grim__item-bg grim__item-bg--8"></div>
                <div className="grim__item-img grim__item-img--3" ></div>
                <Link to="/test" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <a className="grim__item-title" url="/actors">Developer</a>
                        <span className="grim__item-desc">+ Portfolio - Resume +</span>
                    </div>
                </Link>

                {/* <a href="#content-4" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <h3 className="grim__item-title">Actors</h3>
                        <span className="grim__item-desc">Pick a scene</span>
                    </div>
                </a> */}
                <div className="grim__item-bg grim__item-bg-cover grim__item-bg--8"></div>
            </div>
            <div className="grim__item">
                <div className="grim__item-bg grim__item-bg--9"></div>
                <div className="grim__item-img grim__item-img--4"></div>
                <Link to="/test" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <a className="grim__item-title" url="/musicians">Press</a>
                        <span className="grim__item-desc"></span>
                    </div>
                </Link>
                {/* <a href="#content-5" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <h3 className="grim__item-title">Musicians</h3>
                        <span className="grim__item-desc">Who's Who</span>
                    </div>
                </a> */}
                <div className="grim__item-bg grim__item-bg-cover grim__item-bg--9"></div>
            </div>
            <div className="grim__item">
                <div className="grim__item-bg grim__item-bg--10"></div>
                <div className="grim__item-img grim__item-img--5" ></div>
                <Link to="/test" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <a className="grim__item-title" url="/artists">Stage</a>
                        <span className="grim__item-desc">+ cello - piano - voice - dance +</span>
                    </div>
                </Link>
                {/* <a href="#content-6" className="grim__link grim__item-content">
                    <div className="grim__item-inner">
                        <h3 className="grim__item-title">Browse All Artists</h3>
                        <span className="grim__item-desc">Explore Entertainment</span>
                    </div>
                </a> */}
                <div className="grim__item-bg grim__item-bg-cover grim__item-bg--10"></div>
            </div>
            </nav>
            </main>
    </>
    )
}