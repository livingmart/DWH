import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/team-details/Content';

const pagelocation = 'Team Details'

class Teamdetails extends Component {
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
                <Content teamId={this.props.match.params.id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Teamdetails;