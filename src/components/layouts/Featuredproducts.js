import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../data/shop/shop.json';
import { Rating } from '../../helper/helper';

class Featuredproducts extends Component {
    render() {
        return (
            <div className="container">
                <div className="cw-section-heading-wrapper">
                    <div className="cw-section-heading">
                        <h3 className="wow fadeIn">Featured Products</h3>
                    </div>
                </div>
                <div className="row">
                    {shopblock.slice(0, 3).map((item, i) => (
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
        );
    }
}

export default Featuredproducts;