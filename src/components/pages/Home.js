import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';
import Header from '../layouts/Headerthree';

const pagelocation = 'Homepage'

class Home extends Component {
    render() {
        return (
					<Fragment>
						<MetaTags>
							<title>DWH Warenhandel | {pagelocation}</title>
							<meta name="description" content="#" />
						</MetaTags>
						<Header />
						<Content />
						<Footer footer={{ style: "", logo: "assets/img/logo-white.png" }} />
					</Fragment>
				);
    }
}

export default Home;