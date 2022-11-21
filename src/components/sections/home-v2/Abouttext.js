import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import blocks from '../../../data/blocks.json';

function Abouttext(props) {
    return (
        <Fragment>
            <section className="about-section style-2 pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-tile-gallery">
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/01.jpg"} alt="img" className="image-one" />
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/05.png"} alt="img" className="image-two" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text pl-25">
                                <div className="section-title mb-40 left-border">
                                    <span className="title-tag">About us</span>
                                    <h2>WE HAVE 25+ YEARS OF EXPERIENCE.</h2>
                                </div>
                                <p className="mb-3">One of America’s Largest Mask Retailer, Perfumania specializes in the sale of genuine designer masks and related products at discounted prices With over 110 discount mask retail stores throughout the United States, Perfumania offers a wide selection of high-quality products at substantial savings, serviced by our dedicated associates offering superior customer service.</p>
                                <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className="about-features mt-30">
                                    {blocks.map((item, i) => (
                                        <div className="feature-item d-flex" key={i}>
                                            <span className="icon-box">
                                                <i className={item.icon} />
                                            </span>
                                            <div className="about-feature">
                                                <h5>{item.value}+</h5>
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="about-links mt-30">
                                    <Link to="/about" className="main-btn btn-filled">Learn More</Link>
                                    <Link to="/shop" className="main-btn btn-borderd">Get A Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section about-style-two">
                {/* About Text */}
                <div className="about-text-warp">
                    <div className="container">
                        <div className="row no-gutters justify-content-center justify-content-lg-start">
                            <div className="col-lg-5 col-md-10">
                                <div className="about-text position-relative">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">About us</span>
                                        <h2>Helping in medical service ,its more than 25 years .</h2>
                                    </div>
                                    <p className="mb-30"> Over the years, a wide range of developments and innovations in the medical
                                    mask service have led
                                    to many new medical mask produced. Moreover, there is need for masks .Lorem ipsum dolor sit
              amet.</p>
                                    <p>Entrepreneurs, artist, athletes and other individuals who have excelled in their field
                                    share
                                    fun and inspiring stories from their journey to success. Individuals who have excelled
                                    in
              their field share.</p>
                                    <Link to="/shop" className="main-btn btn-filled mt-40">Buy Now </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-img">
                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about-mock.png"} alt="mockup-img" />
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

export default Abouttext;