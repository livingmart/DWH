import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Backtotop from "./Backtotop";

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<Backtotop />
				<footer className="footer-style-three">
					<div className="footer-top">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-sm-4">
									<div className="logo text-center text-sm-left">
										<Link to="/">
											<img
												src={process.env.PUBLIC_URL + "/assets/img/logoDWH.png"}
												alt="logo"
												height={100}
												// width={20}
											/>
										</Link>
									</div>
								</div>
								<div className="col-sm-8">
									<div className="social-icon text-center text-sm-right">
										<Link to="#">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link to="#">
											<i className="fab fa-twitter" />
										</Link>
										<Link to="#">
											<i className="fab fa-instagram" />
										</Link>

										<Link to="#">
											<i className="fab fa-whatsapp" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* widgets */}
					{/* <div className="footer-widget-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start">
                                        <div>
                                            <h5 className="widget-title">Company</h5>
                                            <ul>
                                                <li><Link to="#">About</Link></li>
                                                <li><Link to="#">Leadership</Link></li>
                                                <li><Link to="#">Blog</Link></li>
                                                <li><Link to="#">Careers</Link></li>
                                                <li><Link to="#">Partners</Link></li>
                                                <li><Link to="#">Referral Program</Link></li>
                                                <li><Link to="#">Press</Link></li>
                                                <li><Link to="#">Legal</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start justify-content-lg-center">
                                        <div>
                                            <h5 className="widget-title">Community</h5>
                                            <ul>
                                                <li><Link to="#">Tutorials</Link></li>
                                                <li><Link to="#">Meetups</Link></li>
                                                <li><Link to="#">Q&amp;A</Link></li>
                                                <li><Link to="#">Mass Masks Order</Link></li>
                                                <li><Link to="#">Droplets for Demos</Link></li>
                                                <li><Link to="#">Covid-19 Precotions</Link></li>
                                                <li><Link to="#">Shop Swag</Link></li>
                                                <li><Link to="#">Nose Bridge Mask</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start justify-content-lg-center">
                                        <div>
                                            <h5 className="widget-title">Solutions</h5>
                                            <ul>
                                                <li><Link to="#">Face Masks</Link></li>
                                                <li><Link to="#">N95 Masks </Link></li>
                                                <li><Link to="#">Reusable Mask</Link></li>
                                                <li><Link to="#">Filter Mask </Link></li>
                                                <li><Link to="#">Cotton Mask </Link></li>
                                                <li><Link to="#">Nose Bridge Mask</Link></li>
                                                <li><Link to="#">ISO Certified</Link></li>
                                                <li><Link to="#">Medical Masks </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget recent-post">
                                        <div>
                                            <h5 className="widget-title">news feeds</h5>
                                            <div className="post-loop">
                                                {blogpost.slice(0, 3).map((item, i) => (
                                                    <div className="post" key={i}>
                                                        <div className="post-img">
                                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                                        </div>
                                                        <div className="post-desc">
                                                            <span className="time"><i className="fal fa-calendar-alt" /> {item.postdate}</span>
                                                            <h5><Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
					{/* copyright */}
					<div className="copy-right-area">
						<div className="container">
							<div className="copyrigt-text d-sm-flex justify-content-center">
								<p>
									Copyright @<Link to="#">DWH Warenhandel</Link> - 2022
								</p>
								{/* <p>
											Design By@<Link to="#">Yourweb</Link> - 2021
										</p> */}
							</div>
						</div>
					</div>
				</footer>
			</Fragment>
		);
	}
}

export default Footer;
