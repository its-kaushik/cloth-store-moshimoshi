import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./Footer.scss";
import { useState } from 'react';

const Footer = () => {

    const [ email, setEmail ] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value) ;

        console.log(email) ;
    }

    const onEmailSubmit = () => {

        fetch('/subscribers',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then( response => response.json() )
            .then( data => {
                
                if( data.status === 'success' )
                    alert('SUBSCRIBED SUCCESSFULLY')
                else    
                    console.log('FAILED');

            } )
            .catch( error => {
                console.log(`ERROR :: ${error}`);
            } )

    }

    return (
        <div className="footer">
            <div className="top">
                <div className="left">
                    <div className="store-logo">
                        <img src="/img/logo.png" alt="logo" />
                    </div>
                    <div className="store-description">
                        <p>
                            Sed ornare cras donec litora integer curabit ur orci at nullam anquam libero nam himen aeos ament massa amet.
                        </p>
                        <p>
                            Nisi porttitor inceptos conesctetur donec orci, ui ipsum leo class gravida.
                        </p>
                    </div>
                    <div className="socials">
                        <div className="social-text">
                            FOLLOW US
                        </div>
                        <div className="social-logos">
                            <div className="social-logo">
                                <FacebookIcon />
                            </div>
                            <div className="social-logo">
                                <TwitterIcon />
                            </div>
                            <div className="social-logo">
                                <GoogleIcon />
                            </div>
                            <div className="social-logo">
                                <LinkedInIcon />
                            </div>
                            <div className="social-logo">
                                <PinterestIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='newsletter'>
                        <div className='newsletter-text'>
                            Newsletter Signup
                        </div>
                        <div className='newsletter-subscribe'>
                            <input 
                                type='email' 
                                placeholder='email@example.com' 
                                onChange={onEmailChange}
                            />
                            <button
                                onClick={onEmailSubmit}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className='site-map'>
                        <div className='col col1'>
                            <div className='col-heading'>
                                Information
                            </div>
                            <div className='site-links'>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        About Us
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Contact Us
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Term & Conditions
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Privacy Policy
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Orders and Return
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Sites Map
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col col2'>
                            <div className='col-heading'>
                                My Account
                            </div>
                            <div className='site-links'>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Product Recall
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Gift Vouchers
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Returns and Exchanges
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Shipping Options
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Help & FAQs
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Sale only today
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col col3'>
                            <div className='col-heading'>
                                Information
                            </div>
                            <div className='site-links'>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Sign In
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        View Cart
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        My Wishlist
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Check out
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Track my order
                                    </div>
                                </div>
                                <div className='link-item'>
                                    <ArrowForwardIosIcon />
                                    <div className='link-text'>
                                        Help
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom'>
                <div className='left'>
                    Copyright © 2023 Cloth-Store. All Rights Reserved.
                </div>
                <div className='right'>
                    Designed by Mayank Kaushik
                </div>
            </div>

        </div>
    );
}

export default Footer;