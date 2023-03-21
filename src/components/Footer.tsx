import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Address</h2>
                            </div>
                            <address>
                                <p>10/a samanvay sparsh b/h billabong school,<br /> Vadsar, Vadodara, Gujarat 390010</p>
                            </address>

                            <ul className="social-icon">
                                <li>
                                    <Link href="https://www.facebook.com/scienceavenueacademy/">
                                        <FontAwesomeIcon icon={faFacebookSquare} height={20} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faTwitter} height={20} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/scienceavenueacademy/" target={'_blank'}>
                                        <FontAwesomeIcon icon={faInstagram} height={20} />
                                    </Link>
                                </li>
                            </ul>

                            <div className="copyright-text">
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Contact Info</h2>
                            </div>
                            <address>
                                <p>+91 89059 70710</p>
                                <p><Link href="mailto:youremail.co">gopi_jariwala@yahoo.in</Link></p>
                            </address>

                            <div className="footer_menu">
                                {/* <h2>Quick Links</h2>
                  <ul>
                    <li><Link href="#">Career</Link></li>
                    <li><Link href="#">Investor</Link></li>
                    <li><Link href="#">Terms & Conditions</Link></li>
                    <li><Link href="#">Refund Policy</Link></li>
                  </ul> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="footer-info newsletter-form">
                            {/* <div className="section-title">
                                <h2>Newsletter Signup</h2>
                            </div>
                            <div>
                                <div className="form-group">
                                    <form action="#" method="get">
                                        <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required />
                                        <input type="submit" className="form-control" name="submit" id="form-submit" value="Send me" />
                                    </form>
                                    <span><sup>*</sup> Please note - we do not spam your email.</span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}