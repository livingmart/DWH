import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import shopbox from '../../../data/shop/shop.json';
import { getFilteredproducts } from '../../../helper/shophelper';
import { Rating } from '../../../helper/helper';
import Pagination from "react-js-pagination";
import Ctabanner from './Ctabanner';
import Featuredproducts from '../../layouts/Featuredproducts';
import Brandbanner from '../../layouts/Brandbanner';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getproducts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getproducts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var searchQuery = this.props.query ? this.props.query : '';
        var minPrice = this.props.minPrice ? this.props.minPrice : '';
        var maxPrice = this.props.maxPrice ? this.props.maxPrice : '';
        var filteredItems = getFilteredproducts(shopbox, { cat, tag, searchQuery, priceFilter: [minPrice, maxPrice] });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-lg-4 col-md-6">
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
                <section className="cw-shop-section shop-sidebar-section style-2 pt-120 pb-120">
                    <div className="container">
                        <div className="cw-section-heading-wrapper">
                            <div className="cw-section-heading">
                                <h4>Explore
          <span className="cw-primary-color">
                                        New
          </span>
          Mask
        </h4>
                            </div>
                        </div>
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
                        <div className="pagination-wrap justify-content-center mt-4">
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
                </section>
                <Ctabanner />
                <section className="cw-section cw-shop-section shop-sidebar-section style-2 pt-120 pb-90">
                    <Featuredproducts />
                </section>
                <section className="cw-section cw-shop-barnd-box pb-120">
                    <Brandbanner />
                </section>
            </Fragment>
        );
    }
}

export default withRouter(Content);