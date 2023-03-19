import Image from "next/image"
import dynamic from "next/dynamic";
import getConfig from 'next/config'; 
const { publicRuntimeConfig } = getConfig();

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    (window as any).$ = (window as any).jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default function Gallary() {
    const images = [
        '/images/gallary/DSC00166_1.JPG',
        '/images/gallary/DSC00166.JPG',
        '/images/gallary/DSC00169_1.JPG',
        '/images/gallary/DSC00169.JPG',
        '/images/gallary/DSC00172.JPG',
        '/images/gallary/DSC00175.JPG',
        '/images/gallary/DSC00176.JPG',
        '/images/gallary/DSC00183.JPG',
        '/images/gallary/DSC00184.JPG',
        '/images/gallary/DSC00187.JPG',
        '/images/gallary/DSC00196.JPG',
        '/images/gallary/DSC00198.JPG',
        '/images/gallary/DSC00203.JPG',
    ];
    const responsive = {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="section-title">
                        <h2>Gallary</h2>
                    </div>
                    <OwlCarousel className="owl-carousel owl-theme" margin={10}
                        animateOut="fadeOut"
                        loop={true}
                        responsive={responsive}
                        autoplayHoverPause={false}
                        autoplay={true}
                        smartSpeed={1000}
                        responsiveClass={true}
                    >
                        {
                            images.map((image, key) => (
                                <div className="item" key={key}>
                                    <Image
                                        src={`${publicRuntimeConfig.staticFolder || ''}${image}`}
                                        width={100}
                                        height={200}
                                        alt={image}
                                        className="gallary-image"
                                    />
                                </div>
                            ))
                        }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}