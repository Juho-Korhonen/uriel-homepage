import NavBar from "../inclusive/NavBar"
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async'

export function NoPage(){
    const [mobile, setMobile] = useState(window.innerWidth <= 800);

    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 800);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[])

    return !mobile ? (
        <main>
            <Helmet prioritizeSeoTags>
                <title>Uriel Tekoäly Chat - 404</title>
            </Helmet>
            <NavBar/>
            <h1 style={{marginInline: 20}}>Tässä osoitteessa ei ole mitään, haluatko siirtyä etusivulle?</h1>
            <button style={{backgroundColor: '#3994FF', color:'white', marginInline: 30}} onClick={() => window.location.replace("https://urielai.com/etusivu")}>Siirry takaisin etusivulle</button>
        </main>
    ):
    (
        <main  style={{position: 'absolute', top: 0, alignItems: 'center', textAlign: 'center'}}>
            <Helmet prioritizeSeoTags>
                <title>Uriel Tekoäly Chat - 404</title>
            </Helmet>
            <NavBar/>
            <h1>Tässä osoitteessa ei ole mitään, haluatko siirtyä etusivulle?</h1>
            <button style={{backgroundColor: '#3994FF', color:'white'}} onClick={() => window.location.replace("https://urielai.com/etusivu")}>Siirry takaisin etusivulle</button>
        </main>
    )
}