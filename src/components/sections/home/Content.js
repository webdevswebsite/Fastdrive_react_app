import React, { Component, Fragment } from 'react';


import Banner from './Banner';

// import Searchform from './Searchform';

// import Grid from '../../sections/flight-grid/Content';
import Recomflights from './Recomflights';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                {/* <Searchform /> */}
                <Recomflights />
                {/* <Grid /> */}

            </Fragment>
        );
    }
}

export default Content;