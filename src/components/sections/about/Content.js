import React, { Fragment } from 'react';

import { Tab, Nav } from "react-bootstrap";

import Flightbooking from "../../sections/booking/Flightbooking-about";

function Content () {

        return (
            <Fragment>
                 <section className="section-padding bg-light-white booking-form">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs">
                                <Tab.Container defaultActiveKey="tab2">
                                    <Nav as="ul" varient="tabs" className="custom-flex nav nav-tabs">
                                        
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="tab2"> Manage Your Booking</Nav.Link>
                                        </Nav.Item>
                                        
                                    </Nav>
                                    <Tab.Content className="bg-custom-white bx-wrapper padding-20">
                                        <Tab.Pane eventKey="tab1">
                                            {/* <Hotelbooking /> */}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                                {/* <Flightbooking /> */}
                                                <Flightbooking />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab3">
                                            {/* <Cruisebooking /> */}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab4">
                                            {/* <Carbooking /> */}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
               
                <section className="section-padding why-choose-testimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                
                            </div>
                            <div className="col-xl-7 col-lg-6">
                               
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Team /> */}
            </Fragment>
        );
    }


export default Content;