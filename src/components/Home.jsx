import React, { useState, useRef } from 'react';
import {
    Link,
} from 'react-router-dom';
import '../styles/Home.css'
import { useMediaQuery } from 'react-responsive';
import ProductCard from '../components/ProductCard';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import config from '../config';
import coverimg from '../assets/logo.png';
import contact from '../assets/phone.png';
import email from '../assets/email.png';
import insta from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import fiverr from '../assets/fiverr.png';
import youtube from '../assets/youtube.png';
import upArrow from '../assets/uparrow.png';
import aboutImg from "../assets/about-back2.png";

function Home() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [index, setIndex] = useState(-1);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const offersRef = useRef(null);
    const contactRef = useRef(null);
    const topRef = useRef(null);

    const moveToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const moveToWork = () => {
        workRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const moveToOffers = () => {
        offersRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const moveToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const moveToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={`container${isTabletOrMobile ? '-mobile' : ''}`}>
            <div ref={topRef} className={`header${isTabletOrMobile ? '-mobile' : ''}`} style={{ backgroundColor: config.primaryColor }}>
                <div className={`nameLogo-div${isTabletOrMobile ? '-mobile' : ''}`}>
                    <h1 className={`nameLogo${isTabletOrMobile ? '-mobile' : ''}`}>{config.name}</h1>
                    <h1 className={`nameLogo-i${isTabletOrMobile ? '-mobile' : ''}`}>{config.second_name}</h1>
                </div>
                <p className={`title-om${isTabletOrMobile ? '-mobile' : ''}`}>ॐ</p>
                <div className={`header-links${isTabletOrMobile ? '-mobile' : ''}`}>
                    <a id="about" onClick={moveToAbout}>About</a>
                    <a id="work" style={{
                        display: isTabletOrMobile ? 'none' : 'block'
                    }} onClick={moveToWork}>Work</a>
                    <a id="offers" onClick={moveToOffers}>Offers</a>
                    <a id="contacts" style={{
                        display: isTabletOrMobile ? 'none' : 'block'
                    }} onClick={moveToContact}>Contacts</a>
                </div>
            </div>
            <div className={`cover${isTabletOrMobile ? '-mobile' : ''}`} style={{ backgroundColor: config.primaryColor }}>
                <div className={`cover-name${isTabletOrMobile ? '-mobile' : ''}`}>
                    <p className={`heading-large${isTabletOrMobile ? '-mobile' : ''}`} style={{ color: '#e4aa48' }}>{config.short_message}</p>
                    <p className={`heading-large${isTabletOrMobile ? '-mobile' : ''}`}>{config.short_message_second}</p>
                    <button onClick={moveToContact} className={`contactButton${isTabletOrMobile ? '-mobile' : ''}`}>Contact Us</button>
                </div>
                <div className={`cover-img${isTabletOrMobile ? '-mobile' : ''}`}>
                    <img src={coverimg} />
                    <div className={`cover-img-name${isTabletOrMobile ? '-mobile' : ''}`}>
                        {/* <h1 className={`title-quote${isTabletOrMobile ? '-mobile' : ''}`}>{config.title_quote}</h1> */}
                        <h1 className={`title-quote-second${isTabletOrMobile ? '-mobile' : ''}`}>{config.title_quote_second}</h1>
                    </div>
                </div>
                <div className={`cover-content${isTabletOrMobile ? '-mobile' : ''}`} >
                    <p className={`heading-small${isTabletOrMobile ? '-mobile' : ''}`}>Introduction</p>
                    <p className={`heading-large${isTabletOrMobile ? '-mobile' : ''}`} >{config.intro_heading}</p>
                    <p>{config.intro_short}</p>
                </div>
            </div>
            <div ref={aboutRef} className={`section${isTabletOrMobile ? '-mobile' : ''}`} style={{ backgroundColor: config.primaryColorDark }}>
                <p className={`heading-small${isTabletOrMobile ? '-mobile' : ''}`}>About Us</p>
                <p className={`section-main-text${isTabletOrMobile ? '-mobile' : ''}`}>{config.about_me}</p>
                <div className={`section-sub${isTabletOrMobile ? '-mobile' : ''}`}>
                    <img src={aboutImg} />
                    <p>{config.intro_long}</p>
                </div>

            </div>
            <div ref={workRef} className={`section${isTabletOrMobile ? '-mobile' : ''}`} style={{ backgroundColor: config.primaryColor }}>
                <p className={`heading-small${isTabletOrMobile ? '-mobile' : ''}`}>Our Work</p>
                <p className={`section-main-text${isTabletOrMobile ? '-mobile' : ''}`}>{config.work}</p>
                <div className={`section-sub${isTabletOrMobile ? '-mobile' : ''}`}>
                    <p>{config.our_work_desc}</p>
                </div>
                <div className={`workGallery${isTabletOrMobile ? '-mobile' : ''}`}>
                    <PhotoAlbum
                        layout="rows"
                        photos={config.workImages}
                        spacing={10}
                        onClick={(event, photo, index) => setIndex(index)}

                    />
                    <Lightbox
                        index={index}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={config.workImages}
                        plugins={[Fullscreen, Zoom]}
                    />
                </div>
            </div>
            <div className={`section${isTabletOrMobile ? '-mobile' : ''}`} style={{ backgroundColor: config.primaryColor }}>
                {/* <p className={`heading-small${isTabletOrMobile ? '-mobile' : ''}`}></p> */}
                <p className={`section-main-text${isTabletOrMobile ? '-mobile' : ''}`} style = {{color : config.yellow, fontSize : '25px'}}>{config.products}</p>
                <div className={`section-sub${isTabletOrMobile ? '-mobile' : ''}`}>
                    <p dangerouslySetInnerHTML={{ __html: config.products_desc }}></p>
                </div>
                <div className={`offers${isTabletOrMobile ? '-mobile' : ''}`}>
                    {
                        config.products_list.map((value, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    value={value}
                                    isTabletOrMobile={isTabletOrMobile}
                                    handleBuyClick={() => { moveToContact() }}
                                    type = {config.product_type}
                                />)
                        })
                    }
                </div>
                <p className={`contact-us-text${isTabletOrMobile ? '-mobile' : ''}`}>Note: Contact us to know more about the time estimation of development and development costing of your product/idea.</p>
            </div>
            <div ref={offersRef} className={`section${isTabletOrMobile ? '-mobile' : ''}`} style={{ backgroundColor: config.primaryColorDark }}>
                <p className={`heading-small${isTabletOrMobile ? '-mobile' : ''}`}>Offers for You</p>
                <p className={`section-main-text${isTabletOrMobile ? '-mobile' : ''}`}>{config.offers}</p>
                <div className={`section-sub${isTabletOrMobile ? '-mobile' : ''}`}>
                    <p dangerouslySetInnerHTML={{ __html: config.offers_desc }}></p>
                </div>
                <div className={`offers${isTabletOrMobile ? '-mobile' : ''}`}>
                    {
                        config.offers_list.map((value, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    value={value}
                                    isTabletOrMobile={isTabletOrMobile}
                                    handleBuyClick={() => { moveToContact() }}
                                    type = {config.offer_type}
                                />)
                        })
                    }
                </div>
            </div>
            <div ref={contactRef} className={`section${isTabletOrMobile ? '-mobile' : ''}`} style={{ backgroundColor: config.primaryColor }}>
                <p className={`heading-small${isTabletOrMobile ? '-mobile' : ''}`}>Contact Us</p>
                <p className={`section-main-text${isTabletOrMobile ? '-mobile' : ''}`}>{config.contact}</p>
                <div className={`section-sub${isTabletOrMobile ? '-mobile' : ''}`}>
                    <p>{config.contact_me_desc}</p>
                </div>
                <div className={`contactButtons${isTabletOrMobile ? '-mobile' : ''}`}>
                    <div className={`contact-button${isTabletOrMobile ? '-mobile' : ''}`}>
                        <img src={email} />
                        <p>{config.contact_mail}</p>
                    </div>
                    <div className={`contact-button${isTabletOrMobile ? '-mobile' : ''}`}>
                        <img src={contact} />
                        <p>{config.contact_number}</p>
                    </div >
                    {config.contact_profiles.facebook.enable &&
                        <a href={config.contact_profiles.facebook.link} target="_blank">
                            <div className={`contact-button${isTabletOrMobile ? '-mobile' : ''}`}>
                                <img src={facebook} />
                                <p>Facebook</p>
                            </div >
                        </a>
                    }
                    {config.contact_profiles.instagram.enable &&
                        <a href={config.contact_profiles.instagram.link} target="_blank">
                            <div className={`contact-button${isTabletOrMobile ? '-mobile' : ''}`}>
                                <img src={insta} />
                                <p>Instagram</p>
                            </div >
                        </a>
                    }
                    {config.contact_profiles.fiverr.enable &&
                        <a href={config.contact_profiles.fiverr.link} target="_blank">
                            <div className={`contact-button${isTabletOrMobile ? '-mobile' : ''}`}>
                                <img src={fiverr} />
                                <p>Fiverr</p>
                            </div >
                        </a>
                    }
                    {config.contact_profiles.youtube.enable &&
                        <a href={config.contact_profiles.youtube.link} target="_blank">
                            <div className={`contact-button${isTabletOrMobile ? '-mobile' : ''}`}>
                                <img src={youtube} />
                                <p>Youtube</p>
                            </div >
                        </a>
                    }
                </div>
            </div>

            <div className={`footer${isTabletOrMobile ? '-mobile' : ''}`}>
                <div onClick={moveToTop} className={`moveToTop-back${isTabletOrMobile ? '-mobile' : ''}`}>
                    <img className={`moveToTop${isTabletOrMobile ? '-mobile' : ''}`} src={upArrow} />
                </div>
                <div className={`copyright${isTabletOrMobile ? '-mobile' : ''}`}>
                    <p>Copyright @2022 All Rights Reserved</p>
                </div>
            </div>
        </div>

    )
}

export default Home