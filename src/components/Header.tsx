import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'

import * as _ from 'lodash';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons'


interface HomeProps {
    inView: string,
    onHeaderClick: (view: string) => void,
}

export default function Header({ inView, onHeaderClick }: HomeProps) {
    const [selectedTab, setSelectedTab] = useState('home');
    const [showMenu, setShowMenu] = useState(false);
    const [menuClass, setMenuClass] = useState('collapse');

    useEffect(() => {
        setSelectedTab(inView);
        console.log('inView', inView)
    }, [inView])

    const getActiveClass = (tab: string) => {
        // console.log('getActiveClass', tab)
        return tab === selectedTab ? 'active' : '';
    }

    const changeSelectedTab = (tab: string) => {
        setSelectedTab(tab);
        onHeaderClick(tab);
        toggleMenu();
    }

    const toggleMenu = () => {
        // setMenuClass('collapsing')
        setTimeout(() => {
            if(!showMenu) {
                setMenuClass('collapse in');
            } else {
                setMenuClass('collapse');
            }
                
            setShowMenu(!showMenu);
        })
    }

    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    <button className="navbar-toggle" onClick={() => toggleMenu() }>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                    </button>

                    {/* <!-- lOGO TEXT HERE --> */}
                    <Link href="/" className="navbar-brand">
                        <Image src="/images/logo.png" alt="" width={50} height={50} className="logo" />
                    </Link>
                </div>

                {/* <!-- MENU LINKS --> */}
                <div className={"navbar-collapse " + menuClass}>
                    <ul className="nav navbar-nav navbar-nav-first">
                        <li className={getActiveClass('home')}>
                            <Link href="#top" scroll={false} onClick={() => changeSelectedTab('home')}>
                                Home
                            </Link>
                        </li>
                        {/* <li className={getActiveClass('about')}>
                            <Link href="#about" scroll={false} onClick={() => changeSelectedTab('about')}>
                                About
                            </Link>
                        </li> */}
                        <li className={getActiveClass('team')}>
                            <Link href="#team" scroll={false} onClick={() => changeSelectedTab('team')}>
                                Our Teachers
                            </Link>
                        </li>
                        {/* <li className={getActiveClass('courses')}>
                            <Link href="#courses" scroll={false} onClick={() => changeSelectedTab('courses')}>
                                Courses
                            </Link>
                        </li> */}
                        <li className={getActiveClass('gallary')}>
                            <Link href="#gallary" scroll={false} onClick={() => changeSelectedTab('gallary')}>
                                Gallary
                            </Link>
                        </li>
                        <li className={getActiveClass('testimonial')}>
                            <Link href="#testimonial" scroll={false} onClick={() => changeSelectedTab('testimonial')}>
                                Reviews
                            </Link>
                        </li>
                        <li className={getActiveClass('contact')}>
                            <Link href="#contact" scroll={false} onClick={() => changeSelectedTab('contact')}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link href="#">
                                <span className="fa">
                                    <FontAwesomeIcon icon={faPhone} height={15} />
                                </span>
                                +91 89059 70710
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}