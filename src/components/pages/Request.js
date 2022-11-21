import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Content from '../sections/requestform/Content';

const pagelocation = 'Request'

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Request form | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content/>
                {/* <Footer/> */}
            </Fragment>
        );
    }
}

export default Contact;