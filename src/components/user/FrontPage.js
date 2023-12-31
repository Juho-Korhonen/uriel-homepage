import DallEImage1 from '../../assets/DallE/DallE1.png'
import DallEImage2 from '../../assets/DallE/DallE2.png'
import DallEImage3 from '../../assets/DallE/DallE3.png'
import DallEImage4 from '../../assets/DallE/DallE4.png'
import NavBar from '../inclusive/NavBar'
import ReactGA from 'react-ga4';


import {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet-async'

export function FrontPage(){
    const [chosenImage, setChosenImage] = useState('')
    const [mobile, setMobile] = useState(window.innerWidth <= 800);

    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 800);
    }

    function getLinkBasedOnDevice(){
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIOS) {
            return 'https://apps.apple.com/fi/app/uriel-teko%C3%A4ly-chat/id6451487039'
          } else {
              return 'https://play.google.com/store/apps/details?id=com.juho_korhonen.UrielChat'
  
          }
    }

    const handleButtonClick = () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIOS) {
          // Redirect to the iOS-specific link
            ReactGA.event({
                category: 'iosButton',
                action: 'redirect to iOS install from button press',
                label: 'iOS redirect to install'
            })
          window.open('https://apps.apple.com/fi/app/uriel-teko%C3%A4ly-chat/id6451487039', '_blank');
        } else {
            ReactGA.event({
                category: 'androidButton',
                action: 'redirect to android install from button press',
                label: 'android redirect to install'
            })
            window.open('https://play.google.com/store/apps/details?id=com.juho_korhonen.UrielChat', '_blank');

        }
      };



    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname
        })
        const images = [DallEImage1, DallEImage2, DallEImage3, DallEImage4]
        setChosenImage(images[Math.floor(Math.random() * images.length)])
        setInterval(() => {
            setChosenImage(images[Math.floor(Math.random() * images.length)])
        },10000)

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[])






    return !mobile ? (
        <div>
            <Helmet prioritizeSeoTags>
                <meta name="description" content="Tutustu Uriel Tekoälyyn, suomalaisiin tarpeisiin suunniteltuun älykkääseen tekoäly-chat-palveluun. Saat ohjeita, suosituksia, reseptejä ja paljon muuta! Uriel on henkilökohtainen assistenttisi aina puhelimessasi. Lataa ilmainen sovellus ja säästä aikaa, rahaa ja vaivaa arjen askareissa."></meta>
                <meta name="keywords" content="tekoäly, suomi, ai, uriel"></meta>
                <meta name="robots" content="index, follow"></meta>
                <title>Uriel Tekoäly Chat - Etusivu</title>
            </Helmet>
            <div>
                <header>
                    <NavBar/>
                </header>
                <div style={{flexDirection: 'row', display: 'flex', flex:1, padding: 50, paddingTop: 100}}>
                    <div style={{display: 'block'}}>
                            <h1 style={{
                                fontSize: 50
                            }}>
                                Uriel Tekoäly Chat
                            </h1>

                            <main>
                                <article>
                                    <h2>Mikä on Uriel Tekoäly Chat</h2>
                                    <p>
                                        Tervetuloa tutustumaan <a href={getLinkBasedOnDevice()} style={{color: '#3944FF'}} rel='noreferrer' target='_blank'>Uriel Tekoälyyn</a>, suomalaisiin tarpeisiin räätälöityyn älykkääseen tekoäly-chat palveluun.
                                        <br/>Uriel Tekoäly on uusimpaan tekoälyteknologiaan perustuva tekoälypalvelu, joka kykenee antamaan tekstin kautta esimerkiksi ohjeita, suosituksia, kirjoituksia, reseptejä, ja paljon muuta!
                                        <br/>Voit ajatella Uriel Tekoälyä henkilökohtaisena assistenttinasi, joka on aina saatavilla puhelimessasi sovelluksemme kautta.
                                        <br/>Uriel Tekoäly Chatin käyttöliittymässä on panostettu helppokäyttöisyyteen ja intuitiivisuuteen, joten sen käyttö alkaa sujumaan nopeasti.
                                    </p>
                                </article>

                                <article>
                                    <h2>Miksi Uriel Tekoäly on tehty, ja miten se voi auttaa sinua?</h2>
                                    <p>
                                        Uriel Tekoäly Chat on työkalu, joka on luotu auttamaan suomalaisia jokapäiväisissä tehtävissä kuten sopivien ruokareseptien etsimisessä, pitkien viestien kirjoittamisessa, tiedonahaussa, kotitehtävien tekemisessä, ja lukemattomissa muissa asioissa!
                                        Voit kysyä tekoälyltä esimerkiksi sinun ruokavalioon, allergioihin, ja tottumuksiin räätälöidyt ruoanlaittoohjeet. Tekoäly vastaa hetkessä, ja kirjoittaa halutessasi uuden muokatun vastauksen.
                                        <br/>Tekoälyn hyödyt ovat lukemattomat, voit säästää aikaa, rahaa ja vaivaa käyttämällä moderneja tekoälypalveluita kuten Uriel Tekoälyä.
                                        <br/>Oletko kuullut tarpeeksi? Hyppää mukaan tuhansien tyytyväisten suomalaisten joukkoon ja säästä aikaa, rahaa ja vaivaa käyttämällä Uriel Tekoäly Chattia!
                                    </p>
                                    <button onClick={handleButtonClick}>Lataa täysin ilmainen sovellus nyt!</button>
                                </article>
                            </main>
                    </div>
                    <figure style={{width: '100%', paddingTop: 50}}>
                        <img src={chosenImage} style={{width: 500 }} alt="Tekoälyn generoimaa taidetta" />
                        <figcaption>Tekoälyn generoimaa taidetta</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    ):(
        <div>
            <Helmet prioritizeSeoTags>
                <meta name="description" content="Tutustu Uriel Tekoälyyn, suomalaisiin tarpeisiin suunniteltuun älykkääseen tekoäly-chat-palveluun. Saat ohjeita, suosituksia, reseptejä ja paljon muuta! Uriel on henkilökohtainen assistenttisi aina puhelimessasi. Lataa ilmainen sovellus ja säästä aikaa, rahaa ja vaivaa arjen askareissa."></meta>
                <meta name="keywords" content="tekoäly, suomi, ai, uriel"></meta>
                <meta name="robots" content="index, follow"></meta>
                <title>Uriel Tekoäly Chat - Etusivu</title>
            </Helmet>
            <div>
                <div style={{flexDirection: 'column'}}>
                <header>
                        <NavBar/>
                </header>
                <div style={{flexDirection: 'column', display: 'flex', flex:1, padding: 50, paddingTop: 60}}>
                    <h1 style={{
                        fontSize: 50,
                        textAlign: 'center'
                    }}>
                        Uriel Tekoäly Chat
                    </h1>

                    <main style={{textAlign: 'center'}}>
                    <article>
                        <h2>Mikä on Uriel Tekoäly Chat</h2>
                        <p>
                            Tervetuloa tutustumaan <a href={getLinkBasedOnDevice()} style={{color: '#3944FF'}} rel='noreferrer' target='_blank'>Uriel Tekoälyyn</a>, suomalaisiin tarpeisiin räätälöityyn älykkääseen tekoäly-chat palveluun.
                            <br/>Uriel Tekoäly on uusimpaan tekoälyteknologiaan perustuva tekoälypalvelu, joka kykenee antamaan tekstin kautta esimerkiksi ohjeita, suosituksia, kirjoituksia, reseptejä, ja paljon muuta!
                            <br/>Voit ajatella Uriel Tekoälyä henkilökohtaisena assistenttinasi, joka on aina saatavilla puhelimessasi sovelluksemme kautta.
                            <br/>Uriel Tekoäly Chatin käyttöliittymässä on panostettu helppokäyttöisyyteen ja intuitiivisuuteen, joten sen käyttö alkaa sujumaan nopeasti.
                        </p>
                    </article>

                    <article>
                        <h2>Miksi Uriel Tekoäly on tehty, ja miten se voi auttaa sinua?</h2>
                        <p>
                            Uriel Tekoäly Chat on työkalu, joka on luotu auttamaan suomalaisia jokapäiväisissä tehtävissä kuten sopivien ruokareseptien etsimisessä, pitkien viestien kirjoittamisessa, tiedonahaussa, kotitehtävien tekemisessä, ja lukemattomissa muissa asioissa!
                            Voit kysyä tekoälyltä esimerkiksi sinun ruokavalioon, allergioihin, ja tottumuksiin räätälöidyt ruoanlaittoohjeet. Tekoäly vastaa hetkessä, ja kirjoittaa halutessasi uuden muokatun vastauksen.
                            <br/>Tekoälyn hyödyt ovat lukemattomat, voit säästää aikaa, rahaa ja vaivaa käyttämällä moderneja tekoälypalveluita kuten Uriel Tekoälyä.
                            <br/>Oletko kuullut tarpeeksi? Hyppää mukaan tuhansien tyytyväisten suomalaisten joukkoon ja säästä aikaa, rahaa ja vaivaa käyttämällä Uriel Tekoäly Chattia!
                        </p>
                        <button onClick={handleButtonClick}>Lataa täysin ilmainen sovellus nyt!</button>
                    </article>
                    </main>
                </div>
                </div>
            </div>
        </div>
    )
}