import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHelper from '../../helper/NavHelper';
// import insta from '../../data/instagram.json';

class Footer extends NavHelper {
    render() {
        const backToTop = this.state.stickyHeader ? ' d-block' : '';
        return (
            <Fragment>
                {/* Start Footer */}
                <footer className="section-padding footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-md-40">
                                    <h4 className="text-custom-white fw-600">FastDrive</h4>
                                    <p className="text-custom-white">Get exclusive deals on our products
                                        Book Flights, Flight Status, Search Hotels Domestic Flights, International Flights Holiday Packages, Visa Assistance, Travel Card, Travel Sim, Pay Small Small.</p>
                                </div>
                            </div>
                           
                            <div className="col-lg-8 col-md-6 subscrib">
                                <div className="footer-box mb-sm-40">
                                    <h4 className="text-custom-white fw-600">Like travel deals?</h4>
                                    <p className='text-custom-white'>Enter your email and we'll send them your way.</p>
                                    <div className="newsletter">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" name="#" className="form-control form-control-custom" placeholder="Enter your email address" required />
                                            </div>
                                            <button type="submit" className="btn-first btn-submit">Send me updates</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}
                {/* Start Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"> 
                                <p className="text-custom-white">All Right Reserved Copyright <Link to="#" className="text-custom-white"> © FASTDRIVE.COM LIMITED.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Copyright */}
                <div id="back-top" className={"back-top" + backToTop}>
                    <Link to="#" data-toggle="button" aria-pressed="true" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="flaticon-arrows" /></Link>
                </div>
            </Fragment>
        );
    }
}

export default Footer;