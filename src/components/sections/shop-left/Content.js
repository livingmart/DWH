import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import { Rating } from '../../../helper/helper';
import Pagination from "react-js-pagination";
import Featuredproducts from '../../layouts/Featuredproducts';
import Sidebar from '../../layouts/Shopsidebar';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: shopblock,
            activePage: 1,
            itemPerpage: 8
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-lg-6 col-md-6">
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
        });
        return (
            <Fragment>
                <section className="blog-section shop-sidebar-section style-2 pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Blog Sidebar */}
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                            {/* Blog Loop Start */}
                            <div className="col-lg-8">
                                <div className="cw-shop-top-filter">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8 col-md-8 col-sm-12">
                                            <form>
                                                <div className="cw-sort-select_filter">
                                                    <select>
                                                        <option value="menu_order">Default sorting</option>
                                                        <option value="popularity">Sort by popularity</option>
                                                        <option value="rating">Sort by average rating</option>
                                                        <option value="date">Sort by latest</option>
                                                        <option value="price">Sort by price: low to high</option>
                                                        <option value="price-desc">Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="cw-shop-view">
                                                <p>Showing all {this.state.data.length} results</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {paginationData}
                                </div>
                                <div className="pagination-wrap pt-5">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.itemPerpage}
                                        totalItemsCount={this.state.data.length}
                                        pageRangeDisplayed={this.state.data.length}
                                        onChange={this.handlePageChange.bind(this)}
                                        innerClass=""
                                        activeClass="active"
                                        itemClass=""
                                        linkClass=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cw-section cw-shop-section shop-sidebar-section style-2 bg-gradient pt-120 pb-90">
                    <Featuredproducts />
                </section>
            </Fragment>
        );
    }
}

export default Content;