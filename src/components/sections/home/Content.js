import React, { Component, Fragment } from 'react';


import Banner from './Banner';

import Searchform from './Searchform';

import Grid from '../../sections/flight-grid/Content';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Searchform />
                <Grid />
            
            </Fragment>
        );
    }
}

export default Content;