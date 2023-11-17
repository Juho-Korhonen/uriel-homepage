import NavBar from "../inclusive/NavBar"
import ReactGA from 'react-ga';
import { useState, useEffect } from "react";

export function ContactPage(){
    document.title = "Uriel - Ota yhteyttä"
    const [mobile, setMobile] = useState(window.innerWidth <= 500);
    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 500);
    }
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
        ReactGA.event({
            category: 'pageOpened',
            action: 'contact page opened',
        })
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[])


    return !mobile ? (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Ota yhteyttä Uriel Tekoäly Chat kehittäjiin"></meta>
                <meta name="keywords" content="uriel, tekoäly, yhteydenotto"></meta>
                <meta name="robots" content="index, follow"></meta>
            </head>
            <body>
                <header>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 100, paddingTop:150, alignSelf: 'flex-start'}}>
                    <h1>Ota yhteyttä meihin</h1>
                    <p>Voit ottaa meihin vapaasti yhteyttä antaaksesi palautetta, raportoidaksesi bugeja, tai kysyäksesi muista Uriel Tekoäly Chattiin liittyvistä asioista.</p>
                    <p>Email: yhteydenotto@urielai.com</p>
                </main>
            </body>
        </html>
    ):
    (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Tutustu Uriel Tekoälyyn, suomalaisiin tarpeisiin suunniteltuun älykkääseen tekoäly-chat-palveluun. Saat ohjeita, suosituksia, reseptejä ja paljon muuta! Uriel on henkilökohtainen assistenttisi aina puhelimessasi. Lataa ilmainen sovellus ja säästä aikaa, rahaa ja vaivaa arjen askareissa."></meta>
                <meta name="keywords" content="tekoäly, suomi, ai, uriel"></meta>
                <meta name="robots" content="index, follow"></meta>
            </head>
            <body style={{flexDirection: 'column', flex: 1}}>
                <header style={{width: '100%' }}>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 50, alignSelf: 'flex-start'}}>
                    <h1>Ota yhteyttä meihin</h1>
                    <p>Voit ottaa meihin vapaasti yhteyttä antaaksesi palautetta, raportoidaksesi bugeja, tai kysyäksesi muista Uriel Tekoäly Chattiin liittyvistä asioista.</p>
                    <p>Email: yhteydenotto@urielai.com</p>
                </main>
            </body>
        </html>
    )
}