import React from 'react';
import Requestform from "../../../helper/requestform";

class Content extends Requestform {
	render() {
		return (
			<section className="contact-section with-map-bg pt-120 pb-120">
				<div className="contact-section contact-form-wrapper">
					<div className="container">
						<div className="contact-form-wrapper">
							<div className="row">
								<div className="col-12">
									<div className="contact-form">
										<form
											id="contact-form"
											onSubmit={this.handleSubmit.bind(this)}
											method="POST"
										>
											<div className="row padding-custom">
												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-user" />
														</div>
														<input
															type="text"
															placeholder="Your Name"
															name="name"
															value={this.state.name}
															onChange={this.onNameChange.bind(this)}
															required
														/>
													</div>
												</div>

												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-phone" />
														</div>
														<input
															type="text"
															placeholder="Phone Number"
															name="phone"
															value={this.state.phone}
															onChange={this.onPhoneChange.bind(this)}
															required
														/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-envelope" />
														</div>
														<input
															type="email"
															placeholder="Contact Email"
															name="email"
															value={this.state.email}
															onChange={this.onEmailChange.bind(this)}
															required
														/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-user" />
														</div>
														<input
															type="text"
															placeholder="Shipping Address"
															name="name"
															value={this.state.name}
															onChange={this.onNameChange.bind(this)}
															required
														/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-user" />
														</div>
														<input
															type="text"
															placeholder="Country of residence"
															name="name"
															value={this.state.name}
															onChange={this.onNameChange.bind(this)}
															required
														/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-user" />
														</div>
														<input
															type="text"
															placeholder="Name of City"
															name="name"
															value={this.state.name}
															onChange={this.onNameChange.bind(this)}
															required
														/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-user" />
														</div>
														<input
															type="text"
															placeholder="Name of product"
															name="name"
															value={this.state.name}
															onChange={this.onNameChange.bind(this)}
															required
														/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="input-group mb-10">
														<div className="icon">
															<i className="fal fa-user" />
														</div>
														<input
															type="text"
															placeholder="Quantity of Product needed"
															name="name"
															value={this.state.name}
															onChange={this.onNameChange.bind(this)}
															required
														/>
													</div>
												</div>

												<div className="col-12">
													<div className="input-group textarea mb-10">
														<div className="icon">
															<i className="fal fa-edit" />
														</div>
														<textarea
															placeholder="Briefly describe your request or requirement"
															name="message"
															value={this.state.message}
															onChange={this.onMessageChange.bind(this)}
															required
														/>
													</div>
												</div>
												<div className="col-12 text-center">
													<button type="submit" className="main-btn btn-filled">
														PROCEED TO MAKE ORDER
													</button>
												</div>
											</div>
										</form>
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

export default Content;