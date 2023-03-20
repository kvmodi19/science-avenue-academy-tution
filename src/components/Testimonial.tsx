import dynamic from 'next/dynamic';
import Image from 'next/image';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

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
            "description": "Science avenue tution classes is a very nice classes for me. I have improved myself becz of the quality of study in this classes....",
            "class": 9
        },
        {
            "name": "KHUSHBOO SINGH",
            "description":  `Excellent teaching of Dr. Gopi mam she is a brilliant teacher must say
            Every lecture goes on having too much fun learning...`,
            "class": 9
        },
        {
            "name": "NIYA PATEL",
            "description": "The way of teaching is extremely awesome she is gem of person!!! Very cooperative I love her way of teaching...",
            "class": 9
        },
        {
            "name": "ANANY SRIVASTAVA",
            "description": `I have been in this tution for 2 years and the teachers are very nice, sweet and funny
            Good quality education and proper teaching....`,
            "class": 10
        },
        {
            "name": "VISHWA THAKOR",
            "description": "Very Good atmosphere... awesome teachers n teaching...",
            "class": 10
        },
        {
            "name": "SAKSHI NAYAK",
            "description": "The faculty is great and very experienced. They all understand our difficulties and make us work upon them. We are provided with knowledge and practice...",
            "class": 12
        },
        {
            "name": "VIDHI PATEL",
            "description": "Highly qualified teacher who taught biology to top rankers of vadodara in NEET, I strongly recommend science avenue academy for all medical entrance",
            "class": 12
        },
        {
            "name": "DIYA PARMAR",
            "description": "The way gopi ma'am teaches, she knows how to teach and how to remember it! She teaches whole concept very well! She is friendly and very supportive",
            "class": 12
        },
        {
            "name": "TRUPTI  SOTKAR",
            "description": `Quality teaching
            Best classes in vadsar vadodara
            Experienced faculties makes study easy`,
            "class": 12
        },
        {
            "name": "AYUSH PATEL",
            "description": "Experienced faculties, best classes in vadodara, that gives personal attention on each student...",
            "class": 9
        },
        {
            "name": "ARADHYA SHRIVASTAVA",
            "description": "Wonderful Team led by Gopi Ma'am. Have had a wonderful time working with them. Highly recommended.",
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
                                            <Image src={`${publicRuntimeConfig.staticFolder || ''}/images/${review?.name?.toLocaleUpperCase()}.jpeg`} className="img-responsive" width={100} height={100} alt="" />
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