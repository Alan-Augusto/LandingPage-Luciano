import React from "react"
import Hero from "../../components/sections/Hero/Hero.js"
import Services from "../../components/sections/Services/Services.js"
import Contacts from "../../components/sections/Contacts/Contacts.js"
import MoreInformations from "../../components/sections/MoreInformations/MoreInformations.js"
import YourCases from "../../components/sections/YourCases/YourCases.js"
import Assessments from "../../components/sections/Assessments/Assessments.js"

function Home(){
    return(
        <>
        <Hero/>
        <Services/>
        <MoreInformations/>
        <YourCases/>
        <Assessments/>
        <Contacts/>
        </>
    )
}
export default Home