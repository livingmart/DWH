import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../helper/navhelper";
import navigationmenu from "../../data/navigation.json";
import cartitems from "../../data/cartitems.json";
import classNames from "classnames";
import Mobilemenu from "./Mobilemenu";

class Headerthree extends HeaderComponent {
	constructor(props) {
		super(props);
		this.state = {
			priceTotal: cartitems.reduce(
				(totalPrice, item) => totalPrice + item.price * item.qty,
				0
			),
			cartitems: cartitems,
		};
	}
	render() {
		const stickyheader = this.state.isTop ? "sticky" : "";
		return (
			<header
				className={"header-absolute header-three sticky-header " + stickyheader}
				id="can-sticky"
			>
				<div className="container-fluid custom-container-two">
					<div className="mainmenu-area">
						<div className="d-flex align-items-center justify-content-between">
							<nav className="main-menu">
								<div className="logo">
									<Link to="/">
										<img
											src={process.env.PUBLIC_URL + "/assets/img/logoDWH.png"}
											alt="logo"
											className="normal-logo"
										/>
										<img
											src={process.env.PUBLIC_URL + "/assets/img/logoDWH.png"}
											alt="logo"
											className="sticky-logo"
										/>
									</Link>
								</div>
								<div className="menu-items">
									<ul>
										{navigationmenu.length > 0
											? navigationmenu.map((item, i) => (
													<li
														key={i}
														className={`menu-item ${
															item.child ? "menu-item-has-children" : ""
														} `}
														onClick={this.triggerChild}
													>
														{item.child ? (
															<Link onClick={(e) => e.preventDefault()} to="/">
																{" "}
																{item.linkText}{" "}
															</Link>
														) : (
															<Link to={item.link}> {item.linkText} </Link>
														)}
														{item.child ? (
															<ul className="submenu" role="menu">
																{item.submenu.map((sub_item, i) => (
																	<li
																		key={i}
																		className={`menu-item ${
																			sub_item.child
																				? "menu-item-has-children"
																				: ""
																		} `}
																	>
																		{sub_item.child ? (
																			<Link
																				onClick={(e) => e.preventDefault()}
																				to="/"
																			>
																				{" "}
																				{sub_item.linkText}{" "}
																			</Link>
																		) : (
																			<Link to={sub_item.link}>
																				{" "}
																				{sub_item.linkText}{" "}
																			</Link>
																		)}
																		{sub_item.submenu ? (
																			<ul className="submenu">
																				{sub_item.submenu.map(
																					(third_item, i) => (
																						<li className="menu-item" key={i}>
																							<Link to={third_item.link}>
																								{third_item.linkText}
																							</Link>
																						</li>
																					)
																				)}
																			</ul>
																		) : null}
																	</li>
																))}
															</ul>
														) : null}
													</li>
											  ))
											: null}
									</ul>
								</div>
							</nav>
							<div className="main-right">
								{/* <Link to="/contact" className="main-btn btn-filled">
									Contact Us
								</Link> */}
								{/* <Link to="/cart" className="shoping-cart-sec">
                                    <div className="cart-icon"> <i className="fal fa-shopping-bag"/>
                                        <span className="cart-count">{cartitems.length}</span>
                                    </div>
                                </Link> */}
							</div>
							<div
								className={classNames("hamburgerbtn", {
									active: this.state.navToggle,
								})}
								onClick={this.toggleNav}
							>
								<div className="menubtn">
									<span />
									<span />
									<span />
								</div>
							</div>
						</div>
					</div>
					{/* Mobile Menu */}
					<div
						className={classNames("mobile-menu", {
							open: this.state.navToggle,
						})}
					>
						<button className="close-nav" onClick={this.toggleNav}>
							X
						</button>
						<Mobilemenu />
					</div>
				</div>
			</header>
		);
	}
}

export default Headerthree;
