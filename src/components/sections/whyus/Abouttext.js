import React from 'react';


function Abouttext(props) {
   
    return (
        <section className="about-section">
            <div className="container">
                <div className="with-man-shape">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-12 col-md-10">
                            <div className="about-text">
                                <div className="section-title mb-40 left-border">
                                    <span className="title-tag">impressum page</span>
                                    {/* <h2>HELPING MEDICAL SECTOR ,FOR 25 YEARS.</h2> */}
                                </div>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis biben dum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet today, not just in urban areas but rural regions as well.</p>
                              
                            </div>
                        </div>
                    </div>
                    {/* <div className="about-man-img">
                        <div className="shape">
                            <img src={process.env.PUBLIC_URL + "/assets/img/about/why_choose_us.png"} alt="img" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Abouttext;