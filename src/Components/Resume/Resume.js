import React from 'react';
import './resume.css';
import Experience from './Experience';
import Education from './Education';



function Resume() {
    return (
        <section className="resume py-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="sec-title">
                            <h2>My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Experience />
                    </div>
                </div>
                <div className="row">
                    <Education />
                </div>
            </div>
        </section>
    )
}

export default Resume