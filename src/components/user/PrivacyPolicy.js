import NavBar from "../inclusive/NavBar"
import ReactGA from 'react-ga4';
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";


export function PrivacyPolicy(){
    const [mobile, setMobile] = useState(window.innerWidth <= 500);
    const privacyPolicyText = `
    \nYksityisyytesi on meille äärimmäisen tärkeää.

    \n\nUriel Tekoäly Chat

    \nYleiskatsaus:

    Uriel Tekoäly Chat ("me", "meitä" tai "Uriel Tekoäly Chat") noudattaa yksityisyyttäsi koskevia periaatteita kerätessämme tietoja sovellustamme käyttäviltä henkilöiltä. 
    Tämä tietosuojakäytäntö koskee Uriel Tekoäly Chat -sovellusta ja määrittää, miten keräämme, käytämme ja jaamme käyttäjien antamia tunnistettavia henkilötietoja sovelluksen kautta. 
    Sitoudumme kunnioittamaan yksityisyyttäsi ja olemme laatineet tämän tietosuojakäytännön selventämään, millaisia tietoja voimme kerätä, 
    miten käytämme näitä tietoja ja millaisissa tilanteissa jaamme niitä kolmansille osapuolille. 
    Käytäntö koskee ainoastaan sovelluksen kautta kerättyjä tietoja eikä se kata muista lähteistä kerättyä tietoa.

    Tämä tietosuojakäytäntö yhdessä sovelluksessamme julkaistujen käyttöehtojen kanssa asettaa yleiset säännöt ja politiikat, jotka ohjaavat Uriel Tekoäly Chat -sovelluksen käyttöä. 
    Käyttötapojesi perusteella saatetaan vaatia suostumustasi lisäehtoihin ja -ehtoihin.

    Sovelluksen Kävijät:

    Kuten useimmat sovelluksen ylläpitäjät, Uriel Tekoäly Chat kerää ei-henkilökohtaisesti tunnistettavia tietoja, joita tyypillisesti tehdään saataville verkkoselaimilla ja palvelimilla, 
    kuten selaimen tyyppi, kieli-asetus, viittaava sivusto sekä vierailun päivämäärä ja aika. 
    Ei-henkilökohtaisten tunnistetietojen keräämisen pääasiallinen tarkoitus on saada parempi käsitys siitä, miten kävijät käyttävät Uriel Tekoäly Chat -sovellusta. 
    Ajoittain voimme julkaista ei-henkilökohtaisesti tunnistettavia tietoja yhteenvetona, esimerkiksi julkaisemalla raportteja sovelluksen käyttötrendeistä.

    Henkilökohtaisten tunnistetietojen kerääminen:

    Tietyt Uriel Tekoäly Chat -sovelluksen kävijät saattavat valita vuorovaikutustavan kanssamme siten, että henkilökohtaisesti tunnistettavia tietoja on kerättävä. 
    Kerättävien tietojen tyyppi ja määrä riippuvat vuorovaikutuksen luonteesta.

    Tietoturva:

    Henkilökohtaisten tietojesi tietoturva on meille ensiarvoisen tärkeää. 
    Vaikka pyrimme käyttämään kaupallisesti hyväksyttäviä keinoja suojataksemme henkilökohtaisia tietojasi, on tärkeää huomata, 
    ettei mikään lähetystapa internetin yli tai sähköinen tallennus ole 100-prosenttisesti turvallinen. 
    Emme voi taata täydellistä tietoturvaa.

    Mainokset:

    Uriel Tekoäly Chat -sovelluksessa näytettäviä mainoksia voivat toimittaa mainoskumppanit, jotka saattavat asettaa evästeitä. 
    Nämä evästeet mahdollistavat mainospalvelimen tunnistaa tietokoneesi aina, kun he lähettävät sinulle verkkomainoksen, 
    mikä mahdollistaa heidän kerätä tietoja sinusta tai muista tietokonettasi käyttävistä henkilöistä. 
    Mainosverkostojen keräämä tieto helpottaa kohdennettujen mainosten toimittamista, joiden he uskovat olevan sinulle kiinnostavia. 
    Tämä tietosuojakäytäntö kattaa yksinomaan Uriel Tekoäly Chat -sovelluksen evästeiden käytön eikä ulotu evästeiden käyttöön minkään mainostajan osalta.

    Linkit ulkoisille sivustoille:

    Uriel Tekoäly Chat -sovellus voi sisältää linkkejä ulkoisille sivustoille, joita emme hallinnoi me. 
    Kolmannen osapuolen linkkiä napsauttamalla sinut ohjataan kyseisen kolmannen osapuolen sivustoon. 
    Suosittelemme voimakkaasti tarkistamaan jokaisen vierailusi yksityisyydensuojan ja käyttöehtojen. 
    Emme valvo emmekä ota vastuuta minkään kolmannen osapuolen sivuston, tuotteen tai palvelun sisällöstä, tietosuojakäytännöistä tai käytännöistä.

    Yhteenvetotilastot:

    Uriel Tekoäly Chat voi kerätä tilastoja kävijöiden käyttäytymisestä sovelluksessaan. 
    Tällaisia tietoja voidaan esittää julkisesti tai luovuttaa muille. 
    Emme kuitenkaan paljasta mitään henkilökohtaisesti tunnistettavaa tietoa.

    Tietosuojakäytännön muutokset:

    Vaikka suurin osa muutoksista todennäköisesti on vähäisiä, Uriel Tekoäly Chat voi aika ajoin ja oman harkintansa mukaan muuttaa tietosuojakäytäntöään. 
    Kannustamme vierailijoita tarkistamaan tämän sivun säännöllisesti mahdollisten päivitysten varalta. 
    Jatkamalla Uriel Tekoäly Chat -sovelluksen käyttöä muutosten jälkeen hyväksyt tällaiset muutokset.
        `
    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 500);
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
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="uriel Tekoäly Chatin yksityisyyskäytäntö"></meta>
                <meta name="keywords" content="tekoäly, uriel, yksityisyys, tietosuoja, tietosuojakäytäntö"></meta>
                <meta name="robots" content="index, follow"></meta>
                <title>Uriel - Yksityisyys</title>
            </Helmet>
            <div>
                <header>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 100, paddingTop:150, alignSelf: 'flex-start'}}>
                    <h2>Tietosuojakäytäntö</h2>
                    <p>{privacyPolicyText}</p>
                </main>
            </div>
        </div>
    ):(
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Tutustu Uriel Tekoälyyn, suomalaisiin tarpeisiin suunniteltuun älykkääseen tekoäly-chat-palveluun. Saat ohjeita, suosituksia, reseptejä ja paljon muuta! Uriel on henkilökohtainen assistenttisi aina puhelimessasi. Lataa ilmainen sovellus ja säästä aikaa, rahaa ja vaivaa arjen askareissa."></meta>
                <meta name="keywords" content="tekoäly, suomi, ai, uriel"></meta>
                <meta name="robots" content="noindex, nofollow"></meta>
                <title>Uriel - Yksityisyys</title>

            </Helmet>
            <div style={{flexDirection: 'column'}}>
                <header style={{width: '100%'}}>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 50, alignSelf: 'flex-start'}}>
                    <h2>Tietosuojakäytäntö</h2>
                    <p>{privacyPolicyText}</p>
                </main>
            </div>
        </div>
    )
}