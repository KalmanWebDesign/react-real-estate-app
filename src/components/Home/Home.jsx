import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Heading from '../Heading/Heading'
import Main from '../Main/Main'
import TotalApp from '../TotalApp/TotalApp'
import Footer from '../Footer/Footer'

const Home = () => {
    const [totalAppreciation, setTotalAppreciation] = useState(0);

    return (
        <div>
            <Navbar />
            <div className="main-content">
                <Heading />
                <Main totalAppreciationProp={setTotalAppreciation} />
                <TotalApp totalAppreciation={totalAppreciation}/>
            </div>
            <Footer/>

        </div>
    )
}

export default Home