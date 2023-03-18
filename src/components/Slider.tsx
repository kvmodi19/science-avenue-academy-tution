import React from "react"
import dynamic from "next/dynamic";
import Link from "next/link";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    (window as any).$ = (window as any).jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default function Slider() {

    const programs = [
        {
            name: 'Creative Development & Program',
            description: `need to change`
        },
        {
            name: 'Limited Students Per Batch',
            description: `need to change`
        },
        {
            name: 'Quality Education by Experience Faculties',
            description: `need to change`
        },
        {
            name: 'Regular Test & Revision',
            description: `need to change`
        },
    ]
    return (
        <div className="row">
            <OwlCarousel
                className="owl-carousel owl-theme home-slider"
                items={1}
                animateOut="fadeOut"
                loop={true}
                dots={false}
                autoplayHoverPause={false}
                autoplay={true}
                smartSpeed={1000}
            >
                <div className="item item-first">
                    <div className="caption">
                        <div className="container">
                            <div className="col-md-6 col-sm-12">
                                {/* <h1>Creative Development & Program</h1>
                                <h3>Our online courses are designed to fit in your industry supporting all-round with latest technologies.</h3>
                                <Link href="#feature" className="section-btn btn btn-default smoothScroll">Discover more</Link> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item item-second">
                    <div className="caption">
                        <div className="container">
                            <div className="col-md-6 col-sm-12">
                                {/* <h1>Start your journey with our practical courses</h1>
                                <h3>Our online courses are built in partnership with technology leaders and are designed to meet industry demands.</h3>
                                <Link href="#courses" className="section-btn btn btn-default smoothScroll">Take a course</Link> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item item-third">
                    <div className="caption">
                        <div className="container">
                            <div className="col-md-6 col-sm-12">
                                {/* <h1>Efficient Learning Methods</h1>
                                <h3>Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque eu ex eu urna venenatis sollicitudin ut at libero. Visit <Link rel="nofollow" href="https://www.facebook.com/templatemo">templatemo</Link> page.</h3>
                                <Link href="#contact" className="section-btn btn btn-default smoothScroll">Let's chat</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}