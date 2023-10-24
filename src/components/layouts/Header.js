import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyState } from '../../context/CurrencyContext';

// import NavHelper from '../../helper/NavHelper';

function Header() {

    const {
        state: { currency, currencies, rate },
        dispatch: dispatchCurrency
    } = CurrencyState()

    console.log(currency, rate, currencies)

    const [ activeCurrency, setActiveCurrency ] = useState(
        localStorage.getItem('currency')
    )

    const handleChangeCurrency = ({ target: { value } }) => {
        dispatchCurrency({
            type: value,
            payload: value,
        })
        setActiveCurrency(value)
    }
    
    console.log(handleChangeCurrency)

    useEffect(() => {
        // on page reload activeCurency clears the state, prevent it from updating localstorage
        if (activeCurrency === undefined) return

        //only update local storage when activeCurrency has a value
        window.localStorage.setItem('currency', activeCurrency || 'USD');
    }, [ activeCurrency ]);


    // render() {
    // const stickyHeader = this.state.stickyHeader ? ' sticky' : '';
    return (
        <header className="header">
            {/* Navigation */}
            {/* <div className={"navigation" + stickyHeader}> */}
            <div className={"navigation"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-navigation">
                                <div className="logo">
                                    <Link to="/">
                                        <b style={{ fontSize: '30px' }}>
                                            FastDrive
                                        </b>
                                        {/* <img src={process.env.PUBLIC_URL + "/assets/images/toor-logo.png"} className="img-fluid image-fit" alt="img" /> */}
                                    </Link>
                                </div>
                                {/* <span className="currency">Currency :</span> */}
                                {/* <select style={{ border: 'none' }} defaultValue={activeCurrency} onChange={handleChangeCurrency} >
                                    {currencies.map((currency, idx) => (
                                        <option
                                            defaultValue={activeCurrency}
                                            value={currency}
                                            key={idx + currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select> */}
                                {/* <div className={this.state.navMethod === true ? 'main-menu active' : 'main-menu'}>
                                        <div className="logo">
                                            <Link to="/">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/toor-logo.png"} className="img-fluid image-fit" alt="img" />
                                            </Link>
                                        </div>
                                       
                                        <div className="cta-btn">
                                            <Link to="/about" className="btn-first btn-submit">Customer Support</Link>
                                        </div>
                                    </div> */}
                                {/* <div className="hamburger-menu" onClick={this.toggleNav}>
                                        <div className={this.state.navMethod === true ? 'menu-btn active' : 'menu-btn'}>
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation */}
        </header>
    );
    // }
}

export default Header;