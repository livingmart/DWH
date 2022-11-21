import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cta extends Component {
	render() {
		return (
			<section className="call-to-action cta-style-two pb-120">
				<div className="container">
					<div className="cta-inner">
						<div className="cta-text diff-bg">
							<div className="row align-items-center justify-content-center">
								<div className="col-lg-10 col-md-7 col-sm-10">
									<div className="section-title left-border">
										<span className="title-tag"></span>

										<h2
											style={{
												textDecoration: "none",
												textTransform: "lowercase",
												fontSize: "14px",
												fontWeight: "200",
												lineHeight: "3",
												letterSpacing: "3px",
											}}
										>
											vision: “Establishing and nurturing lifetime relationships
											with our customers” with a Mission “to earn our Customer’s
											loyalty by delivering sales and service experiences with
											high quality, excellent value, integrity and enthusiasm
											and striving to go the extra step that transforms Customer
											Satisfaction into Customer Delight”.
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Cta;
