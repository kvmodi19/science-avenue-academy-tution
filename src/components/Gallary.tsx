import Image from "next/image"
import dynamic from "next/dynamic";
import getConfig from 'next/config';
import { firebase_app, storage } from "../lib/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const { publicRuntimeConfig } = getConfig();

const db = storage;


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    (window as any).$ = (window as any).jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default function Gallary() {
    const images = [
        'images/gallary/admission_info_1.jpeg',
        '/images/gallary/admission_info_2.jpeg',
        '/images/gallary/admission_info_3.jpeg',
        '/images/gallary/admission_info_4.jpeg',
        '/images/gallary/admission_info_5.jpeg',
        '/images/gallary/admission_info_6.jpeg',
        '/images/gallary/admission_info_7.jpeg',
        '/images/gallary/admission_info_8.jpeg',
        '/images/gallary/admission_info_9.jpeg',
        '/images/gallary/admission_info_10.jpeg',
        '/images/gallary/admission_info_11.jpeg',
        '/images/gallary/admission_info_12.jpeg',
        '/images/gallary/admission_info_13.jpeg',
        '/images/gallary/assignments.jpeg',
        '/images/gallary/assignments-1.jpeg',
        '/images/gallary/classes.jpeg',
        '/images/gallary/classes-1.jpeg',
        '/images/gallary/classes-2.jpeg',
        '/images/gallary/classes-3.jpeg',
        '/images/gallary/classes-4.jpeg',
        '/images/gallary/classes-5.jpeg',
        '/images/gallary/classes-6.jpeg',
        '/images/gallary/classes-7.jpeg',
        '/images/gallary/classes-8.jpeg',
        '/images/gallary/show_pices.jpeg',
        '/images/gallary/hording.jpeg ',
        '/images/gallary/office.jpeg ',
        '/images/gallary/outside_view.jpeg ',
        '/images/gallary/outside_view_1.jpeg ',
        '/images/gallary/outside_view_2.jpeg ',
        '/images/gallary/outside_view_3.jpeg ',
        '/images/gallary/pemplate.jpeg',
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
                                        src={`${image}`}
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

