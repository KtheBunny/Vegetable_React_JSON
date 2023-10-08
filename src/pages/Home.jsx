import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Content from "../components/Content"
import Footer from "../components/Footer"

import Banner from "../json/Banner.json"
import SuggestedItems from "../json/SuggestedItems.json"
import Descriptions from "../json/Descriptions.json"

function Home() {
  return (
    <>
    <div class="bg">

        <div class="container">

        <Header />

        <NavBar />

        <Content Banner={Banner} SuggestedItems={SuggestedItems} Descriptions={Descriptions}/>

        </div>

        <Footer />

    </div>
    </>
  )
}

export default Home
