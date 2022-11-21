import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import products from '../../../data/shop/shop.json';
import productcategory from '../../../data/shop/category.json';
import { Rating } from '../../../helper/helper';

class Filtershop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: products,
            activeItem: -1
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 masonry-item">
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
        ));
        return (
            <section className="portfolio pt-120 pb-120">
                <div className="container">
                    <div className="section-title text-center both-border mb-80"> <span className="title-tag">Shop</span>
                        <h2>WE BRING CERTIFIED MASK</h2>
                    </div>
                    <div className="portfolio-tab portfolio-filter masonry-filter grid-filter">
                        <ul className="nav nav-tabs border-0 justify-content-center">
                            <li className={this.state.activeItem === -1 ? 'nav-item active' : 'nav-item'} >
                                <Link className="nav-link" to="#" onClick={this.handleClick.bind(this, -1)}>All</Link>
                            </li>
                            {productcategory.map((item) => (
                                <li key={item.id} className={this.state.activeItem === parseInt(item.id) ? 'nav-item active' : 'nav-item'}>
                                    <Link className="nav-link" to="#" onClick={this.handleClick.bind(this, item.id)}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="row mt-50 justify-content-center portfolio-masonary-loop masonry-items shop-sidebar-section style-2">
                            {renderAll}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Filtershop;