import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import { Rating } from '../../../helper/helper';

class Shop extends Component {
    render() {
        return (
            <section className="portfolio pt-120 pb-90 bg-dark-blue">
                <div className="container">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">Shop</span>
                        <h2 className="text-white">We Bring Certified Mask </h2>
                    </div>
                    <div className="row shop-sidebar-section style-2 transparent-shop">
                        {shopblock.slice(0, 6).map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="product-grid">
                                    {item.star === true ?
                                        <div className="product-badge">
                                            <i className="fa fa-star" />
                                        </div> : ''}
                                    <div className="product-image4">
                                        <Link to={"/shop-details/" + item.id}>
                                            <img className="pic-1" src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                        </Link>
                                        <div className="rating-star">
                                            {Rating(item.rating)}
                                        </div>
                                    </div>
                                    <div className="product-content p-0">
                                        <h4 className="title"><Link to={"/shop-details/" + item.id}>{item.title}</Link></h4>
                                        <div className="price">£{new Intl.NumberFormat().format((item.price).toFixed(2))}</div>
                                        <p>{item.shorttext.slice(0, 50)}</p>
                                        <button className="main-btn btn-filled" type="button">Add to Cart</button>
                                        <button type="button" className="quick-view-btn" data-tip="Quick View">
                                            <i className="fas fa-eye" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Shop;