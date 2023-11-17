import NavBar from "../inclusive/NavBar"
import ReactGA from 'react-ga';
import { useState, useEffect } from "react";


export function TermsOfService(){
    const [mobile, setMobile] = useState(window.innerWidth <= 500);
    const TermsOfServiceText = `
    Käyttöehdot - Uriel Tekoäly Chat
    Viimeksi päivitetty: heinäkuu 2023
    
    Asentaessasi tai käyttäessäsi Uriel Tekoäly Chat -sovellusta myönnät lukeneesi, ymmärtäneesi ja hyväksyneesi nämä käyttöehdot.
    
    Uriel Tekoäly Chat on sovellus, joka mahdollistaa keskustelut tekoälyn kanssa.
    
    Käytät Uriel Tekoäly Chattia omalla vastuullasi. Sinun vastuullasi on varmistaa, että sovelluksen käyttö noudattaa kaikkia voimassa olevia lakeja ja säädöksiä Suomessa. 
    Kunnioita myös yleistä järjestystä ja yksityisyyttä. 
    Kannat täyden vastuun kaikista sovelluksen kautta syöttämästäsi tai generoimastasi sisällöstä sekä tällaisen sisällön edelleen jakamisesta tai levittämisestä.
    
    Uriel Tekoäly Chatin yksittäinen operaattori myöntää sinulle rajoitetun, ei-yksinomaisen, ei-siirrettävän, ei-alaistettavan, 
    ei-vastaanotettavan ja peruutettavan oikeuden päästä käsiksi ja käyttää sovellusta.
    
    Uriel Tekoäly Chat on tarkoitettu vain ei-kaupallisiin tarkoituksiin. 
    Et saa levittää sovellusta, tarjota sen palveluja kolmansille osapuolille tai pyrkiä hyötymään sovelluksesta millään tavalla.

    Sovellus käyttää kohdistettuja mainoksia, ja käyttämällä sovellusta hyväksyt kohdistettujen mainosten käytön.
    
    Kunnioita sovelluksen operaattorin immateriaalioikeuksia, mukaan lukien lähdekoodi, käyttöliittymäsuunnittelu, sisältö ja tavaramerkit.
    
    Kunnioita kolmansien osapuolten immateriaalioikeuksia. Sinulla on ehdottomasti kiellettyä käyttää tekijänoikeuksin suojattua ja/tai tavaramerkittyä materiaalia syötetyn sisällönä Uriel Tekoäly Chatissa.
    
    Sovellus sisältää OpenAI-rajapinnan (https://beta.openai.com/docs/api-reference), ja sinun on noudatettava API:n ehtoja ja käytäntöjä, jotka ovat saatavilla osoitteessa https://openai.com/api/policies/service-terms/ jakaaessasi Käyttäjäsisältöäsi*. Käyttäjäsisältöön kuuluu kaikki sovelluksen kautta generoitu sisältö, jonka AI luo, sekä syöttämäsi sisältö.
    
    Kaikki oikeudet, joita ei nimenomaisesti myönnetä tässä, pidätetään.
    
    Sinun on oltava vähintään 18-vuotias käyttääksesi Uriel Tekoäly Chattia. 
    Jos olet 13–17-vuotias, sinun on annettava todiste vanhemman tai huoltajan suostumuksesta ennen sovelluksen käyttöä. 
    Sovellusta ei ole tarkoitettu alle 13-vuotiaille.
    
    Sinulla on kiellettyä ladata tai generoida Käyttäjäsisältöä, jolla on seuraavia piirteitä:
    
    On syrjivää tai vihamielistä ketään kohtaan.
    Promotoi vihaa tai väkivaltaa.
    Sisältää häirintää, uhkailua tai kiusaamista.
    Sisältää seksuaalisesti eksplisiittistä sisältöä tai on tarkoitettu seksuaalisen kiihotuksen herättämiseen.
    Ylistää muiden kärsimystä tai nöyryyttämistä.
    Sisältää ei-toivottua massasisältöä.
    Yrittää generoida haittaohjelmia.
    Kannustaa itsensä vahingoittamiseen tai itsemurhaan.
    Tuottaa provosoivia poliittisia lausuntoja tai palvelee kampanjointitarkoituksia.
    Levittää vääriä tai harhaanjohtavia tietoja, yrittää huijata yksilöitä tai osallistuu harhaanjohtokampanjoihin.
    On laiton tai sopimaton muista syistä.
    
    Sitoudut olemaan käyttämättä Uriel Tekoäly Chattia laittomalla, kielletyllä, valtuuttamattomalla tai haitallisella tavalla, mukaan lukien, mutta ei rajoittuen:
    
    Tekemällä herjaavia tai loukkaavia huomautuksia yksilöistä.
    Loukkaamalla muiden omistamia tekijänoikeuksia, tietokantarajoituksia tai tavaramerkkejä.
    Puoltamalla, edistämällä tai avustamalla laittomia toimia.
    
    Uriel Tekoäly Chatin operaattori ei ole vastuussa siitä, miten käytät sovellusta. Jos käyttäytymisesi ilmoitetaan näiden ehtojen rikkovan, operaattori voi ryhtyä asianmukaisiin oikeudellisiin toimenpiteisiin Suomen lain sallimissa rajoissa.
    
    Operaattorilla on oikeus muuttaa tai päivittää Uriel Tekoäly Chattia ilman ennakkoilmoitusta.
    
    Uriel Tekoäly Chat tarjotaan ilmaiseksi. Tietyt ominaisuudet voivat kuitenkin edellyttää kertaluonteista sovelluksen sisäistä ostoa tai tilausta.
    
    Tarvittavat tiedot tilaussuunnitelmista toimitetaan rekisteröitymisen yhteydessä ennen ostoa. Operaattorilla on oikeus muuttaa, lopettaa tai muuttaa tarjottuja tilaussuunnitelmia milloin tahansa.
    
    Tilaukset, mukaan lukien ilmaisen kokeilujakson aloittavat tilaukset, uusitaan automaattisesti uudelle laskutuskaudelle, ja veloitus suoritetaan 24 tuntia ennen uuden laskutuskauden alkamista. Jos haluat peruuttaa tilauksesi, peruutus koskee seuraavaa laskutusjaksoa, ja olet vastuussa tilaustesi hallinnasta.
    
    Uriel Tekoäly Chatin poistaminen ei poista tilaustasi.
    
    Viestinnän palveluntarjoajasi määräämät maksut, mukaan lukien dataroaming-maksut, ovat yksinomaan vastuullasi. Ennen näiden maksujen aiheuttamista varmista, että sinulla on lupa henkilöltä, joka vastaa matkapuhelimesi tai tablet-laitteesi laskuihin liittyvien maksujen maksamisesta.
    
    Lue huolellisesti tietosuojakäytäntömme https://urielai.com/#/tietosuoja saadaksesi tietoa siitä, miten käsittelemme tietojasi.
    
    Uriel Tekoäly Chat tarjotaan "sellaisena kuin se on" ja "saatavilla olevana." Operaattori ei anna takuuta siitä, että pääsy sovellukseen tai sen toimintoihin olisi keskeytymätöntä tai virheetöntä.
    
    Jos Uriel Tekoäly Chatin käyttösi johtaa mihin tahansa rikkomukseen, operaattori ei ota vastuuta eikä vastuuta. Olet vastuussa kolmansien osapuolten immateriaalioikeuksien loukkaamisesta tai mistä tahansa muusta laittomasta/sopimattomasta toiminnasta, joka saattaa vahingoittaa kolmatta osapuolta. Sitoudut korvaamaan ja vapauttamaan operaattorin, seuraajat, siirrot, lisenssinantajat, yhteistyökumppanit, kumppanit, virkamiehet, johtajat ja työntekijät kaikista vaatimuksista, vastuista, valituksista, tappioista, kuluista ja vahingoista, jotka johtuvat Uriel Tekoäly Chatin käytöstäsi.
    
    OPERATOR EI OLE VASTUUSSA KOLMANSIEN OSAPUOLTEN TARJOAMIEN TUOTTEIDEN, PALVELUIDEN TAI TIETOJEN AIHEUTTAMISTA VAHINGOISTA.
    
    Nämä käyttöehdot ovat Suomen lakien alaisia ja tulkitaan niiden mukaisesti. Kaikki riidat ratkaistaan sovinnollisesti ennakko-oikeudenkäyntimenettelyssä. Jos osapuolet eivät ratkaise riitaa 60 kalenteripäivän kuluessa alkuperäisen vaatimuksen vastaanottamisesta, riita lähetetään toimivaltaiselle tuomioistuimelle Suomessa. Suostut luopumaan oikeudestasi ryhtyä ryhmäkanteeseen tai osallistua siihen. `
    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 500);
    }
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
        ReactGA.event({
            category: 'pageOpened',
            action: 'tos page opened',
        })
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[])


    document.title = "Uriel - Käyttöehdot"
    return !mobile ? (
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="uriel Tekoäly Chatin käyttöehdot"></meta>
                <meta name="keywords" content="tekoäly, uriel, käyttöehdot"></meta>
                <meta name="robots" content="noindex, nofollow"></meta>
            </head>
            <body>
                <header>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 100, paddingTop:150, alignSelf: 'flex-start'}}>
                    <h2>Käyttöehdot</h2>
                    <p>{TermsOfServiceText}</p>
                </main>
            </body>
        </html>
    ):(
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Tutustu Uriel Tekoälyyn, suomalaisiin tarpeisiin suunniteltuun älykkääseen tekoäly-chat-palveluun. Saat ohjeita, suosituksia, reseptejä ja paljon muuta! Uriel on henkilökohtainen assistenttisi aina puhelimessasi. Lataa ilmainen sovellus ja säästä aikaa, rahaa ja vaivaa arjen askareissa."></meta>
                <meta name="keywords" content="tekoäly, suomi, ai, uriel"></meta>
                <meta name="robots" content="noindex, nofollow"></meta>
            </head>
            <body style={{flexDirection: 'column'}}>
                <header style={{width: '100%'}}>
                    <NavBar/>
                </header>
                <main style={{flex:1, padding: 50, alignSelf: 'flex-start'}}>
                    <h2>Käyttöehdot</h2>
                    <p>{TermsOfServiceText}</p>
                </main>
            </body>
        </html>
    )
}