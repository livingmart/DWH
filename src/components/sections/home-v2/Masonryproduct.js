import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';

class Masonryproduct extends Component {
    render() {
        return (
            <section className="shop-masonary-sec">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="row no-gutters">
                                {shopblock.slice(0, 4).map((item, i) => (
                                    <div key={i} className="col-md-6">
                                        <div className="shop-masonary-box">
                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                            <div className="shop-masonary-box-caption">
                                                <h3>{item.title}</h3>
                                                <p className="price">£{new Intl.NumberFormat().format((item.price).toFixed(2))}</p>
                                                <Link to={"/shop-details/" + item.id} className="main-btn btn-filled">View Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {shopblock.slice(4, 5).map((item, i) => (
                            <div key={i} className="col-lg-6">
                                <div className="shop-masonary-box">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                    <div className="shop-masonary-box-caption">
                                        <h3>{item.title}</h3>
                                        <p className="price">£{new Intl.NumberFormat().format((item.price).toFixed(2))}</p>
                                        <Link to={"/shop-details/" + item.id} className="main-btn btn-filled">View Now</Link>
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

export default Masonryproduct;