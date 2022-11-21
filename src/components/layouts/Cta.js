import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <div className="container">
                <div className="cta-inner">
                    <div className="cat-img">
                        <div className="cat-shape shape-two">
                            <img src={process.env.PUBLIC_URL + "/assets/img/cta/cta-img-2.png"} alt="img" />
                        </div>
                    </div>
                    <div className="cta-text diff-bg">
                        <div className="row align-items-center justify-content-end">
                            <div className="col-lg-6 col-md-7 col-sm-10">
                                <div className="section-title pl-30 left-border">
                                    <span className="title-tag">GET ON SALE</span>
                                    <h2>GET ALL NEW MaskS AT 50% FLAT DISCOUNT.</h2>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2">
                                <div className="link-wrap text-center">
                                    <Link to="/contact" className="cat-link"><i className="fal fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cta;