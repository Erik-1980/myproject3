import Header from './Header';
import Footer from './Footer';

export default function About (){
    return (
        <>
        <Header />
        <div className='mainpage'>
        <div className='about'>
            <h2>About Us</h2>
            <p>The <b>RELQ</b> company is the most famous chain of stores in the world of household appliances, electronics and household goods. The geography of the company's presence covers more than 400 cities and has more than 600 stores in different cities and regions of the world.</p>
            <p>The geography of the company includes 400 Cities 600 shops in different countries and cities of the world Along with this, <b>RELQ</b> is actively developing transnational franchising in a number of countries: Kyrgyzstan, Moldova, Armenia, Kazakhstan. The company pursues a retail strategy both offline and online. <b>RELQ</b> is a five-time winner of the Consumer Rights and Service Quality award, a three-time winner of the Brand No. 1 in the Region award (2012, 2014, 2016), as well as a winner of the Company of the Year 2012, HR Brand 2013 and two-time winner of the "Best Social Projects of the Region" award (2013, 2015).</p>
        </div>
        <div><img src='./image/mainpage.jpeg' width='90%'/></div>
        </div>
        <Footer />
        </>
    )
}