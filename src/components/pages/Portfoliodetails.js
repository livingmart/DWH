import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/portfolio-details/Content';

const pagelocation = 'Portfolio Details'

class Portfoliodetails extends Component {
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
                <Content portfolioId={this.props.match.params.id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfoliodetails;