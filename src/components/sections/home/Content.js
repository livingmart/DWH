import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';

import Shop from './Shop';

import Portfolioslider from './Portfolioslider';
import Cta from './Cta';


class   Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                {/* <Featuredservice /> */}
                <Abouttext />
                {/* <Services /> */}
                <Shop />
                <Portfolioslider />
                <Cta />
                {/* <Masonryproduct /> */}
                {/* <Team /> */}
                {/* <Video /> */}
                {/* <section className="contact-section pt-110 pb-110">
                    <Contact />
                    <Brands />
                </section> */}
            </Fragment>
        );
    }
}

export default Content;