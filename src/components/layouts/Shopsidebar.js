import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import shopblock from '../../data/shop/shop.json';
import category from '../../data/shop/category.json';
import tags from '../../data/shop/tags.json';
import { Rating } from '../../helper/helper';
import IonRangeSlider from 'react-ion-slider'

class Shopsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            priceFilter: [1, 1000],
            minPrice: 1,
            maxPrice: 0,
        };
    }
    // Price filter
    onPriceChange(event) {
        this.setState({
            minPrice: event.from,
            maxPrice: event.to
        })
        if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
            this.props.history.push(`/shop/minPrice=${this.state.minPrice}&maxPrice=${this.state.maxPrice}`);
        }
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/shop/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar">
                {/* Search Widget */}
                <div className="widget search-widget mb-40">
                    <h5 className="widget-title">Search</h5>
                    <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                        <input type="text" className="form-control" placeholder="Search your keyword..." name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                        <button type="submit"><i className="far fa-search" /></button>
                    </form>
                </div>
                {/* Products Widget */}
                <div className="widget popular-feeds mb-40">
                    <h5 className="widget-title">Products</h5>
                    <div className="popular-feed-loop">
                        {shopblock.slice(0, 4).map((item, i) => (
                            <div className="single-popular-feed" key={i}>
                                <div className="feed-img">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                </div>
                                <div className="feed-desc">
                                    <h6><Link to={"/shop-details/" + item.id}>{item.title}</Link></h6>
                                    <div className="rating-star">
                                        {Rating(item.rating)}
                                    </div>
                                    <div className="price">
                                        {
                                            item.discount > 0 || item.discount !== '' ? <del>£{new Intl.NumberFormat().format((item.price).toFixed(2))}</del> : ''
                                        }
                                        <ins>£{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</ins>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Categories Widget */}
                <div className="widget categories-widget mb-40">
                    <h5 className="widget-title">Categories</h5>
                    <ul>
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/shop/cat/" + item.id}>{item.title}<span>{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Mask Post Widget */}
                <div className="widget popular-feeds popular_widget mb-40">
                    <h5 className="widget-title">Price</h5>
                    <div className="cw-fliter-slider filter-slider-2">
                        <div className="widget_range">
                            <div className="thc-range-inner">
                                <IonRangeSlider type="double" skin="round" hide_min_max={true} min={1} max={1000} from={this.state.priceFilter[0]} to={this.state.priceFilter[1]} grid={false} prefix="$ " onChange={this.onPriceChange.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mask Tags Widget */}
                <div className="widget popular-tag-widget mb-40">
                    <h5 className="widget-title">Mask Tags</h5>
                    <ul>
                        {tags.map((item, i) => (
                            <li key={i}><Link to={"/shop/tag/" + item.id}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Shopsidebar);
