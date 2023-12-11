import urielLogo from '../../assets/Logo.svg'
import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function NavBar(){  
  const colors = {
    Primary: "#3994FF",
    White: '#fffff'
}
    const [mobile, setMobile] = useState(window.innerWidth <= 800);

    const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 800);
    }

    useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
    }, []);
    

    return !mobile ? (
<header style={{
    backgroundColor: colors.Primary, 
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    height: 80,
    flexDirection: 'row',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0
}}>

    <h2 style={{
        fontSize: 50,
        marginRight: 40,
        alignSelf: 'center',
        color: 'white'
    }}>Uriel</h2>
    <img src={urielLogo} style={{width: 80 }} alt="Uriel tekoälyn logo" />

    <li style={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
    }}>
        <ul><a style={styles.listItem} href="/etusivu">Etusivu</a></ul>
        <ul><a style={styles.listItem} href="/kayttoehdot">Käyttöehdot</a></ul>
        <ul><a style={styles.listItem} href="/tietosuoja">Yksityisyys</a></ul>
        <ul><a style={styles.listItem} href="/yhteydenotto">Ota yhteyttä</a></ul>
        <ul style={{alignItems: 'flex-end'}}>
            <a style={{ alignContent: 'flex-end' }} target='__blank' href="https://www.instagram.com/urieltekoaly">
                <FaInstagram size={50} style={{ alignSelf: 'center', justifySelf: 'center' }} />
            </a>
        </ul>
    </li>
</header>

    ): (
        <header
          style={{
            backgroundColor: colors.Primary,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
              textAlign: 'center',
              padding: 0,
            }}
          >
            <li style={styles.mobileListItem}>
              <a href="/etusivu">
                Etusivu
              </a>
            </li>
            <li style={styles.mobileListItem}>
              <a href="/kayttoehdot">
                Käyttöehdot
              </a>
            </li>
            <li style={styles.mobileListItem}>
              <a href="/tietosuoja">
                Yksityisyys
              </a>
            </li>
            <li style={styles.mobileListItem}>
              <a href="/yhteydenotto">
                Ota yhteyttä
              </a>
            </li>
          </ul>
        </header>
      );
    }
    
    const styles = {
      listItem: {
        color: "white",
        textDecoration: 'none',
        fontSize: 28,
      },
      mobileListItem: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 22,
        margin: '10px 0',
        marginBottom: 8
      },
    };