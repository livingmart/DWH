import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/shop/Content';

const pagelocation = 'Shop'

class Shop extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Protekt - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content
                    catId={this.props.match.params.catId}
                    tagId={this.props.match.params.tagId}
                    minPrice={this.props.match.params.minPrice}
                    maxPrice={this.props.match.params.maxPrice}
                    //userId={this.props.match.params.userId}
                    query={this.props.match.params.query}
                />
                <Footer/>
            </Fragment>
        );
    }
}

export default Shop;