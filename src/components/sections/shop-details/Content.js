import React, { Component, Fragment } from 'react';
import { Tab, Nav, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProduct, getCategories, getTags, getSocialShare } from '../../../helper/shophelper';
import { Rating, getInitial, fetchFlavorIcon } from '../../../helper/helper';
import Featuredproducts from '../../layouts/Featuredproducts';
import Slider from 'react-slick';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            clicks: 1
        };
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 1,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const productId = this.props.productId;
        const item = getProduct(productId);
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            centerMode: true,
            fade: true
        };
        const settingsThumb = {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        focusOnSelect: true
                    }
                }
            ]
        };
        return (
            <Fragment>
                <section className="cw-shop-section pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <div className="cw-product-des-slider">
                                    <Slider {...settings} asNavFor={this.state.nav2}
                                        ref={slider => (this.slider1 = slider)} className="cw-shop-des-slider-for">
                                        {item.image.map((image, i) => (
                                            <div key={i} className="cw-shop-des-img">
                                                <img src={process.env.PUBLIC_URL + "/" + image} className="w-product-slider-main img-fluid mx-auto" alt={item.title} />
                                            </div>
                                        ))}
                                    </Slider>
                                    <Slider {...settingsThumb} asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)} className="cw-shop-des-slider-nav">
                                        {item.image.map((image, i) => (
                                            <div key={i}>
                                                <div className="cw-shop-thumb-img">
                                                    <img src={process.env.PUBLIC_URL + "/" + image} className="w-product-slider-thumb img-fluid" alt={item.title} />
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-7">
                                <div className="cw-product-des-wrapper">
                                    <div className="cw-shop-details-container hybrid">
                                        <div className="cw-shop-details-title-wrapper">
                                            <div className="cw-product-meta-icon">
                                                <span className="strain-type" />
                                                {getCategories(item.category).slice(0, 1).map((cat, i) => (
                                                    <span className="strain-name" key={i}>-{cat.title}-</span>
                                                ))}
                                            </div>
                                            <div className="cw-shop-product-review-star">
                                                <div className="rating-star">
                                                    {Rating(item.rating)}
            5.54
            <span className="cw-primary-color">(5k Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="cw-shop-product-title">
                                                <h3>{item.title} <span className="cw-product-tag">{getInitial(item.title)}</span></h3>
                                                <p className="des-text">{item.shorttext}</p>
                                                <div className="cw-shop-product-meta">
                                                    <div className="cw-shop-product-meta-content">
                                                        <div className="cw-product-stock">
                                                            <p>Avability: </p>
                                                            {item.stock === true ? <p className="cw-instock">In Stock</p> : <p className="cw-instock text-danger">Out of Stock</p>}
                                                        </div>
                                                        <div className="cw-product-price">
                                                            <p>Price: </p>

                                                            <p className="cw-offer-price">${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}
                                                                {
                                                                    item.discount > 0 || item.discount !== '' ?
                                                                        <span className="cw-price-strike">${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                                                        : ''
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="cw-product-qty">
                                                        <div className="cw-order-qty">
                                                            <p>Quantity</p>
                                                            <div className="input-group">
                                                                <span className="input-group-btn">
                                                                    <button type="button" className="quantity-left-minus btn btn-number" onClick={this.DecreaseItem}>
                                                                        <i className="fa fa-minus" />
                                                                    </button>
                                                                </span>
                                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                                                <span className="input-group-btn">
                                                                    <button type="button" className="quantity-right-plus btn btn-number" onClick={this.IncrementItem}>
                                                                        <i className="fa fa-plus" />
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Dropdown className="cw-unit">
                                                            <p>Unit</p>
                                                            <Dropdown.Toggle as={Button} id="weight-btn" className="text-dark">Ounces</Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Link className="dropdown-item weight-btn-2" data-unit="g" to="#">Grams</Link>
                                                                <Link className="dropdown-item weight-btn-2" data-unit="oz" to="#">Ounces</Link>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="cw-shop-product-action">
                                                    <div className="cw-product-btn">
                                                        <button type="button" className="main-btn btn-filled">Add To Cart</button>
                                                    </div>
                                                    <div className="cw-shop-product-share">
                                                        {getSocialShare(item.title).map((social, i) => (
                                                            <Link to="#" onClick={(e) => this.openSocialPopup(social, i)} key={i}><i className={social.iconClass} /></Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="cw-shop-product-bottom-meta">
                                                    <div className="cw-shop-tags-meta">
                                                        <span><strong>Tags:</strong>
                                                            {getTags(item.tags).slice(0, 3).map((tag, i) => (
                                                                <Link to={"/shop/cat/" + tag.id} key={i}>{tag.title}
                                                                </Link>
                                                            ))}
                                                        </span>
                                                    </div>
                                                    <div className="cw-shop-tags-meta">
                                                        <span><strong>Category:</strong>
                                                            {getCategories(item.category).slice(0, 3).map((cat, i) => (
                                                                <Link to={"/shop/cat/" + cat.id} key={i}>{cat.title}</Link>
                                                            ))}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            </div >
                            <div className="col-md-12">
                                <div className="product-product-features pb-0">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12">
                                            <div className="product-product-effects product-margin-30">
                                                <h5>Benefits</h5>
                                                {item.effects.map((effect, i) => (
                                                    <div className="product-product-effects-inner" key={i}>
                                                        <div className="progress">
                                                            <div className="progress-bar active" style={{ width: effect.value + "%" }} />
                                                        </div>
                                                        <span className="product-product-effect-title">
                                                            {effect.title}({effect.value})
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className="product-product-flavors product-margin-30">
                                                <h5>Masks</h5>
                                                <div className="product-flavors-align">
                                                    {item.character.map((character, i) => (
                                                        <div className="product-flavors-type" key={i}>
                                                            <img src={fetchFlavorIcon(character.icon)} alt={character.title} />
                                                            <p>{character.title}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className="product-product-flavors">
                                                <h5>Colors</h5>
                                                <div className="product-flavors-align">
                                                    {item.flavours.map((flavour, i) => (
                                                        <div className="product-flavors-type" key={i}>
                                                            <img src={fetchFlavorIcon(flavour.icon)} alt={flavour.title} />
                                                            <p>{flavour.title}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-0 pt-120 pb-120">
                    <div className="container">
                        <div className="cw-product-des-details">
                            <div className="row">
                                <div className="col-md-12">
                                    <Tab.Container defaultActiveKey="tab1">
                                        <Nav variant="pills" className="justify-content-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">Description</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab2">Specifications</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab3">Reviews ({item.reviews.length})</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tab1">
                                                <div className="cw-shop-product-des" dangerouslySetInnerHTML={{ __html: item.longdescription }} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <div className="cw-shop-product-spec-table">
                                                    <table className="table table-bordered">
                                                        <tbody>
                                                            {item.specifications.map((spec, i) => (
                                                                <tr key={i}>
                                                                    <th>{spec.title}</th>
                                                                    <td>{spec.text}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3">
                                                <div className="blog-details-box">
                                                    <div className="comment-template">
                                                        <h3 className="box-title">{item.reviews.length} Reviews</h3>
                                                        <ul className="comments-list mb-40">
                                                            {item.reviews.map((review, i) => (
                                                                <li key={i}>
                                                                    <div className="comment-img">
                                                                        <img src={process.env.PUBLIC_URL + "/" + review.img} alt={review.name} />
                                                                    </div>
                                                                    <div className="comment-desc">
                                                                        <div className="desc-top">
                                                                            <h6>{review.name}</h6>
                                                                            <div className="rating-star">
                                                                                {Rating(review.rating)}
                                                                            </div>
                                                                            <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                                        </div>
                                                                        <p>{review.comment}</p>
                                                                    </div>
                                                                    <ul className="children">
                                                                        {review.replies.map((reply, i) => (
                                                                            <li key={i}>
                                                                                <div className="comment-img">
                                                                                    <img src={process.env.PUBLIC_URL + "/" + reply.img} alt={reply.name} />
                                                                                </div>
                                                                                <div className="comment-desc">
                                                                                    <div className="desc-top">
                                                                                        <h6>{reply.name}</h6>
                                                                                        <div className="rating-star">
                                                                                            {Rating(reply.rating)}
                                                                                        </div>
                                                                                        <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                                                    </div>
                                                                                    <p>{reply.comment}</p>
                                                                                </div>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <h3 className="box-title">Add Your Review</h3>
                                                        <div className="comment-form">
                                                            <form>
                                                                <div className="input-group textarea mb-20">
                                                                    <textarea placeholder="Type your comments...." />
                                                                    <div className="icon"><i className="fas fa-pen" /></div>
                                                                </div>
                                                                <div className="input-group mb-20">
                                                                    <input type="text" placeholder="Type your Name...." />
                                                                    <div className="icon"><i className="fas fa-user" /></div>
                                                                </div>
                                                                <div className="input-group mb-20">
                                                                    <input type="email" placeholder="Type your email...." />
                                                                    <div className="icon"><i className="fas fa-envelope" /></div>
                                                                </div>
                                                                <div className="input-group mt-30">
                                                                    <button type="submit" className="main-btn btn-filled"><i className="far fa-comments" /> Post Comment</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cw-section cw-shop-section shop-sidebar-section style-2 pt-120 pb-90">
                    <Featuredproducts />
                </section>
            </Fragment >
        );
    }
}

export default Content;