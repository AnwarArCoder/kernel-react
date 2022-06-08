import React from 'react';
import './header.css'

function Header() {
  return (
    <section className="header" id="home">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="banner display-table">
                        <div className="head-info table-cell text-center">
                            <div className="top-handline">I Create Website For Customers Of All Sizes</div>
                            <h1 className="handline">I'm Jack Smith Independent Web Designer</h1>
                            <p>I'm a web designer, I build clean, appealing, and functional interfaces which comply with the latest web standards.</p>
                            <div className="buttons">
                                <a href="#about" className="move-section btn-1">Let's Start</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header