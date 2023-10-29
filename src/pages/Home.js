import React from "react"
import Hero from "../components/Sections/Hero/Hero"
import Services from "../components/Sections/Services/Services"
import Contacts from "../components/Sections/Contacts/Contacts"
import MoreInformations from "../components/Sections/MoreInformations/MoreInformations"
import YourCases from "../components/Sections/YourCases/YourCases"

function Home(){
    return(
        <>
        <Hero/>
        <Services/>
        <MoreInformations/>
        <YourCases/>
        <Contacts/>
        </>
    )
}
export default Home