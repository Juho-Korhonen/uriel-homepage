import NavBar from "../inclusive/NavBar"
import { useEffect, useState } from "react";

export function NoPage(){
    const [mobile, setMobile] = useState(window.innerWidth <= 500);

    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 500);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[])

    return !mobile ? (
        <main>
            <NavBar/>
            <h1 style={{marginInline: 20}}>Tässä osoitteessa ei ole mitään, haluatko siirtyä etusivulle?</h1>
            <button style={{backgroundColor: '#3994FF', color:'white', marginInline: 30}} onClick={() => window.location.replace("https://urielai.com/etusivu")}>Siirry takaisin etusivulle</button>
        </main>
    ):
    (
        <main  style={{position: 'absolute', top: 0, alignItems: 'center', textAlign: 'center'}}>
            <NavBar/>
            <h1>Tässä osoitteessa ei ole mitään, haluatko siirtyä etusivulle?</h1>
            <button style={{backgroundColor: '#3994FF', color:'white'}} onClick={() => window.location.replace("https://urielai.com/etusivu")}>Siirry takaisin etusivulle</button>
        </main>
    )
}