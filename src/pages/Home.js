import React from "react"
import Hero from "../components/Sections/Hero/Hero"
import Services from "../components/Sections/Services/Services"
import Contacts from "../components/Sections/Contacts/Contacts"
import MoreInformations from "../components/Sections/MoreInformations/MoreInformations"

function Home(){
    return(
        <>
        <Hero/>
        <Services/>
        <MoreInformations/>
        <Contacts/>
        </>
    )
}
export default Home