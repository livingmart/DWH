import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchSuccess: false
        }
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({
                fetchSuccess: true
            });
        });
    }
    render() {
        const preloaderhidden = this.state.fetchSuccess ? 'd-none' : '';
        return (
            <div id="preloader" className={`${preloaderhidden}`}>
                <div>
                    <img src={process.env.PUBLIC_URL + "/assets/img/preloader.svg"} alt="preloader" />
                </div>
            </div>
        );
    }
}

export default Preloader;