import React, { Component } from 'react';
import { Tab, Nav } from "react-bootstrap";

class Searchform extends Component {
    render() {
        return (
            <div className="banner-tabs searchform">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs">
                                <Tab.Container defaultActiveKey="tab2">
                                    <Nav as="ul" varient="tabs" className="custom-flex nav nav-tabs">
                                       
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="tab2">Flights</Nav.Link>
                                        </Nav.Item>
                                       
                                    </Nav>
                                    <Tab.Content className="bg-custom-white bx-wrapper padding-20">
                                        <Tab.Pane eventKey="tab1">
                                            <div className="tab-inner">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">Your Destination</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="Your Destination and Hotel Name" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Check In</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Check Out</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Rooms</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Adults</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Kids</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2 col-md-6">
                                                            <label className="submit" />
                                                            <button type="submit" className="btn-first btn-submit full-width btn-height">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                            <div className="tab-inner">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500"> From Where?</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" required />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">To where?</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Leaving On</label>
                                                                        <div className="input-group group-form">
                                                                            <input
                                                                                className='form-control form-control-custom datepickr'
                                                                                placeholder="Select a date"
                                                                                type="date"
                                                                                // value={day}
                                                                                required
                                                                            />
                                                                            {/* <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>Morning</option>
                                                                                    <option>Evening</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Returning On</label>
                                                                        <div className="input-group group-form">
                                                                            <input
                                                                                className='form-control form-control-custom datepickr'
                                                                                placeholder="Select a date"
                                                                                type="date"
                                                                                // value={day}
                                                                                required
                                                                            />
                                                                            {/* <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly required />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>Morning</option>
                                                                                    <option>Evening</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12" style={{marginTop:'20px'}}>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <button className="btn-first btn-submit full-width btn-height">Let's Go!</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Tab.Pane>
                                      
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchform;