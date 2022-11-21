import React, { Component } from "react";

class Abouttext extends Component {
	render() {
		return (
			<section className="about-section about-style-three pt-120 pb-120">
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-6 col-md-10">
							<div className="about-text pr-30">
								<div className="section-title left-border mb-40">
									<span className="title-tag">About us</span>
									<h2>
										We have multiple experiences in many types of commercial
										goods
									</h2>
								</div>
								<p>
									DWH Warenhandel is a trading company with multiple experiences
									in many types of commercial goods, the most important of them
									are used and new Solar panels, all kinds of household
									electrical appliances, Medical tools, Cosmetics, Cars and
									heavy vehicles, Auto parts and many other items.
								</p>
								<p>
									And also we can provide goods requested by merchants (buyers),
									and our focus and principal market are merchants residing in
									the countries of the Middle East in general and Arab
									countries, however, we also supply to other regions worldwide.
								</p>
								<div className="experience-tag mt-40">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/Pictures/kindpng_390763.png"
										}
										alt="img"
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-10 order-first order-lg-last">
							<div className="about-img">
								<img
									src={
										process.env.PUBLIC_URL +
										"/assets/Pictures/emmanuel-ikwuegbu-FXpJW_wdMdk-unsplash.jpg"
									}
									alt="img"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Abouttext;
