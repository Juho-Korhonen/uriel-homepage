import NavBar from "../inclusive/NavBar"
import ReactGA from 'react-ga4';
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
export function ContactPage(){
    const [mobile, setMobile] = useState(window.innerWidth <= 800);
    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 800);
    }
    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname
        })
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[])


    return !mobile ? (
        <div>
            <Helmet prioritizeSeoTags>
                <meta name="description" content="Ota yhteyttä Uriel Tekoäly Chat kehittäjiin, tai anna palautetta tms"></meta>
                <meta name="keywords" content="uriel, tekoäly, yhteydenotto"></meta>
                <meta name="robots" content="index, follow"></meta>
                <title>Uriel Tekoäly Chat - Ota Yhteyttä</title>
            </Helmet>
            <div>
                <header>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 100, paddingTop:150, alignSelf: 'flex-start'}}>
                    <h1>Ota yhteyttä meihin</h1>
                    <p>Voit ottaa meihin vapaasti yhteyttä antaaksesi palautetta, raportoidaksesi bugeja, tai kysyäksesi muista Uriel Tekoäly Chattiin liittyvistä asioista.</p>
                    <p>Email: yhteydenotto@urielai.com</p>
                </main>
            </div>
        </div>
    ):
    (
        <div>
            <Helmet prioritizeSeoTags>
                <meta name="description" content="Ota yhteyttä Uriel Tekoäly Chat kehittäjiin, tai anna palautetta tms"></meta>
                <meta name="keywords" content="uriel, tekoäly, yhteydenotto"></meta>
                <meta name="robots" content="index, follow"></meta>
                <title>Uriel Tekoäly Chat - Ota Yhteyttä</title>
            </Helmet>
            <div style={{flexDirection: 'column', flex: 1}}>
                <header style={{width: '100%' }}>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 50, alignSelf: 'flex-start', marginBottom: 200}}>
                    <h1>Ota yhteyttä meihin</h1>
                    <p>Voit ottaa meihin vapaasti yhteyttä antaaksesi palautetta, raportoidaksesi bugeja, tai kysyäksesi muista Uriel Tekoäly Chattiin liittyvistä asioista. Etsimme myös yhteistyökumppaneita, jos yhteistyö kiinnostaa, ota vapaasti yhteyttä!</p>
                    <p>Email: yhteydenotto@urielai.com</p>
                </main>
            </div>
        </div>
    )
}