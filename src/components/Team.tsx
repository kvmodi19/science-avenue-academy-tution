import Image from 'next/image'
import Link from 'next/link';
import getConfig from 'next/config'; 
const { publicRuntimeConfig } = getConfig();
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Team() {

    const teachers = [
        {
            id: 1,
            name: 'Dr. Gopi Dalwadi (MD)',
            description: 'Founder',
            image: '/images/gopi-dalwadi.jpg'
        },
        {
            id: 2,
            name: 'Dr. Nirav Dalwadi',
            description: 'Co-Founder',
            image: '/images/nirav-dalwadi.jpg'
        },
    ]

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-sm-12">
                    <div className="section-title">
                        <h2>Teachers <small>Meet Professional Trainers</small></h2>
                    </div>
                </div>

                {teachers.map(teacher => (
                    <div className="col-md-4 col-sm-6" key={teacher.id}>
                        <div className="team-thumb">
                            <div className="team-image">
                                <Image src={`${publicRuntimeConfig.staticFolder || ''}${teacher.image}`} className="img-responsive" width={50} height={150} alt={teacher.name} />
                            </div>
                            <div className="team-info">
                                <h3>{teacher.name}</h3>
                                <span>{teacher.description}</span>
                            </div>
                            <ul className="social-icon">
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faFacebookSquare} height={20} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faTwitter} height={20} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faInstagram} height={20} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}