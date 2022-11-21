import React, { Component } from 'react';
import $ from 'jquery'
import 'magnific-popup'

class Video extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup()
    }
    render() {
        return (
            <section className="video-section video-style-two" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/video-bg-2.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="video-text text-center">
                                <div className="video-link-two">
                                    <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-video"><i className="fas fa-play" /></a>
                                </div>
                                <p>SMARTCOVER IS THE SMART CHOICE</p>
                                <h1>Meet Smart Cover</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;