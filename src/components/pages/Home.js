import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Partners from '../layouts/Partners';
import Content from '../sections/home/Content';

const pagelocation = "Homepage";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>FastDrive | {pagelocation}</title>
                    <meta
                        name="Fastdrive travels"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Content />
                {/* <Partners /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Home;