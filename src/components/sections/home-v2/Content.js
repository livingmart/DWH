import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from '../home/Banner';
import Featuredservice from '../home/Featuredservice';
import Team from '../home/Team';
import Video from '../home/Video';
import Whyus from './Whyus';
import Categories from './Categories';
import Filtershop from './Filtershop';
import Blogpost from './Blogpost';
import Infobox from './Infobox';
import Testimonials from './Testimonials';
import Shop from './Shop';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Featuredservice/>
                <Abouttext />
                <Whyus/>
                <Categories/>
                <Infobox/>
                <Shop/>
                <Team/>
                <Video/>
                <Filtershop/> 
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;