import React, { useEffect, useState } from 'react';
import './Navbar.css';

//https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
//https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
//https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
const Navbar = () => {
    const [handleShow, setHandleShow] = useState(false)
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setHandleShow(true)
            }else {
                setHandleShow(false)
            }
        });
        
    }, [])
    return (
      <div className={`nav ${handleShow && "active"}`}>
        <img
          src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          className="navbar-logo"
          alt="netflix-logo"
        />
        <h1 className="abater">🤔</h1>
      </div>
    );
};

export default Navbar;