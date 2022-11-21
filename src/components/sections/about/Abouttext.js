import React, { Component } from 'react';

class Abouttext extends Component {
    render() {
        return (
            <section className="about-section about-style-three pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-tile-gallery-two">
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/04.jpg"} alt="img" className="image-one" />
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/05.jpg"} alt="img" className="image-two" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text pl-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About us</span>
                                    <h2>HELPING MEDICAL SECTOR ,FOR 25 YEARS.</h2>
                                </div>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis biben dum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet today, not just in urban areas but rural regions as well.</p>
                                <div className="about-extra">
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis biben dum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            <div className="experience-tag">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/experience-tag.png"} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Abouttext;