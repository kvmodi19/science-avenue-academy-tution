import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            "name": "SHIKHA PARIHAR",
            "description": "nice coaching",
            "class": 9
        },
        {
            "name": "KHUSHBOO SINGH",
            "description": "nice coaching",
            "class": 9
        },
        {
            "name": "NIYA PATEL",
            "description": "nice coaching",
            "class": 9
        },
        {
            "name": "ANANY SRIVASTAVA",
            "description": "nice coaching",
            "class": 10
        },
        {
            "name": "VISHWA THAKOR",
            "description": "Very Good atmosphere... awesome teachers n teaching...",
            "class": 10
        },
        {
            "name": "SAKSHI NAYAK",
            "description": "nice coaching",
            "class": 12
        },
        {
            "name": "VIDHI PATEL",
            "description": "nice coaching",
            "class": 12
        },
        {
            "name": "DIYA PARMAR",
            "description": "nice coaching",
            "class": 12
        },
        {
            "name": "TRUPTI  SOTKAR",
            "description": "nice coaching",
            "class": 12
        },
        {
            "name": "AYUSH PATEL",
            "description": "nice coaching",
            "class": 9
        },
        {
            "name": "ARADHYA SHRIVASTAVA",
            "description": "nice coaching",
            "class": 9
        }
    ];
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
                        {
                            reviews.map((review) => (
                                <div className="col-md-4 col-sm-4" key={review.name}>
                                    <div className="item">
                                        <div className="tst-image">
                                            <Image src={`${process.env.BASE_PATH}/images/${review?.name?.toLocaleUpperCase()}.jpeg`} className="img-responsive" width={100} height={100} alt="" />
                                        </div>
                                        <div className="tst-author">
                                            <h4>{review.name}</h4>
                                            <span>{review.class}</span>
                                        </div>
                                        <p>{review.description}</p>
                                        {/* <div className="tst-rating">
                                            <i className="fa fa-star">
                                                <FontAwesomeIcon icon={faStar} height={10} />
                                            </i>
                                            <i className="fa fa-star">
                                                <FontAwesomeIcon icon={faStar} height={10} />

                                            </i>

                                            <FontAwesomeIcon icon={faStar} height={10} />
                                            <i className="fa fa-star">
                                                <FontAwesomeIcon icon={faStar} height={10} />

                                            </i>
                                            <i className="fa fa-star">
                                                <FontAwesomeIcon icon={faStar} height={10} />

                                            </i>
                                            <i className="fa fa-star">
                                                <FontAwesomeIcon icon={faStar} height={10} />

                                            </i>
                                        </div> */}
                                    </div>
                                </div>
                            ))

                        }

                    </OwlCarousel>

                </div>
            </div>
        </div>
    )
}