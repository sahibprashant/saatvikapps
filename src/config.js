import carrykar1 from '../src/assets/worksnaps/carrykar1.png';
import carrykar2 from '../src/assets/worksnaps/carrykar2.png';
import carrykar3 from '../src/assets/worksnaps/carrykar3.png';
import globaldreams1 from '../src/assets/worksnaps/globaldreams1.png';
import globaldreams2 from '../src/assets/worksnaps/globaldreams2.png';
import musicapp1 from '../src/assets/worksnaps/musicapp1.png';
import musicapp2 from '../src/assets/worksnaps/musicapp2.png';
import musicapp3 from '../src/assets/worksnaps/musicapp3.png';
import googlebusiness from '../src/assets/googlebusiness.jpg';
import personalsite from '../src/assets/personalsite.jpg';
import flatpg from '../src/assets/flatpg.png';
import workinfo from '../src/assets/workinfo.png';
import interior from '../src/assets/interior.png';

//product demo images
import demo_flatpg1 from '../src/assets/demo/demo-flatpg1.png';
import demo_flatpg2 from '../src/assets/demo/demo-flatpg2.png';
import demo_interior1 from '../src/assets/demo/demo-interior1.png';
import demo_interior2 from '../src/assets/demo/demo-interior2.png';
import demo_otherwork1 from '../src/assets/demo/demo-otherwork1.png';
import demo_otherwork2 from '../src/assets/demo/demo-otherwork2.png';
import demo_personalsite from '../src/assets/demo/demo-personalsite.png';
import demo_store1 from '../src/assets/demo/demo-store1.png';
import demo_store2 from '../src/assets/demo/demo-store2.png';

const config = {
    title: 'Website and Mobile Apps Development',
    title_quote: 'Keeping Equality in heart is the way to live life!',
    title_quote_second: 'Keeping Equality in heart is the way to live life!',
    name: 'Saatvik',
    second_name: 'Apps',
    logo_img: '../assets/logo.png',
    intro_heading: 'Websites and Mobile Apps Development',
    intro_short: 'NIT/IITs passed-out group of developers from India, we develop high quality Mobile Apps and Websites in latest technologies available.',
    intro_long: 'We are a Group of Software developers work together on Projects and deliver the best together, we are passed out from NITs and IITs having Industries based working experience as well. We develop Websites & Android/IOS Mobile Applications for Startups & business. We use latest technologies available in the market as an ingredient to give life to your idea/product. We have a good past experience in this field and have developed a lot of products for new startups. We welcome every kind of software related needs from simple personal website to complex management software or mobile applications which aims to target millions of users.',
    short_message: 'Android Native Hybrid & Web Applications',
    short_message_second: 'Quality is our main concern!',
    about_me: 'We develop Qualtiy Apps',
    work: 'What We are Good At',
    our_work_desc: 'We serve for all kind of Software Application needs, expert in developing Products for Startups/Businesses, Personal Websites, Portfolios, College/Universities Websites, Freelance Work Websites, E-Commerce App/Website, Payment Apps & Music Apps. Checkout some of our work sample images given below.',
    workImages: [
        {
            src: globaldreams1,
            width: 1600,
            height: 900,
        },
        {
            src: globaldreams2,
            width: 1600,
            height: 900,
        },
        {
            src: carrykar1,
            width: 900,
            height: 900
        },
        {
            src: carrykar2,
            width: 900,
            height: 900
        },
        {
            src: carrykar3,
            width: 900,
            height: 900,
        },
        {
            src: musicapp1,
            width: 900,
            height: 1600
        },
        {
            src: musicapp2,
            width: 900,
            height: 1600
        },
        {
            src: musicapp3,
            width: 900,
            height: 1600
        },
    ],
    products : 'Ready to serve Projects',
    products_desc : 'To fulfil your software requirements immediately we have developed fully & easy to customise projects. We have Personal-Work WebApps/Porfolios, Restuarants/Food-Store WebApps, PGs/Flats WebApps etc. <b>We sell these products at minimum possible cost with Free Personal Domain and 6 months of Free WebHosting (save around 2.5k).</b> Do not wait grab the deal now, contact us for more information.',
    products_list: [
        {
            id : 1,
            name : 'Google Business Listing',
            header_img : googlebusiness,
            description : 'You run a business or have store, list it on Google!! People can find you then through Google Search as well, its a best and simple way to promote your business globally and reach more customers.',
            price : 2000,
            demo_images : [demo_personalsite],
        },
        {
            id : 2,
            name : 'PG/Flats on Rent Webapp',
            header_img : flatpg,
            description : 'You run PG/Flats business? Create a website for your work, list all the PGs, Flats, and Properties availble at one place and promote your business easily. You can create your own traffic by sharing your site to your customers. Give your business a professional look!',
            price : 8500,
            demo_images : [demo_flatpg2, demo_flatpg1],
        },
        {
            id : 3,
            name : 'Interior Designer Webapp',
            header_img : interior,
            description : 'Give your work a digital perssence. List the design products, prices & offers on your website and get customers online.',
            price : 8500,
            demo_images : [demo_interior2, demo_interior1],
        },
        {
            id : 4,
            name : 'Personal Website/Portfolio',
            header_img : personalsite,
            description : 'With your Personal Website you can showcase yourself and skills which you have. Simply share your site with people or HR at companies to grab information about you and your work as well.',
            price : 3000,
            demo_images : [demo_personalsite],
        },
        {
            id : 5,
            name : 'Work Information Webapp',
            header_img : workinfo,
            description : 'Single Page Websites are very useful for business as it gives your work a digital pressence, list the services which you provides and other important business related information at one place.',
            price : 8500,
            demo_images : [demo_otherwork1, demo_otherwork2],
        },
        // {
        //     id : 5,
        //     name : 'Food-Store Webapp',
        //     header_img : musicapp1,
        //     description : 'Give your restuarent or food-store a digital perssence. List the food products, prices & offers on your website and get food orders from customers online.',
        //     price : 8500,
        //     demo_images : demo_interior2,
        // },
    ],
    contact: 'Ways to Contact Us',
    contact_me_desc: 'You can reach us by any means mentioned below, we are always ready to serve our clients. Feel free to contact us anytime!',
    contact_mail: 'sahibprashant@gmail.com',
    contact_number: '+91-7734085350',
    contact_profiles: {
        fiverr: {
            name: 'Fiverr',
            link: '',    //link to your profile page
            profileName: 'Fiverr',
            enable: false,  //false will remove this from website
        },
        instagram: {
            name: 'Instagram',
            link: '',
            profileName: 'Instagram',
            enable: false,
        },
        facebook: {
            name: 'Facebook',
            link: '',
            profileName: 'Facebook',
            enable: false,
        },
        youtube: {
            name: 'Youtube',
            link: '',
            profileName: 'Youtube',
            enable: false,
        }
    },
    primaryColor: '#2E2E35',
    primaryColorDark: '#2B2B34',
    yellow: '#d69a34',
    textColor: '#dadada',
}

export default config