import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Infobox extends Component {
    render() {
        return (
            <section className="service-style-3 pt-120 pb-120">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <h4>Mask Production</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                <Link to="/services">Read More
            <i className="fal fa-long-arrow-right" />
                                </Link>
                                <span className="count">01</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-image" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/tile-gallery/05.jpg)" }}>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <h4>Medical Research</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                <Link to="/services">Read More
            <i className="fal fa-long-arrow-right" />
                                </Link>
                                <span className="count">02</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-image" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/tile-gallery/06.jpg)" }}>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-yellow">
                                <h4>Certified Masks </h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                <Link to="/services">Read More
            <i className="fal fa-long-arrow-right" />
                                </Link>
                                <span className="count">03</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-image" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/tile-gallery/07.jpg)" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Infobox;