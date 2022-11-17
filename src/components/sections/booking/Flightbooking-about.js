import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentFlight, getRoute } from "../../../helper/flightHelper";

class Flightbooking extends Component {
    render() {
        return (
            <div className="tab-inner">
                <div className="row">
                    <div className="col-lg-8">
                        <h5 className="text-custom-black">Customer care page</h5>
                        <p className="text-light-dark"> Our portal gives customers the power of choice from a broad selection of top travel deals, and the ability to research, plan and book their domestic and international travel from the comfort of their homes and everywhere they are. We also have an interactive customer care Centre, with a dedicated travel centre strategically located at international airports for customers’ convenience.</p>
                        <form className="row mb-md-80">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="fs-14 text-custom-black fw-500">Full Name</label>
                                    <input type="text" name="firstname" className="form-control form-control-custom" placeholder="Surname first" required />
                                </div>
                            </div>
        
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="fs-14 text-custom-black fw-500">Email</label>
                                    <input type="email" name="email" className="form-control form-control-custom" placeholder="Email" required />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="fs-14 text-custom-black fw-500">Message</label>
                                    <textarea type="text" rows="4" cols="90" name="phone" className="form-control form-control-custom">Message here</textarea>
                                    {/* <input type="text" name="phone" className="form-control form-control-custom" placeholder="Phone No." required /> */}
                                </div>
                            </div>
                       
                          
                            <div className="col-12" style={{alignContent:'center', justifyContent:'center'}}>
                                
                                <button type="submit" className="btn-first btn-submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-12">
                               
                                <div className="need-help bx-wrapper padding-20">
                                    <h5 className="text-custom-black">You can send text.</h5>
                                    <p className="text-light-dark">We would be more than happy to help you. Our team advisor are 24/7 at
                                        your service to help you.</p>
                                    <ul className="custom">
                                        <li className="text-custom-blue fs-18">
                                            <i className="fas fa-phone-alt" />
                                            <Link to="#" className="text-light-dark">(+01) 000 000 0000</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flightbooking;