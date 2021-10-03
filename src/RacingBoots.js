import React from 'react'

export default function RacingBoots() {
    return (
        <div>
            <div>
                <div className="header_section header_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="logo"><a href="#"><img src="assets/images/logo.png" /></a></div>
                            </div>
                            <div className="col-sm-9">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <a className="nav-item nav-link" href="/">Home</a>
                                            <a className="nav-item nav-link" href="Collection">Collection</a>
                                            <a className="nav-item nav-link" href="Shoes">Shoes</a>
                                            <a className="nav-item nav-link" href="RacingBoots">Racing Boots</a>
                                            <a className="nav-item nav-link" href="Contact">Contact</a>
                                            <a className="nav-item nav-link last" href="#"><img src="assets/images/search_icon.png" /></a>
                                            <a className="nav-item nav-link last" href="contact.html"><img src="assets/images/shop_icon.png" /></a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collection_text">Racing Boots</div>
                <div className="about_main layout_padding">
                    <div className="collection_section">
                        <div className="container">
                            <h1 className="new_text"><strong>Racing Boots</strong></h1>
                            <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                    </div>
                    <div className="collectipn_section_3 layout_padding">
                        <div className="container">
                            <div className="racing_shoes">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="shoes-img3"><img src="assets/images/shoes-img3.png" /></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="sale_text"><strong>Sale <br /><span style={{ color: '#0a0506' }}>JOGING</span> <br />SHOES</strong></div>
                                        <div className="number_text"><strong>$ <span style={{ color: '#0a0506' }}>100</span></strong></div>
                                        <button className="seemore">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_footer">
                    <div className="container">
                        <div className="mail_section">
                            <div className="row">
                                <div className="col-sm-6 col-lg-2">
                                    <div><a href="#"><img src="assets/images/footer-logo.png" /></a></div>
                                </div>
                                <div className="col-sm-6 col-lg-2">
                                    <div className="footer-logo"><img src="assets/images/phone-icon.png" /><span className="map_text">(71) 1234567890</span></div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="footer-logo"><img src="assets/images/email-icon.png" /><span className="map_text">Demo@gmail.com</span></div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="social_icon">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/fb-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/twitter-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/in-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/google-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-2" />
                            </div>
                        </div>
                        <div className="footer_section_2">
                            <div className="row">
                                <div className="col-sm-4 col-lg-2">
                                    <p className="dummy_text"> ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur  ipsum dolor sit amet,</p>
                                </div>
                                <div className="col-sm-4 col-lg-2">
                                    <h2 className="shop_text">Address </h2>
                                    <div className="image-icon"><img src="assets/images/map-icon.png" /><span className="pet_text">No 40 Baria Sreet 15/2 NewYork City, NY, United States.</span></div>
                                </div>
                                <div className="col-sm-4 col-md-6 col-lg-3">
                                    <h2 className="shop_text">Our Company </h2>
                                    <div className="delivery_text">
                                        <ul>
                                            <li>Delivery</li>
                                            <li>Legal Notice</li>
                                            <li>About us</li>
                                            <li>Secure payment</li>
                                            <li>Contact us</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <h2 className="adderess_text">Products</h2>
                                    <div className="delivery_text">
                                        <ul>
                                            <li>Prices drop</li>
                                            <li>New products</li>
                                            <li>Best sales</li>
                                            <li>Contact us</li>
                                            <li>Sitemap</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-2">
                                    <h2 className="adderess_text">Newsletter</h2>
                                    <div className="form-group">
                                        <input type="text" className="enter_email" placeholder="Enter Your email" name="Name" />
                                    </div>
                                    <button className="subscribr_bt">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
