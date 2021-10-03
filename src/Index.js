import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="header_section">
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
                <div className="banner_section">
                    <div className="container-fluid">
                        <section className="slide-wrapper">
                            <div className="container-fluid">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                        <li data-target="#myCarousel" data-slide-to={1} />
                                        <li data-target="#myCarousel" data-slide-to={2} />
                                        <li data-target="#myCarousel" data-slide-to={3} />
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-sm-2 padding_0">
                                                    <p className="mens_taital">Men Shoes</p>
                                                    <div className="page_no">0/2</div>
                                                    <p className="mens_taital_2">Men Shoes</p>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="banner_taital">
                                                        <h1 className="banner_text">New Running Shoes </h1>
                                                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                                                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <button className="buy_bt">Buy Now</button>
                                                        <button className="more_bt">See More</button>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="shoes_img"><img src="assets/images/running-shoes.png" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-sm-2 padding_0">
                                                    <p className="mens_taital">Men Shoes</p>
                                                    <div className="page_no">0/2</div>
                                                    <p className="mens_taital_2">Men Shoes</p>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="banner_taital">
                                                        <h1 className="banner_text">New Running Shoes </h1>
                                                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                                                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <button className="buy_bt">Buy Now</button>
                                                        <button className="more_bt">See More</button>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="shoes_img"><img src="assets/images/running-shoes.png" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-sm-2 padding_0">
                                                    <p className="mens_taital">Men Shoes</p>
                                                    <div className="page_no">0/2</div>
                                                    <p className="mens_taital_2">Men Shoes</p>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="banner_taital">
                                                        <h1 className="banner_text">New Running Shoes </h1>
                                                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                                                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <button className="buy_bt">Buy Now</button>
                                                        <button className="more_bt">See More</button>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="shoes_img"><img src="assets/images/running-shoes.png" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-sm-2 padding_0">
                                                    <p className="mens_taital">Men Shoes</p>
                                                    <div className="page_no">0/2</div>
                                                    <p className="mens_taital_2">Men Shoes</p>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="banner_taital">
                                                        <h1 className="banner_text">New Running Shoes </h1>
                                                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                                                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <button className="buy_bt">Buy Now</button>
                                                        <button className="more_bt">See More</button>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="shoes_img"><img src="assets/images/running-shoes.png" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="layout_padding collection_section">
                <div className="container">
                    <h1 className="new_text"><strong>New  Collection</strong></h1>
                    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <div className="collection_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-img">
                                    <button className="new_bt">New</button>
                                    <div className="shoes-img"><img src="assets/images/shoes-img1.png" /></div>
                                    <p className="sport_text">Men Sports</p>
                                    <div className="dolar_text">$<strong style={{ color: '#f12a47' }}>90</strong> </div>
                                    <div className="star_icon">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="seemore_bt">See More</button>
                            </div>
                            <div className="col-md-6">
                                <div className="about-img2">
                                    <div className="shoes-img2"><img src="assets/images/shoes-img2.png" /></div>
                                    <p className="sport_text">Men Sports</p>
                                    <div className="dolar_text">$<strong style={{ color: '#f12a47' }}>90</strong> </div>
                                    <div className="star_icon">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collection_section">
                <div className="container">
                    <h1 className="new_text"><strong>Racing Boots</strong></h1>
                    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
            </div>
            <div className="collectipn_section_3 layuot_padding">
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
            <div className="collection_section layout_padding">
                <div className="container">
                    <h1 className="new_text"><strong>New Arrivals Products</strong></h1>
                    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
            </div>
            <div className="layout_padding gallery_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="best_shoes">
                                <p className="best_text">Best Shoes </p>
                                <div className="shoes_icon"><img src="assets/images/shoes-img4.png" /></div>
                                <div className="star_text">
                                    <div className="left_part">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="right_part">
                                        <div className="shoes_price">$ <span style={{ color: '#ff4e5b' }}>60</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="best_shoes">
                                <p className="best_text">Best Shoes </p>
                                <div className="shoes_icon"><img src="assets/images/shoes-img5.png" /></div>
                                <div className="star_text">
                                    <div className="left_part">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="right_part">
                                        <div className="shoes_price">$ <span style={{ color: '#ff4e5b' }}>400</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="best_shoes">
                                <p className="best_text">Best Shoes </p>
                                <div className="shoes_icon"><img src="assets/images/shoes-img6.png" /></div>
                                <div className="star_text">
                                    <div className="left_part">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="right_part">
                                        <div className="shoes_price">$ <span style={{ color: '#ff4e5b' }}>50</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="best_shoes">
                                <p className="best_text">Sports Shoes</p>
                                <div className="shoes_icon"><img src="assets/images/shoes-img7.png" /></div>
                                <div className="star_text">
                                    <div className="left_part">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="right_part">
                                        <div className="shoes_price">$ <span style={{ color: '#ff4e5b' }}>70</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="best_shoes">
                                <p className="best_text">Sports Shoes</p>
                                <div className="shoes_icon"><img src="assets/images/shoes-img8.png" /></div>
                                <div className="star_text">
                                    <div className="left_part">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="right_part">
                                        <div className="shoes_price">$ <span style={{ color: '#ff4e5b' }}>100</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="best_shoes">
                                <p className="best_text">Sports Shoes</p>
                                <div className="shoes_icon"><img src="assets/images/shoes-img9.png" /></div>
                                <div className="star_text">
                                    <div className="left_part">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="assets/images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="right_part">
                                        <div className="shoes_price">$ <span style={{ color: '#ff4e5b' }}>90</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buy_now_bt">
                        <button className="buy_text">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="layout_padding contact_section">
                <div className="container">
                    <h1 className="new_text"><strong>Contact Now</strong></h1>
                </div>
                <div className="container-fluid ram">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="email_box">
                                <div className="input_main">
                                    <div className="container">
                                        <form action="/action_page.php">
                                            <div className="form-group">
                                                <input type="text" className="email-bt" placeholder="Name" name="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="email-bt" placeholder="Phone Numbar" name="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="email-bt" placeholder="Email" name="Email" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="send_btn">
                                        <button className="main_bt">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shop_banner">
                                <div className="our_shop">
                                    <button className="out_shop_bt">Our Shop</button>
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




    )
}
