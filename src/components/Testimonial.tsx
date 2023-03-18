import dynamic from 'next/dynamic';
import Image from 'next/image';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    (window as any).$ = (window as any).jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
export default function Testimonial() {

    const responsive = {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
    const reviews = [
        {
            name: ''
        }
    ]
    return (


        <div className="container">
            <div className="row">

                <div className="col-md-12 col-sm-12">
                    <div className="section-title">
                        <h2>Student Reviews <small>from past students</small></h2>
                    </div>

                    <OwlCarousel className="owl-carousel owl-theme owl-client"
                        animateOut="fadeOut"
                        loop={true}
                        responsive={responsive}
                        autoplayHoverPause={false}
                        autoplay={true}
                        smartSpeed={1000}
                        responsiveClass={true}
                    >
                        <div className="col-md-4 col-sm-4">
                            <div className="item">
                                <div className="tst-image">
                                    <Image src="/images/tst-image1.jpg" className="img-responsive" width={100} height={100} alt="" />
                                </div>
                                <div className="tst-author">
                                    <h4>Jackson</h4>
                                    <span>Shopify Developer</span>
                                </div>
                                <p>You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!</p>
                                <div className="tst-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>

                </div>
            </div>
        </div>
    )
}